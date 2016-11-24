'use strict';

var INFO = function INFO(shell) {
  var debugmode = true;

  var domMap = {};

  var tplMap = {
    projects: 'map-info-projects.tpl.hbs',
    buildings: 'map-info-buildings.tpl.hbs',
    housing: 'map-info-housing.tpl.hbs'
  };

  var dataCache = {
    projects: {},
    buildings: {},
    housing: {}
  };

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
    hideInfoWindow: function hideInfoWindow(e) {
      if (e.fromMap) {
        return true;
      }
      domMap.$info.classList.remove('js-view-mode');
    },
    toggleInfoExpand: function toggleInfoExpand() {
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
          message: 'Loading Project'
        }
      });

      var activeLayer = data.activeLayer;
      var activeProject = data.activeProject;
      var activeProjectName = activeLayer === 'housing' ? data.activeProjectName - 1 : data.activeProjectName;

      var projectData = void 0;
      var activeProjectID = void 0;

      if (activeLayer === 'projects') {
        projectData = activeProject.f;
        activeProjectID = projectData.OBJECTID;
      } else if (activeLayer === 'buildings') {
        projectData = activeProject.alldata;
        activeProjectID = projectData.ID;
      } else {
        projectData = activeProject;
        activeProjectID = projectData.getProperty('OBJECTID');
      }

      var module = this;
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
          },
          notEmpty: function notEmpty(v) {
            var val = v ? !(v.length === 0) : false;
            return val;
          },
          ico: function ico(v) {
            if (v === 'True' || v === 'Yes') {
              return 'check';
            }
            return 'cross';
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
        if (debugmode) {
          console.log('loaded');
        }
      }

      if (dataCache[activeLayer][activeProjectID]) {
        shell.notify({
          type: 'app-updated',
          data: {
            message: ''
          }
        });
        if (activeLayer === 'housing') {
          appendInfo(Object.assign({}, dataCache[activeLayer][activeProjectID].alldata[activeProjectName], { images: dataCache[activeLayer][activeProjectID].images }, {
            building: dataCache[activeLayer][activeProjectID].buildingName,
            study: 'Unit No. ' + (activeProjectName + 1)
          }));
        } else {
          appendInfo(dataCache[activeLayer][activeProjectID]);
        }
        // Update Info
        this.showInfoWindow();
        return true;
      }

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
          dataCache[activeLayer][activeProjectID] = completeData;
          // Update Info
          appendInfo(completeData);
        }).catch(function (error) {
          console.log(error);
          // Update Cache
          dataCache[activeLayer][activeProjectID] = data;
          // Update Info
          appendInfo(data);
        });
        module.showInfoWindow();
      }

      function fetchBuildingResources() {
        var resourcesID = projectData.ID;

        fetchImages(resourcesID).then(function (allData) {
          var imageData = data.activeProject.alldata.ImageData;
          var regex = /(\w*)(?:\.jpg)/i;

          var obj = {
            images: []
          };

          allData.data.forEach(function (image, index) {
            if (index !== 0) {
              var caption = imageData.find(function (el) {
                return el.PathNew === regex.exec(image)[1];
              }).name;
              if (caption) {
                obj.images.push({
                  image: image,
                  caption: caption
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
        }).catch(function (error) {
          console.log(error);
          // Update Cache
          dataCache[activeLayer][activeProjectID] = data;
          // Update Info
          appendInfo(data);
          module.showInfoWindow();
        });
      }

      function fetchHousingResources() {
        if (debugmode) {
          console.log('fetch housing');
        }

        fetchImages(activeProjectID).then(function (allData) {
          var regex = /\w*(?:\.jpg)/i;
          var obj = {
            images: []
          };
          allData.data.forEach(function (image, index) {
            if (index !== 0 && regex.test(image)) {
              obj.images.push(image);
            }
          });
          var completeData = Object.assign(projectData, obj);
          dataCache[activeLayer][activeProjectID] = completeData;
          appendInfo(Object.assign({}, completeData.alldata[activeProjectName], { images: completeData.images }, {
            building: completeData.buildingName,
            study: 'Unit No. ' + (activeProjectName + 1)
          }));
        }).catch(function (err) {
          console.log(err);

          appendInfo(Object.assign({}, projectData.alldata[activeProjectName], {
            building: projectData.buildingName,
            study: 'Unit No. ' + (activeProjectName + 1)
          }));
        });

        module.showInfoWindow();
      }

      switch (activeLayer) {
        case 'projects':
          fetchProjectResources();
          break;
        case 'buildings':
          fetchBuildingResources();
          break;
        case 'housing':
          fetchHousingResources();
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