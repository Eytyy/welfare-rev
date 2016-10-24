'use strict';

var INFO = function INFO(shell) {
  var domMap = {};

  var tplMap = {
    projects: 'map-info-projects.tpl.hbs',
    buildings: 'map-info-buildings.tpl.hbs',
    housing: 'map-info-housing.tpl.hbs'
  };

  var dataCache = {};

  return {
    init: function init() {
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
        'category-closed': this.hideInfoWindow
      });
    },
    showInfoWindow: function showInfoWindow() {
      domMap.$info.classList.add('js-view-mode');
    },
    hideInfoWindow: function hideInfoWindow() {
      domMap.$info.classList.remove('js-view-mode');
    },
    toggleInfoExpand: function toggleInfoExpand(event) {
      if (domMap.$info.classList.contains('js-infoExpanded')) {
        domMap.$info.classList.remove('js-infoExpanded');
      } else {
        domMap.$info.classList.add('js-infoExpanded');
      }
    },
    updateInfoWindow: function updateInfoWindow(data) {
      shell.notify({
        type: 'app-updating',
        data: {
          message: 'Loading ' + data.activeProjectName
        }
      });
      var activeLayer = data.activeLayer;
      var activeProjectName = data.activeProjectName;
      var previousProjectName = data.previousProjectName;
      var activeProject = data.activeProject;

      var projectData = data.activeProject.f;
      var activeProjectID = projectData.OBJECTID;

      var module = this;

      // if (activeProjectName === previousProjectName) {
      //   shell.notify({
      //     type: 'app-updated',
      //     data: {
      //       message: '',
      //     },
      //   });
      //   return true;
      // }

      domMap.$infoInner.scrollTop = 0;
      domMap.$info.classList.remove('js-infoExpanded');

      // Add Project info to html
      function appendInfo(infoData) {
        var tpl = tplMap[data.activeLayer];
        Handlebars.registerHelper({
          or: function or(v1, v2) {
            var rval = v1 || v2;
            return rval;
          },
          and: function and(v1, v2) {
            var rval = v1 && v2;
            return rval;
          },
          eq: function eq(v1, v2) {
            var rval = v1 === v2;
            return rval;
          },
          ne: function ne(v1, v2) {
            var rval = v1 !== v2;
            return rval;
          },
          formatCurr: function formatCurr(v) {
            var val = v ? v.toString().split('.') : '';
            val[0] = val[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return val;
          },
          formatFileName: function formatFileName(v) {
            var val = v.match(/[^\\/]+$/)[0];
            return val;
          }
        });
        var rendered = Handlebars.templates[tpl](infoData);
        domMap.$infoInner.innerHTML = rendered;
        shell.notify({
          type: 'app-updated',
          data: {
            message: ''
          }
        });
        console.log('loaded');
      }

      if (dataCache[activeProjectID]) {
        shell.notify({
          type: 'app-updated',
          data: {
            message: ''
          }
        });
        // Update Info
        appendInfo(dataCache[activeProjectID]);
        this.showInfoWindow();
        return true;
      }

      console.log(dataCache[activeProjectID]);
      function fetchImages(id) {
        var url = 'resources/images/' + activeLayer + '/' + id;
        return shell.get(url).then(function (images) {
          return images;
        }).catch(function (err) {
          console.log(err);
        });
      }

      function fetchExtraResources(id) {
        var url = 'resources/other/' + activeLayer + '/' + id;
        return shell.get(url).then(function (resources) {
          return resources;
        }).catch(function (err) {
          console.log(err);
        });
      }

      function fetchProjectResources() {
        console.log('fetch project');
        var resourcesID = projectData.ukey;

        Promise.all([fetchImages(resourcesID), fetchExtraResources(resourcesID)]).then(function (allData) {
          var obj = {
            miscImages: [],
            otherFiles: []
          };
          allData[0].data.forEach(function (item, index) {
            if (/before.jpg/i.test(item)) {
              obj.beforeImage = item;
            } else if (/after.jpg/i.test(item)) {
              obj.afterImage = item;
            } else if (/main.jpg/i.test(item)) {
              obj.mainImage = item;
            } else {
              if (index !== 0) {
                obj.miscImages.push(item);
              }
            }
          });

          allData[1].data.forEach(function (item, index) {
            if (index !== 0) {
              obj.otherFiles.push(item);
            }
          });

          var completeData = Object.assign(projectData, obj);
          // Update Cache
          dataCache[activeProjectID] = completeData;
          // Update Info
          appendInfo(completeData);
          module.showInfoWindow();
        }).catch(function (error) {
          console.log(error);
          // Update Cache
          dataCache[activeProjectID] = data;
          // Update Info
          appendInfo(data);
          module.showInfoWindow();
        });
      }

      function fetchBuildingResources() {
        console.log('fetch building');
        var resourcesID = projectData.ID;

        fetchImages(resourcesID).then(function (allData) {
          var obj = {
            images: []
          };
          allData.data.forEach(function (item, index) {
            if (index !== 0) {
              obj.images.push(item);
            }
          });
          var completeData = Object.assign(projectData, obj);
          // Update Cache
          dataCache[activeProjectID] = completeData;
          // Update Info
          appendInfo(completeData);
          module.showInfoWindow();
        }).catch(function (error) {
          console.log(error);
          // Update Cache
          dataCache[activeProjectID] = data;
          // Update Info
          appendInfo(data);
          module.showInfoWindow();
        });
      }
      console.log(activeLayer);
      switch (activeLayer) {
        case 'projects':
          fetchProjectResources();
          break;
        case 'buildings':
          fetchBuildingResources();
          break;
        default:
          break;
      }
    },
    setupInfoWindow: function setupInfoWindow() {
      var tplName = 'map-info.tpl.hbs';
      var tpl = Handlebars.templates[tplName]();

      shell.injectTemplateText(tpl, domMap.$container);

      domMap.$infoGrabber = shell.find('.map-info__grabber');
      domMap.$infoInner = shell.find('.map-info__inner');
      domMap.$info = shell.find('.map-info');
    },
    updateProject: function updateProject(event) {
      this.updateInfoWindow(event);
    }
  };
};