'use strict';

/* NAV MODULE */
var NAV = function NAV(shell) {
  var domMap = {};
  var navMap = {};
  var filteredData = {};
  var navState = {
    activeCategory: null,
    activeProject: null,
    previousProject: null,
    activeLayer: null
  };

  var debugmode = true;

  return {
    init: function init() {
      // Cache dom elements
      domMap.$nav = shell.find('#map__nav');
      domMap.$info = shell.find('.map-info');

      // Bind methods to this
      this.onNavClick = this.onNavClick.bind(this);
      this.setMainNav = this.setMainNav.bind(this);
      this.updateMainNav = this.updateMainNav.bind(this);
      this.updateProject = this.updateProject.bind(this);
      this.resetProject = this.resetProject.bind(this);

      // Listen to global events
      shell.listen({
        'layers-created': this.setMainNav,
        'layers-data-updated': this.updateMainNav,
        'update-project': this.updateProject,
        'reset-project': this.resetProject
      });

      // Listen to click events on navigation
      domMap.$nav.addEventListener('click', this.onNavClick, false);
    },


    // Should be called on layer update always regardless to state
    // state should be maintained by map
    updateMainNav: function updateMainNav(layers) {
      console.log('update nav');
      var data = layers.active && layers.active.data;
      var active = layers.active && layers.active.name;
      var previous = layers.previous && layers.previous.name;
      var populated = active && navMap[active].populated;

      navState.activeLayer = active;

      if (!active && previous) {
        shell.find('.map__nav__item-wrapper--' + previous).classList.remove('js-active');
        domMap.$nav.classList.remove('js-layerIsOpened');
        this.resetNav();
        return true;
      }
      // populate list with data if it's not already
      if (!populated && data) {
        this.setLayerNav(data, active);
        navMap[active].populated = true;
      }
      // handle classes
      if (previous) {
        shell.find('.map__nav__item-wrapper--' + previous).classList.remove('js-active');
        domMap.$nav.classList.remove('js-layerIsOpened', '' + active, '' + previous);
        this.resetNav();
      }
      if (active !== previous || active === previous && layers.active.visible) {
        shell.find('.map__nav__item-wrapper--' + active).classList.add('js-active');
        domMap.$nav.classList.add('js-layerIsOpened', '' + active);
      }
    },
    resetNav: function resetNav() {
      if (navState.activeCategory) {
        this.closeCategory(navState.activeCategory, navState.activeCategory.nextElementSibling);
      }
    },
    setMainNav: function setMainNav(layers) {
      var _this = this;

      var tpl = Handlebars.templates['nav.tpl.hbs'](layers);
      shell.injectTemplateText(tpl, domMap.$nav);

      domMap.navItemWrapper = shell.findAll('.map__nav__item-wrapper');
      domMap.navItem = shell.findAll('.map__nav__item--layer');
      domMap.$about = shell.findAll('.about-btn');

      Object.keys(layers).forEach(function (key) {
        var obj = {};
        obj.populate = false;
        obj.parentEL = document.querySelector('.map__nav__item--' + key);
        obj.data = null;
        navMap[key] = obj;
      });

      domMap.$about.forEach(function (item) {
        item.addEventListener('click', _this.onAboutClick);
      });
    },
    buildProjectsLayerNavigation: function buildProjectsLayerNavigation(wrapper, data, activeLayer) {
      var buildCategoryHtml = function buildCategoryHtml(catName, catData) {
        var $catWrapper = shell.createElement('div', {
          class: ['map__nav__item--category', 'map__nav__item--category--' + catName]
        });
        var $catInner = shell.createElement('div', {
          class: ['category__inner']
        });
        var tpl = Handlebars.templates['nav-cat.tpl.hbs']({ title: catName });

        shell.injectTemplateText(tpl, $catWrapper);
        $catWrapper.appendChild($catInner);

        Object.keys(catData).forEach(function (key) {
          var id = catData[key].getProperty('RelatedEnglishTitle');
          if (catData[key].getGeometry().getAt(0)) {
            var itemTpl = Handlebars.templates['nav-layer-wcat.tpl.hbs']({ title: id, cat: catName });
            shell.injectTemplateText(itemTpl, $catInner);
          } else {
            if (debugmode) {
              console.log(id + ' does not have geometry');
            }
          }
        });
        return $catWrapper;
      };
      // Filter Duplicates
      if (!filteredData[activeLayer]) {
        var obj = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var el = _step.value;

            // If the data set has categories, then filter/group them based on category name
            var category = el.getProperty('CatAName');
            var item = el.getProperty('RelatedEnglishTitle');
            if (!obj[category]) {
              obj[category] = {};
            }
            if (!obj[category][item]) {
              obj[category][item] = el;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        filteredData[activeLayer] = obj;
      }
      // Loop through data to add an element/link for each project in the layer navigation
      Object.keys(filteredData[activeLayer]).forEach(function (key) {
        var navGroup = buildCategoryHtml(key, filteredData[activeLayer][key]);
        wrapper.appendChild(navGroup);
      });
      shell.find('.map__nav__item-wrapper--' + activeLayer).appendChild(wrapper);
    },
    buildBuildingsLayerNavigation: function buildBuildingsLayerNavigation(wrapper, data, activeLayer) {
      var buildCategoryHtml = function buildCategoryHtml(catName, catData) {
        var $catWrapper = shell.createElement('div', {
          class: ['map__nav__item--category', 'map__nav__item--category--' + catName]
        });
        var $catInner = shell.createElement('div', {
          class: ['category__inner']
        });
        var tpl = Handlebars.templates['nav-cat-noicon.tpl.hbs']({ title: catName });

        shell.injectTemplateText(tpl, $catWrapper);
        $catWrapper.appendChild($catInner);

        Object.keys(catData).forEach(function (key) {
          var id = catData[key].alldata.BuildingName;
          if (catData[key].getGeometry() && catData[key].getGeometry().getAt(0)) {
            var itemTpl = Handlebars.templates['nav-layer-wcat.tpl.hbs']({ title: id, cat: catName });
            shell.injectTemplateText(itemTpl, $catInner);
          } else {
            if (debugmode) {
              console.log(id + ' does not have geometry');
            }
          }
        });
        return $catWrapper;
      };
      // Filter Duplicates
      if (!filteredData[activeLayer]) {
        (function () {
          var obj = {};
          var sortedData = [];
          var sortData = void 0;
          shell.get('data/sort.json').then(function (sdata) {
            sortData = sdata.Sort;
            sortData.forEach(function (el) {
              el.sort = parseInt(el.sort, 10);
            });

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              var _loop = function _loop() {
                var el = _step2.value;

                // If the data set has categories, then filter/group them based on category name
                var category = el.alldata.BuildingType;
                var item = el.alldata.BuildingName.trim();
                if (!obj[category]) {
                  obj[category] = {};
                  obj[category].name = category;
                  obj[category].sort = sortData.find(function (element) {
                    return element.Name === category;
                  }).sort;
                }
                if (!obj[category].alldata) {
                  obj[category].alldata = {};
                }
                if (!obj[category].alldata[item]) {
                  obj[category].alldata[item] = el;
                }
              };

              for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                _loop();
              }

              // copy object to an array to get sorted
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            Object.keys(obj).forEach(function (key) {
              sortedData.push(obj[key]);
            });
            // sort data
            sortedData = _.sortBy(sortedData, 'sort');

            // update filtered data with sorted data
            filteredData[activeLayer] = sortedData;

            // Loop through data to add an element/link for each project in the layer navigation
            filteredData[activeLayer].forEach(function (cat) {
              var name = cat.name.replace(/ +/g, '');
              var navGroup = buildCategoryHtml(name, cat.alldata);
              wrapper.appendChild(navGroup);
            });
            shell.find('.map__nav__item-wrapper--' + activeLayer).appendChild(wrapper);
          });
        })();
      }
    },
    buildHousingLayerNavigation: function buildHousingLayerNavigation(wrapper, data, activeLayer) {
      var buildCategoryHtml = function buildCategoryHtml(catName, catData) {
        var $catWrapper = shell.createElement('div', {
          class: ['map__nav__item--category', 'map__nav__item--category--' + catName]
        });
        var $catInner = shell.createElement('div', {
          class: ['category__inner']
        });
        var tpl = Handlebars.templates['nav-cat-noicon.tpl.hbs']({ title: catData.buildingName });

        shell.injectTemplateText(tpl, $catWrapper);
        $catWrapper.appendChild($catInner);

        // loop through each building to add children studies to the navigation
        catData.alldata.forEach(function (el, index) {
          var title = 'Unit No.' + (index + 1);
          var itemTpl = Handlebars.templates['nav-layer-housing.tpl.hbs']({ target: index + 1, title: title, cat: catName });
          shell.injectTemplateText(itemTpl, $catInner);
        });
        return $catWrapper;
      };

      if (!filteredData[activeLayer]) {
        var obj = {};

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _el = _step3.value;

            // If the data set has categories, then filter/group them based on category name
            var _category = _el.buildingName.replace(/ +/g, '').replace(/\./g, '-');
            if (!obj[_category]) {
              obj[_category] = _el;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        filteredData[activeLayer] = obj;
      }
      Object.keys(filteredData[activeLayer]).forEach(function (key) {
        var navGroup = buildCategoryHtml(key, filteredData[activeLayer][key]);
        wrapper.appendChild(navGroup);
      });
      shell.find('.map__nav__item-wrapper--' + activeLayer).appendChild(wrapper);
    },
    setLayerNav: function setLayerNav(data, activeLayer) {
      // Layer Inner Div
      var $navWrapper = shell.createElement('div', { class: ['map__nav__item__inner'] });

      switch (activeLayer) {
        case 'projects':
          this.buildProjectsLayerNavigation($navWrapper, data, activeLayer);
          break;
        case 'buildings':
          this.buildBuildingsLayerNavigation($navWrapper, data, activeLayer);
          break;
        case 'housing':
          this.buildHousingLayerNavigation($navWrapper, data, activeLayer);
          break;
        default:
          return;
      }
    },
    resetProject: function resetProject(event) {
      if (!event.activeProject) {
        return true;
      }
      var projectName = undefined;
      switch (event.activeLayer) {
        case 'projects':
          projectName = event.activeProject.getProperty('RelatedEnglishTitle') || undefined;
          break;
        case 'buildings':
          projectName = event.activeProject.getProperty('BuildingNa') || undefined;
          break;
        case 'housing':
          break;
        default:
          return true;
      }
      if (projectName) {
        shell.find('[data-target="' + projectName + '"]').classList.remove('js-active');
      }
    },
    onProjectClick: function onProjectClick(el) {
      shell.notify({
        type: 'project-nav-clicked',
        data: {
          category: el.dataset.cat,
          target: el.dataset.target,
          data: filteredData
        }
      });
    },
    updateProject: function updateProject(event) {
      console.log(event);
      // NOTE: update project navigation classes here
      var activeLayer = event.activeLayer;
      var opts = {};
      var prevProj = void 0;
      var activeProj = void 0;
      var catEl = void 0;
      var catInner = void 0;

      if (activeLayer !== 'housing') {
        if (event.previousProjectName) {
          prevProj = shell.find('[data-target="' + event.previousProjectName + '"]');
          opts.prevProjCat = shell.find('.map__nav__item--category--' + prevProj.dataset.cat);
          opts.prevCatInner = opts.prevProjCat.querySelector('.category__inner');

          prevProj.classList.remove('js-active');
        }

        activeProj = shell.find('[data-target="' + event.activeProjectName + '"]');
        catEl = shell.find('.map__nav__item--category--' + activeProj.dataset.cat);
        catInner = catEl.querySelector('.category__inner');

        activeProj.classList.add('js-active');
        domMap.$nav.classList.add('js-layerIsOpened');
        opts.activeProj = activeProj;

        this.toggleCategory(catEl, catInner, true, opts);
      } else {
        if (event.previousProjectName) {
          var _cat = event.previousProject.buildingName.replace(/ +/g, '').replace(/\./g, '-');

          prevProj = shell.find('[data-target="' + event.previousProjectName + '"][data-cat="' + _cat + '"]');

          opts.prevProjCat = shell.find('.map__nav__item--category--' + _cat);
          opts.prevCatInner = opts.prevProjCat.querySelector('.category__inner');

          prevProj.classList.remove('js-active');
        }

        var cat = event.activeProject.buildingName.replace(/ +/g, '').replace(/\./g, '-');
        activeProj = shell.find('[data-target="' + event.activeProjectName + '"][data-cat="' + cat + '"]');

        catEl = shell.find('.map__nav__item--category--' + cat);
        catInner = catEl.querySelector('.category__inner');

        activeProj.classList.add('js-active');
        domMap.$nav.classList.add('js-layerIsOpened');
        opts.activeProj = activeProj;

        this.toggleCategory(catEl, catInner, true, opts);
      }
    },
    adjustProjectInnerPosition: function adjustProjectInnerPosition(el, left, width, content) {
      var element = el;
      var categoryInner = content;
      var trns = 0;
      var wdth = 0;
      var innerwidth = left + 3;

      if (navState.activeLayer === 'projects') {
        trns = (left + 3 - width) * -1;
        wdth = trns * -1 - 150;
      } else if (navState.activeLayer === 'buildings') {
        trns = (left + 3 - width) * -1;
        wdth = trns * -1 + 300;
        innerwidth = left + 3;
      } else {
        trns = (left + 3 - width) * -1;
        wdth = trns * -1 + 450;
        innerwidth = left + 3 + 450;
      }
      // If any of the categories expanded except for the first category
      // update the styles of the project navigation

      // reset map nav inner scroll position
      element.parentNode.scrollLeft = 0;

      // reposition map nav inner and adjust width
      var adjustPosition = function adjustPosition() {
        return new Promise(function (resolve, reject) {
          try {
            setTimeout(function () {
              element.parentNode.style.transform = 'translate3d(' + trns + 'px, 0, 0)';
              resolve();
            }, 200);
          } catch (error) {
            reject(error);
          }
        });
      };

      var adjustWidth = function adjustWidth() {
        return new Promise(function (resolve, reject) {
          try {
            setTimeout(function () {
              element.parentNode.style.width = 'calc(100% + ' + wdth + 'px)';
              resolve();
            }, 300);
          } catch (error) {
            reject(error);
          }
        });
      };

      adjustPosition().then(function () {
        adjustWidth().then(function () {
          categoryInner.style.width = 'calc(100% - ' + innerwidth + 'px)';
        }).catch(function (err) {
          console.log('adjusting width error: ' + err);
        });
      }).catch(function (err) {
        console.log('adjusting position error: ' + err);
      });
    },
    resetProjectInnerPosition: function resetProjectInnerPosition(el, content) {
      var element = el;
      var categoryInner = content;
      categoryInner.scrollLeft = 0;
      element.parentNode.removeAttribute('style');
      categoryInner.removeAttribute('style');
    },
    closeCategory: function closeCategory(el, content, fromMap) {
      var element = el || navState.activeCategory;
      if (!element) return;
      if (element && content) {
        this.resetProjectInnerPosition(element, content);
      }
      element.classList.remove('js-active');
      domMap.$nav.classList.remove('js-catIsOpened');
      if (!fromMap) {
        shell.notify({
          type: 'category-closed',
          data: { fromMap: fromMap }
        });
      }
    },
    openCategory: function openCategory(el, content) {
      var element = el || navState.activeCategory;

      // Reset navigation scroll first
      if (domMap.$nav.scrollLeft > 0) {
        domMap.$nav.scrollLeft = 0;
      }
      var elLeft = element.offsetLeft;
      var elWidth = element.offsetWidth;

      element.classList.add('js-active');
      domMap.$nav.classList.add('js-catIsOpened');

      this.adjustProjectInnerPosition(element, elLeft, elWidth, content);
    },
    toggleCategory: function toggleCategory(el, content, fromMap, opts) {
      var cnt = content;
      // If event is comming from map
      if (fromMap) {
        if (navState.activeCategory && el !== navState.activeCategory) {
          if (opts.prevProjCat) {
            this.closeCategory(opts.prevProjCat, opts.prevCatInner, fromMap);
          }
        }
        if (!el.classList.contains('js-active')) {
          this.openCategory(el, content);
        }
        navState.activeCategory = el;
        setTimeout(function () {
          cnt.scrollLeft = opts.activeProj.offsetLeft - opts.activeProj.offsetWidth;
        }, 10);
        return true;
      }

      // If event is coming from clicking on the category
      //
      // If last active category is the same as the clicked category
      // Then we are clicking the same category either show it or hide it depnding
      // on state and return
      if (navState.activeCategory && navState.activeCategory === el) {
        if (el.classList.contains('js-active')) {
          this.closeCategory(el, content);
        } else {
          this.openCategory(el, content);
        }
        return true;
      } else if (navState.activeCategory) {
        // Else if last active category exists and not
        // the same remove active from last active category
        navState.activeCategory.classList.remove('js-active');
        domMap.$nav.classList.remove('js-catIsOpened');
      }
      // Update last active categroy
      navState.activeCategory = el;
      this.openCategory(el, content);
      return true;
    },
    onNavClick: function onNavClick() {
      var el = void 0;
      var content = void 0;

      // alias classList
      var classes = event.target.classList;

      // Check event target
      if (event.currentTarget !== event.target) {
        // Click on `Project`.
        if (classes.contains('map__nav__item--project')) {
          el = event.target;
          this.onProjectClick(el);
        }

        // Click on `Category`.
        else if (classes.contains('category-wrapper')) {
            el = event.target.parentNode;
            content = event.target.nextElementSibling;
            this.toggleCategory(el, content);
          }

          // Click on either `Layer` or `Category` link.
          else if (classes.contains('map__nav__item__icon') || classes.contains('map__nav__item__name')) {
              el = event.target.parentNode.parentNode;
              // We are only interested on click events on `Category` links.
              if (el.classList.contains('map__nav__item--category')) {
                content = event.target.parentNode.nextElementSibling;
                this.toggleCategory(el, content);
              }
            }

            // If it reaches here, click happened on `Project`.
            else if (classes.contains('map__nav__item__title')) {
                el = event.target.parentNode;
                this.onProjectClick(el);
              }
      }
      event.stopPropagation();
      return true;
    },
    onAboutClick: function onAboutClick(event) {
      shell.notify({
        type: 'about-clicked',
        data: event.target.dataset.target
      });
    }
  };
};
//