'use strict';

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
        var promise = new Promise(function (resolve, reject) {
          try {
            ACTIVE_LAYER.dataLayer.loadGeoJson(ACTIVE_LAYER.url, {}, function (features) {
              ACTIVE_LAYER.data = features;
              resolve(features);
            });
          } catch (err) {
            reject(err);
          }
        });
        promise.then(function () {
          ACTIVE_LAYER.dataLoaded = true;
          _this2.enableLayer(ACTIVE_LAYER);
          if (previous && previous !== '/' && previous !== active) {
            _this2.disableLayer(PREVIOUS_LAYER);
          }
          shell.notify({
            type: 'layers-data-updated',
            data: {
              active: ACTIVE_LAYER,
              previous: PREVIOUS_LAYER
            }
          });
        }).catch(function (err) {
          console.log(err);
        });

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

        return true;
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