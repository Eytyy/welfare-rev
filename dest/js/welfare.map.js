'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/* MAP MODULE */
var MAP = function MAP(shell) {
  var map = void 0;
  var domMap = {};
  var config = {
    layers: {},
    styles: {
      strokeWeight: 2,
      strokeColor: 'transparent',
      fillColor: '#e2cd57',
      fillOpacity: 1
    },
    options: {
      center: { lat: 31.777, lng: 35.234 },
      zoom: 16
    }
  };

  return {
    init: function init() {
      var _this = this;

      // Cache map element
      domMap.map = shell.find('#map');

      // Create new instance of google maps
      map = new google.maps.Map(domMap.map, config.options);

      // Retrieve the layers and set them up
      shell.get('data/layers.json').then(function (data) {
        _this.setupLayers(data);

        // Notify modules that map setup is done
        shell.notify({
          type: 'map-is-loaded',
          data: map
        });

        shell.notify({
          type: 'app-updated',
          data: {
            message: ''
          }
        });
      });

      // Bind methods to this
      this.updateMap = this.updateMap.bind(this);
      this.updateProject = this.updateProject.bind(this);
      this.resetProject = this.resetProject.bind(this);

      // listen to events
      shell.listen({
        'init-layer-state': this.updateMap,
        'layer-updated': this.updateMap,
        'update-project': this.updateProject,
        'reset-project': this.resetProject
      });
    },
    destroy: function destroy() {},


    /* Setup layers
     */
    setupLayers: function setupLayers(data) {
      Object.keys(data).forEach(function (key) {
        var obj = {};
        obj.dataLayer = new google.maps.Data();
        obj.dataLayer.setStyle(config.styles);
        obj.dataLoaded = false;
        obj.eventAdded = false;
        obj.visible = false;
        config.layers[key] = Object.assign({}, obj, data[key]);
      });
      shell.notify({
        type: 'layers-created',
        data: config.layers
      });
    },
    disableLayer: function disableLayer(layer) {
      var affectedLayer = layer;
      affectedLayer.visible = false;
      affectedLayer.dataLayer.setMap(null);
    },
    enableLayer: function enableLayer(layer) {
      var affectedLayer = layer;
      affectedLayer.visible = true;
      affectedLayer.dataLayer.setMap(map);
    },


    /* loadMap
     */
    loadMap: function loadMap(active, previous) {
      var _this2 = this;

      // Alias layers
      var ACTIVE_LAYER = active ? config.layers[active] : null;
      var PREVIOUS_LAYER = previous ? config.layers[previous] : null;

      /* If active is defined, and active equals previous and the active layer is visible:
       * It means we are triggering the same layer which is already visible.
       *
       * If active is the root '/' & previous is not:
       * It means we are navigating back to the root "initial state"
       *
       * In both cases: We hide the layers by unsetting the map and returning
       */
      if (active && active === previous || previous && previous !== '/' && (active === '/' || !active)) {
        if (ACTIVE_LAYER && ACTIVE_LAYER.visible) {
          this.disableLayer(ACTIVE_LAYER);
        } else if (!ACTIVE_LAYER) {
          this.disableLayer(PREVIOUS_LAYER);
        } else {
          this.enableLayer(ACTIVE_LAYER);
        }
        shell.notify({
          type: 'layers-data-updated',
          data: {
            active: ACTIVE_LAYER,
            previous: PREVIOUS_LAYER
          }
        });
        return true;
      }

      /* If active is empty or If active is the root '/' and previous is empty:
       * No layer is active; there is nothing to load. return;
       */
      if (!active || active === '/' && !previous) {
        return true;
      }

      /* If we are here it means we need to load a new layer:
       * 1. Fetch data, if it's not available.
       * 2. Unset the previous layer and set the map for the active layer.
      */
      // Fetch
      if (active && config.layers[active] && !config.layers[active].dataLoaded) {
        var _ret = function () {
          shell.notify({
            type: 'app-updating',
            data: {
              message: 'Loading ' + active + ' Layer'
            }
          });

          // Get the geodata to be placed on the map first
          var getGeoData = function getGeoData(url) {
            var prom = new Promise(function (resolve, reject) {
              try {
                ACTIVE_LAYER.dataLayer.loadGeoJson(url, {}, function (features) {
                  resolve(features);
                });
              } catch (err) {
                reject(err);
              }
            });
            return prom;
          };

          var updateLayersData = function updateLayersData(features) {
            ACTIVE_LAYER.data = features;
            ACTIVE_LAYER.dataLoaded = true;

            _this2.enableLayer(ACTIVE_LAYER);

            if (previous && previous !== '/' && previous !== active) {
              _this2.disableLayer(PREVIOUS_LAYER);
            }

            shell.notify({
              type: 'app-updated',
              data: {
                message: ''
              }
            });

            shell.notify({
              type: 'layers-data-updated',
              data: {
                active: ACTIVE_LAYER,
                previous: PREVIOUS_LAYER
              }
            });
          };

          if (active === 'projects') {
            var url = ACTIVE_LAYER.url;
            getGeoData(url).then(function (features) {
              updateLayersData(features);
            }).catch(function (err) {
              console.log(err);
            });
          } else {
            (function () {
              var geoUrl = ACTIVE_LAYER.keysUrl;
              var allUrl = ACTIVE_LAYER.url;
              var geoData = undefined;

              getGeoData(geoUrl).then(function (features) {
                geoData = features;
                return shell.get(allUrl).then(function (allData) {
                  return allData;
                }).catch(function (err) {
                  console.log(err);
                });
              }).catch(function (err) {
                console.log(err);
              }).then(function (allData) {
                var data = {};
                if (active === 'buildings') {
                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = undefined;

                  try {
                    for (var _iterator = allData.MainTable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var el = _step.value;

                      var item = el[0].SERIAL_NO;
                      data[item] = el[0];
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
                } else {
                  var _iteratorNormalCompletion2 = true;
                  var _didIteratorError2 = false;
                  var _iteratorError2 = undefined;

                  try {
                    for (var _iterator2 = allData[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var _el = _step2.value;

                      var _item = _el[0].SERIAL_NO;
                      data[_item] = _el[0];
                    }
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
                }
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                  for (var _iterator3 = geoData[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _el2 = _step3.value;

                    var serial = _el2.getProperty('SERIAL_NO');
                    if (serial === 1190001200) {
                      console.log(_el2);
                    }
                    var obj = {};
                    if (data[serial]) {
                      obj.alldata = data[serial];
                      Object.assign(_el2, obj);
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

                updateLayersData(geoData);
              }).catch(function (err) {
                console.log(err);
              });
            })();
          }

          if (!ACTIVE_LAYER.eventAdded) {
            ACTIVE_LAYER.dataLayer.addListener('click', function (event) {
              shell.notify({
                type: 'project-clicked',
                data: {
                  data: event,
                  active_layer: ACTIVE_LAYER
                }
              });
            });
            ACTIVE_LAYER.eventAdded = true;
          }

          return {
            v: true
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
      // Unset previous
      if (previous && previous !== '/' && previous !== active) {
        this.disableLayer(PREVIOUS_LAYER);
      }
      // Set active
      this.enableLayer(ACTIVE_LAYER);

      shell.notify({
        type: 'layers-data-updated',
        data: {
          active: ACTIVE_LAYER,
          previous: PREVIOUS_LAYER
        }
      });

      return true;
    },


    /* Update map
     */
    updateMap: function updateMap(evt) {
      var _this3 = this;

      // check if layers setup is done first.
      if (Object.keys(config.layers).length > 0) {
        this.loadMap(evt.activeLayer, evt.previousLayer);
        return;
      }

      // wait for layers setup to be done before calling loadMap
      var check = void 0;

      var wait = setInterval(function () {
        check();
      }, 200);

      check = function check() {
        if (Object.keys(config.layers).length > 0) {
          _this3.loadMap(evt.activeLayer, evt.previousLayer);
          clearInterval(wait);
        }
      };
    },
    resetProject: function resetProject(event) {
      var activeProject = event.activeProject;
      var dataLayer = config.layers[event.activeLayer].dataLayer;

      dataLayer.overrideStyle(activeProject, config.styles);
      map.panTo({ lat: 31.777, lng: 35.234 });
      map.setZoom(16);
    },


    /* Update project
     */
    updateProject: function updateProject(event) {
      var activeProject = event.activeProject;

      var previousProject = event.previousProject;

      var dataLayer = config.layers[event.activeLayer].dataLayer;
      var activeProjectLatLang = event.activeProjectLatLang;

      // remove active styles from previous active project
      if (previousProject) {
        dataLayer.overrideStyle(previousProject, config.styles);
      }

      // add the active project style
      dataLayer.overrideStyle(activeProject, {
        fillColor: '#BE4459',
        fillOpacity: 1
      });

      // reposition map and set zeft
      map.panTo(activeProjectLatLang);
      map.setZoom(19);
    }
  };
};