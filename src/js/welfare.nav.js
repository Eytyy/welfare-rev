/* NAV MODULE */
const NAV = (shell) => {
  const domMap = {};
  const navMap = {};
  const filteredData = {};
  const navState = {
    activeCategory: null,
    activeProject: null,
    previousProject: null,
  };

  return {
    init() {
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
        'project-nav-click-info': this.updateProject,
        'update-project': this.updateProject,
        'reset-project': this.resetProject,
      });

      // Listen to click events on navigation
      domMap.$nav.addEventListener('click', this.onNavClick, false);
    },

    // Should be called on layer update always regardless to state
    // state should be maintained by map
    updateMainNav(layers) {
      const data = layers.active && layers.active.data;
      const active = layers.active && layers.active.name;
      const previous = layers.previous && layers.previous.name;
      const populated = active && navMap[active].populated;

      if (!active && previous) {
        shell.find(`.map__nav__item-wrapper--${previous}`).classList.remove('js-active');
        domMap.$nav.classList.remove('js-catIsOpened');
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
        shell.find(`.map__nav__item-wrapper--${previous}`).classList.remove('js-active');
        domMap.$nav.classList.remove('js-catIsOpened');
        this.resetNav();
      }
      if (active !== previous || (active === previous && layers.active.visible)) {
        shell.find(`.map__nav__item-wrapper--${active}`).classList.add('js-active');
        domMap.$nav.classList.add('js-catIsOpened');
      }
    },

    resetNav() {
      if (navState.activeCategory) {
        this.closeCategory(navState.activeCategory, navState.activeCategory.nextElementSibling);
      }
    },

    setMainNav(layers) {
      const tpl = Handlebars.templates['nav.tpl.hbs'](layers);
      shell.injectTemplateText(tpl, domMap.$nav);

      domMap.navItemWrapper = shell.findAll('.map__nav__item-wrapper');
      domMap.navItem = shell.findAll('.map__nav__item--layer');

      Object.keys(layers).forEach(key => {
        const obj = {};
        obj.populate = false;
        obj.parentEL = document.querySelector(`.map__nav__item--${key}`);
        obj.data = null;
        navMap[key] = obj;
      });
    },

    buildProjectsLayerNavigation(wrapper, data, activeLayer) {
      const buildHtml = (catName, catData) => {
        const $catWrapper = shell.createElement('div', {
          class: ['map__nav__item--category', `map__nav__item--category--${catName}`],
        });
        const $catInner = shell.createElement('div', {
          class: ['category__inner'],
        });
        const tpl = Handlebars.templates['nav-cat.tpl.hbs']({ title: catName });

        shell.injectTemplateText(tpl, $catWrapper);
        $catWrapper.appendChild($catInner);

        Object.keys(catData).forEach(key => {
          const id = catData[key].getProperty('RelatedEnglishTitle');
          if (catData[key].getGeometry().getAt(0)) {
            const itemTpl = Handlebars.templates['nav-layer.tpl.hbs']({ title: id, cat: catName });
            shell.injectTemplateText(itemTpl, $catInner);
          }
          else {
            console.log(`${id} does not have geometry`);
          }
        });
        return $catWrapper;
      };

      // Filter Duplicates
      if (!filteredData[activeLayer]) {
        const obj = {};
        for (const el of data) {
          // If the data set has categories, then filter/group them based on category name
          const category = el.getProperty('CatAName');
          const item = el.getProperty('RelatedEnglishTitle');
          if (!obj[category]) {
            obj[category] = {};
          }
          if (!obj[category][item]) {
            obj[category][item] = el;
          }
        }
        filteredData[activeLayer] = obj;
      }
      // Loop through data to add an element/link for each project in the layer navigation
      Object.keys(filteredData[activeLayer]).forEach(key => {
        const navGroup = buildHtml(key, filteredData[activeLayer][key]);
        wrapper.appendChild(navGroup);
      });
      shell.find(`.map__nav__item-wrapper--${activeLayer}`).appendChild(wrapper);
    },

    buildBuildingsLayerNavigation() {
      console.log('buildings');
    },

    buildHousingLayerNavigation() {
      console.log('housing');
    },

    removeDuplicates() {
      const obj = {};
      for (const el of data) {
        const item = el.getProperty('BuildingNa').trim();
        if (!obj[item]) {
          obj[item] = el;
        }
      }
      filteredData[activeLayer] = obj;
    },

    setLayerNav(data, activeLayer) {
      // Layer Inner Div
      const $navWrapper = shell.createElement('div', { class: ['map__nav__item__inner'] });

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

    resetProject(event) {
      let projectName = undefined;
      switch (event.activeLayer) {
        case 'projects':
          projectName = event.activeProject.getProperty('RelatedEnglishTitle');
          break;
        case 'buildings':
          projectName = event.activeProject.getProperty('BuildingNa');
          break;
        case 'housing':
          break;
        default:
          return;
      }
      shell.find(`[data-target="${projectName}"]`).classList.remove('js-active');
    },

    onProjectClick(el) {
      shell.notify({
        type: 'project-nav-clicked',
        data: {
          category: el.dataset.cat,
          target: el.dataset.target,
          data: filteredData,
        },
      });
    },

    updateProject(event) {
      // NOTE: update project navigation classes here

      const opts = {};

      if (event.previousProjectName) {
        const prevProj = shell.find(`[data-target="${event.previousProjectName}"]`);
        opts.prevProjCat = shell.find(`.map__nav__item--category--${prevProj.dataset.cat}`);
        opts.prevCatInner = opts.prevProjCat.querySelector('.category__inner');

        prevProj.classList.remove('js-active');
      }

      const activeProj = shell.find(`[data-target="${event.activeProjectName}"]`);
      const catEl = shell.find(`.map__nav__item--category--${activeProj.dataset.cat}`);
      const catInner = catEl.querySelector('.category__inner');

      activeProj.classList.add('js-active');
      domMap.$nav.classList.add('js-layerIsOpened');
      opts.activeProj = activeProj;

      this.toggleCategory(catEl, catInner, true, opts);
    },

    adjustProjectInnerPosition(el, left, width, content) {
      const element = el;
      const categoryInner = content;
      // If any of the categories expanded except for the first category
      // update the styles of the project navigation
      if (left > '150') {
        // reset map nav inner scroll position
        element.parentNode.scrollLeft = 0;
        // reposition map nav inner and adjust width
        setTimeout(() => {
          element.parentNode.style.transform = `translate3d(${-left + width}px, 0, 0)`;
          element.parentNode.style.width = `calc(100% + ${left + width}px)`;
        }, 100);
        // Adjust category inner wrapper width
        const categoryInnerWidth = left + width + 300;
        categoryInner.style.width = `calc(100% - ${categoryInnerWidth}px)`;
      }
    },

    resetProjectInnerPosition(el, content) {
      const element = el;
      const categoryInner = content;
      categoryInner.scrollLeft = 0;
      element.parentNode.removeAttribute('style');
      categoryInner.removeAttribute('style');
    },

    closeCategory(el, content, fromMap) {
      const element = el || navState.activeCategory;
      if (!element) return;
      if (element && content) {
        this.resetProjectInnerPosition(element, content);
      }
      element.classList.remove('js-active');
      domMap.$nav.classList.remove('js-catIsOpened');
      shell.notify({
        type: 'category-closed',
        data: {},
      });
      // NOTE: notify
      // welfare.info.hideInfoWindow();
      // document.querySelector('.map-info').classList.remove('js-infoExpanded');
    },

    openCategory(el, content) {
      const element = el || navState.activeCategory;

      // Reset navigation scroll first
      if (domMap.$nav.scrollLeft > 0) {
        domMap.$nav.scrollLeft = 0;
      }
      const elLeft = element.offsetLeft;
      const elWidth = element.offsetWidth;

      element.classList.add('js-active');
      domMap.$nav.classList.add('js-catIsOpened');
      this.adjustProjectInnerPosition(element, elLeft, elWidth, content);
    },

    toggleCategory(el, content, fromMap, opts) {
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
        setTimeout(() => {
          content.scrollLeft = opts.activeProj.offsetLeft - opts.activeProj.offsetWidth;
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
        }
        else {
          this.openCategory(el, content);
        }
        return true;
      }
      else if (navState.activeCategory) {
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

    onNavClick() {
      let el;
      let content;

      // alias classList
      const classes = event.target.classList;

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
        else if (classes.contains('map__nav__item__icon') ||
          classes.contains('map__nav__item__name')) {
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
  };
};
//
