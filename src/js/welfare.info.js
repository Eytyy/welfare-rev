const INFO = (shell) => {
  const domMap = {};

  const tplMap = {
    projects: 'map-info-projects.tpl.hbs',
    buildings: 'map-info-buildings.tpl.hbs',
    housing: 'map-info-housing.tpl.hbs',
  };

  const dataCache = {
    projects: {},
    buildings: {},
    housing: {},
  };

  return {

    init() {
      // Cache dom elements
      domMap.$container = shell.find('#info');

      // Bind methods to this
      this.updateProject = this.updateProject.bind(this);
      this.hideInfoWindow = this.hideInfoWindow.bind(this);

      // setup window
      this.setupInfoWindow();

      shell.find('.map-info__grabber').addEventListener('click', this.toggleInfoExpand);

      // Listen to global events
      shell.listen({
        'update-project': this.updateProject,
        'layer-updated': this.hideInfoWindow,
        'category-closed': this.hideInfoWindow,
      });
    },

    showInfoWindow() {
      domMap.$info.classList.add('js-view-mode');
    },

    hideInfoWindow() {
      domMap.$info.classList.remove('js-view-mode');
    },

    toggleInfoExpand() {
      if (domMap.$info.classList.contains('js-infoExpanded')) {
        domMap.$info.classList.remove('js-infoExpanded');
      }
      else {
        domMap.$info.classList.add('js-infoExpanded');
      }
    },

    updateInfoWindow(data) {
      shell.notify({
        type: 'app-updating',
        data: {
          message: 'Loading Project',
        },
      });

      const activeLayer = data.activeLayer;
      const activeProject = data.activeProject;
      const activeProjectName = activeLayer === 'housing' ?
        data.activeProjectName - 1 :
        data.activeProjectName;

      let projectData;
      let activeProjectID;

      if (activeLayer === 'projects') {
        projectData = activeProject.f;
        activeProjectID = projectData.OBJECTID;
      }
      else if (activeLayer === 'buildings') {
        projectData = activeProject.alldata;
        activeProjectID = projectData.ID;
      }
      else {
        projectData = activeProject;
        activeProjectID = projectData.getProperty('OBJECTID');
      }

      const module = this;
      domMap.$infoInner.scrollTop = 0;
      domMap.$info.classList.remove('js-infoExpanded');

      // Add Project info to html
      function appendInfo(infoData) {
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
            const val = v ? v.toString().split('.') : '';
            val[0] = val[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return val;
          },
          formatFileName: (v) => {
            const val = v.match(/[^\\/]+$/)[0];
            return val;
          },
          notEmpty: (v) => {
            const val = v ? !(v.length === 0) : false;
            return val;
          },
          ico: (v) => {
            if (v === 'True' || v === 'Yes') {
              return 'check';
            }
            return 'cross';
          },
        });

        const rendered = Handlebars.templates[tpl](infoData);
        domMap.$infoInner.innerHTML = rendered;

        shell.notify({
          type: 'app-updated',
          data: {
            message: '',
          },
        });

        console.log('loaded');
      }

      if (dataCache[activeLayer][activeProjectID]) {
        shell.notify({
          type: 'app-updated',
          data: {
            message: '',
          },
        });
        if (activeLayer === 'housing') {
          appendInfo(Object.assign(
            {},
            dataCache[activeLayer][activeProjectID].alldata[activeProjectName],
            {
              building: dataCache[activeLayer][activeProjectID].buildingName,
              study: `Study No. ${activeProjectName + 1}`,
            }
          ));
        }
        else {
          appendInfo(dataCache[activeLayer][activeProjectID]);
        }
        // Update Info
        this.showInfoWindow();
        return true;
      }

      function fetchImages(id) {
        const url = `resources/images/${activeLayer}/${id}`;
        return shell.get(url).then(images => (images)).catch((err) => {
          console.log(err);
        });
      }

      function fetchExtraResources(id) {
        const url = `resources/other/${activeLayer}/${id}`;
        return shell.get(url).then(resources => (resources)).catch((err) => {
          console.log(err);
        });
      }

      function fetchProjectResources() {
        const resourcesID = projectData.ukey;

        Promise.all([fetchImages(resourcesID), fetchExtraResources(resourcesID)]).then(allData => {
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
          dataCache[activeLayer][activeProjectID] = completeData;
          // Update Info
          appendInfo(completeData);
          module.showInfoWindow();
        }).catch(error => {
          console.log(error);
          // Update Cache
          dataCache[activeLayer][activeProjectID] = data;
          // Update Info
          appendInfo(data);
          module.showInfoWindow();
        });
      }

      function fetchBuildingResources() {
        const resourcesID = projectData.ID;

        fetchImages(resourcesID).then(allData => {
          const imageData = data.activeProject.alldata.ImageData;
          const regex = /(\w*)(?:\.jpg)/i;

          const obj = {
            images: [],
          };

          allData.data.forEach((image, index) => {
            if (index !== 0) {
              const caption = imageData.find((el) =>
                el.PathNew === regex.exec(image)[1]
              ).name;
              if (caption) {
                obj.images.push({
                  image,
                  caption,
                });
              }
            }
          });
          Object.assign(projectData, obj);

          // Update Cache
          dataCache[activeLayer][activeProjectID] = projectData;

          // Update Info
          appendInfo(projectData);

          module.showInfoWindow();
        }).catch(error => {
          console.log(error);
          // Update Cache
          dataCache[activeLayer][activeProjectID] = data;
          // Update Info
          appendInfo(data);
          module.showInfoWindow();
        });
      }

      function fetchHousingResources() {
        console.log('fetch housing');
        dataCache[activeLayer][activeProjectID] = projectData;
        appendInfo(Object.assign(
          {},
          projectData.alldata[activeProjectName],
          {
            building: projectData.buildingName,
            study: `Study No. ${activeProjectName + 1}`,
          }
        ));
        module.showInfoWindow();
      }

      switch (activeLayer) {
        case 'projects' :
          fetchProjectResources();
          break;
        case 'buildings' :
          fetchBuildingResources();
          break;
        case 'housing' :
          fetchHousingResources();
          break;
        default:
          break;
      }
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
