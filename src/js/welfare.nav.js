/* NAV MODULE */
const NAV = (shell) => {
  const domMap = {};
  const navMap = {};
  const filteredData = {};
  const navState = {
    activeLayer: null,
    previousLayer: null,
    activeCategory: null,
    previousCategory: null,
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

      // Listen to global events
      shell.listen({
        'layers-created': this.setMainNav,
        'layers-data-updated': this.updateMainNav,
        // 'project-updated': this.updateProject.bind(this),
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
      }
      if (active !== previous || (active === previous && layers.active.visible)) {
        shell.find(`.map__nav__item-wrapper--${active}`).classList.add('js-active');
        domMap.$nav.classList.add('js-catIsOpened');
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

    toggleProject() {
      console.log('toggle project');
    },

    closeCategory() {
      console.log('close category');
      console.log('adjust position');
    },

    openCategory() {
      console.log('open category');
      console.log('adjust position');
    },

    toggleCategory() {
      console.log('toggleCategory');
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
          this.toggleProject(el);
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
          this.toggleProject(el);
        }
      }
      event.stopPropagation();
      return true;
    },
  };
};
//
