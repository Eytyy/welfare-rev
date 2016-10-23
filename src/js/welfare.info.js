const INFO = (shell) => {
  const domMap = {};

  const tplMap = {
    projects: 'map-info-projects.tpl.hbs',
    buildings: 'map-info-buildings.tpl.hbs',
    housing: 'map-info-housing.tpl.hbs',
  };

  const dataCache = {};

  return {

    init() {
      console.log('hi');
      // Cache dom elements
      domMap.$container = shell.find('#info');

      // Bind methods to this
      this.updateProject = this.updateProject.bind(this);

      // setup window
      this.setupInfoWindow();

      // Listen to global events
      shell.listen({
        'update-project': this.updateProject,
      });
    },

    showInfoWindow() {
      domMap.$info.classList.add('js-view-mode');
    },

    updateInfoWindow(data) {
      console.log('updating info');
      const activeLayer = data.activeLayer;
      const activeProjectName = data.activeProjectName;
      const previousProjectName = data.previousProjectName;
      const activeProject = data.activeProject;

      const projectData = data.activeProject.f;
      const activeProjectID = projectData.OBJECTID;
      const resourcesID = projectData.ukey;

      if (activeProjectName === previousProjectName) {
        return true;
      }

      domMap.$infoInner.scrollTop = 0;
      domMap.$info.classList.remove('js-infoExpanded');

      // Add Project info to html
      function appendInfo(projectData) {
        console.log('info updated');
        const tpl = tplMap[data.activeLayer];
        Handlebars.registerHelper({
          or: (v1, v2) => {
            const rval = v1 || v2;
            return rval;
          },
          and: (v1, v2) => {
            const rval = v1 && v2;
            return rval;
          },
          eq: (v1, v2) => {
            const rval = v1 === v2;
            return rval;
          },
          ne: (v1, v2) => {
            const rval = v1 !== v2;
            return rval;
          },
          formatCurr: (v) => {
            const val = v.toString().split('.');
            val[0] = val[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return val;
          },
          formatFileName: (v) => {
            const val = v.match(/[^\\/]+$/)[0];
            return val;
          },
        });
        const rendered = Handlebars.templates[tpl](projectData);
        domMap.$infoInner.innerHTML = rendered;
      }

      if (dataCache[activeProjectID]) {
        console.log('cached data');
        // Update Info
        appendInfo(dataCache[activeProjectID]);
        this.showInfoWindow();
        return true;
      }

      function fetchImages() {
        const url = `resources/images/${activeLayer}/${resourcesID}`;
        return shell.get(url).then(images => (images)).catch((err) => {
          console.log(err);
        });
      }

      function fetchExtraResources() {
        const url = `resources/other/${activeLayer}/${resourcesID}`;
        return shell.get(url).then(resources => (resources)).catch((err) => {
          console.log(err);
        });
      }

      // Fetch Project Images
      Promise.all([fetchImages(), fetchExtraResources()]).then(allData => {
        const obj = {
          miscImages: [],
          otherFiles: [],
        };
        allData[0].data.forEach((item, index) => {
          if (/before.jpg/i.test(item)) {
            obj.beforeImage = item;
          }
          else if (/after.jpg/i.test(item)) {
            obj.afterImage = item;
          }
          else if (/main.jpg/i.test(item)) {
            obj.mainImage = item;
          }
          else {
            if (index !== 0) {
              obj.miscImages.push(item);
            }
          }
        });

        allData[1].data.forEach((item, index) => {
          if (index !== 0) {
            obj.otherFiles.push(item);
          }
        });

        const completeData = Object.assign(projectData, obj);
        // Update Cache
        dataCache[activeProjectID] = completeData;
        // Update Info
        appendInfo(completeData);
        this.showInfoWindow();
      }).catch(error => {
        console.log(error);
        // Update Cache
        dataCache[activeProjectID] = data;
        // Update Info
        appendInfo(data);
        this.showInfoWindow();
      });
    },

    setupInfoWindow() {
      const tplName = 'map-info.tpl.hbs';
      const tpl = Handlebars.templates[tplName]();

      shell.injectTemplateText(tpl, domMap.$container);

      domMap.$infoGrabber = shell.find('.map-info__grabber');
      domMap.$infoInner = shell.find('.map-info__inner');
      domMap.$info = shell.find('.map-info');
    },

    updateProject(event) {
      this.updateInfoWindow(event);
    },
  };
};
