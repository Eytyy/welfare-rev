/* MAP MODULE */
const MAP = (shell) => {
  let map;
  const domMap = {};
  const config = {
    layers: {},
    styles: {
      strokeWeight: 2,
      strokeColor: 'transparent',
      fillColor: '#e2cd57',
      fillOpacity: 1,
    },
    options: {
      center: { lat: 31.777, lng: 35.234 },
      zoom: 16,
      styles: mapStyles,
    },
  };

  return {
    init() {
      // Cache map element
      domMap.map = shell.find('#map');

      // Create new instance of google maps
      map = new google.maps.Map(domMap.map, config.options);

      // Retrieve the layers and set them up
      shell.get('data/layers.json').then((data) => {
        this.setupLayers(data);
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
        'reset-project': this.resetProject,
        'reset-map': this.resetProject,
      });
    },

    destroy() {
    },

    /* Setup layers
     */
    setupLayers(data) {
      Object.keys(data).forEach((key) => {
        const obj = {};
        obj.dataLayer = new google.maps.Data();
        obj.dataLayer.setStyle(config.styles);
        obj.dataLoaded = false;
        obj.eventAdded = false;
        obj.visible = false;
        config.layers[key] = Object.assign({}, obj, data[key]);
      });

      shell.notify({
        type: 'map-is-loaded',
        data: map,
      });

      shell.notify({
        type: 'app-updated',
        data: {
          message: 'yo',
        },
      });

      shell.notify({
        type: 'layers-created',
        data: config.layers,
      });
    },

    disableLayer(layer) {
      if (layer) {
        const affectedLayer = layer;
        affectedLayer.visible = false;
        affectedLayer.dataLayer.setMap(null);
      }
    },

    enableLayer(layer) {
      const affectedLayer = layer;
      affectedLayer.visible = true;
      affectedLayer.dataLayer.setMap(map);
    },

    /* loadMap
     */
    loadMap(active, previous) {
      // Alias layers
      const ACTIVE_LAYER = active ? config.layers[active] : null;
      const PREVIOUS_LAYER = previous ? config.layers[previous] : null;

      /* If active is defined, and active equals previous and the active layer is visible:
       * It means we are triggering the same layer which is already visible.
       *
       * If active is the root '/' & previous is not:
       * It means we are navigating back to the root "initial state"
       *
       * In both cases: We hide the layers by unsetting the map and returning
       */
      if ((active && active === previous) ||
       ((previous && previous !== '/') && (active === '/' || !active))) {
        if (ACTIVE_LAYER && ACTIVE_LAYER.visible) {
          this.disableLayer(ACTIVE_LAYER);
        }
        else if (!ACTIVE_LAYER) {
          this.disableLayer(PREVIOUS_LAYER);
        }
        else {
          this.enableLayer(ACTIVE_LAYER);
        }
        shell.notify({
          type: 'layers-data-updated',
          data: {
            active: ACTIVE_LAYER,
            previous: PREVIOUS_LAYER,
          },
        });
        return true;
      }

      /* If active is empty or If active is the root '/' and previous is empty:
       * No layer is active; there is nothing to load. return;
       */
      if (!active || (active === '/' && !previous)) {
        return true;
      }

      /* If we are here it means we need to load a new layer:
       * 1. Fetch data, if it's not available.
       * 2. Unset the previous layer and set the map for the active layer.
      */
      // Fetch
      if (active && config.layers[active] && !config.layers[active].dataLoaded) {
        shell.notify({
          type: 'app-updating',
          data: {
            message: `Loading ${active} Layer`,
          },
        });

        // Get the geodata to be placed on the map first
        const getGeoData = (url) => {
          const prom = new Promise((resolve, reject) => {
            try {
              ACTIVE_LAYER.dataLayer.loadGeoJson(url, {}, (features) => {
                resolve(features);
              });
            }
            catch (err) {
              reject(err);
            }
          });
          return prom;
        };

        const updateLayersData = (features) => {
          ACTIVE_LAYER.data = features;
          ACTIVE_LAYER.dataLoaded = true;

          this.enableLayer(ACTIVE_LAYER);

          if (previous && previous !== '/' && previous !== active) {
            this.disableLayer(PREVIOUS_LAYER);
          }

          shell.notify({
            type: 'app-updated',
            data: {
              message: '',
            },
          });

          shell.notify({
            type: 'layers-data-updated',
            data: {
              active: ACTIVE_LAYER,
              previous: PREVIOUS_LAYER,
            },
          });
        };

        if (active === 'projects') {
          const url = ACTIVE_LAYER.url;
          getGeoData(url).then((features) => {
            updateLayersData(features);
          }).catch((err) => {
            console.log(err);
          });
        }
        else {
          const geoUrl = ACTIVE_LAYER.keysUrl;
          const allUrl = ACTIVE_LAYER.url;
          let geoData;

          getGeoData(geoUrl)
            .then((features) => {
              geoData = features;
              return shell.get(allUrl).then(allData => (allData)).catch((err) => {
                console.log(err);
              });
            })
            .catch((err) => {
              console.log(err);
            })
            .then((allData) => {
              const data = {};
              let counter = 1;
              if (active === 'buildings') {
                for (const el of allData.MainTable) {
                  const item = el[0].SERIAL_NO;
                  data[item] = el[0];
                }
                for (const el of geoData) {
                  const serial = el.getProperty('SERIAL_NO');
                  const obj = {};
                  if (data[serial]) {
                    obj.alldata = data[serial];
                    Object.assign(el, obj);
                  }
                }
              }
              else {
                for (const el of Object.keys(allData)) {
                  const item = allData[el][0].SERIAL_NO;
                  if (!data[item]) {
                    data[item] = [];
                  }
                  data[item].push(allData[el][0]);
                }
                for (const el of geoData) {
                  const serial = el.getProperty('SERIAL_NO');
                  const obj = {};
                  if (data[serial]) {
                    obj.alldata = data[serial];
                    Object.assign(el, obj, { buildingName: `Building No. ${counter}` });
                  }
                  counter += 1;
                }
              }
              updateLayersData(geoData);
            })
            .catch((err) => {
              console.log(err);
            });
        }

        if (!ACTIVE_LAYER.eventAdded) {
          ACTIVE_LAYER.dataLayer.addListener('click', (event) => {
            shell.notify({
              type: 'project-clicked',
              data: {
                data: event,
                active_layer: ACTIVE_LAYER,
              },
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
          previous: PREVIOUS_LAYER,
        },
      });

      return true;
    },

    /* Update map
     */
    updateMap(evt) {
      // check if layers setup is done first.
      if (Object.keys(config.layers).length > 0) {
        this.loadMap(evt.activeLayer, evt.previousLayer);
        return;
      }

      // wait for layers setup to be done before calling loadMap
      let check;

      const wait = setInterval(() => {
        check();
      }, 200);

      check = () => {
        if (Object.keys(config.layers).length > 0) {
          this.loadMap(evt.activeLayer, evt.previousLayer);
          clearInterval(wait);
        }
      };
    },

    resetProject(event) {
      const activeProject = event.activeProject;
      const dataLayer = config.layers[event.activeLayer].dataLayer;

      dataLayer.overrideStyle(activeProject, config.styles);
      map.panTo({ lat: 31.777, lng: 35.234 });
      map.setZoom(16);
    },

    /* Update project
     */
    updateProject(event) {
      const activeProject = event.activeProject;

      const previousProject = event.previousProject;

      const dataLayer = config.layers[event.activeLayer].dataLayer;
      const activeProjectLatLang = event.activeProjectLatLang;

      // remove active styles from previous active project
      if (previousProject) {
        dataLayer.overrideStyle(previousProject, config.styles);
      }

      // add the active project style
      dataLayer.overrideStyle(activeProject, {
        fillColor: '#BE4459',
        fillOpacity: 1,
      });

      // reposition map and set zeft
      map.panTo(activeProjectLatLang);
      map.setZoom(18);
    },
  };
};
