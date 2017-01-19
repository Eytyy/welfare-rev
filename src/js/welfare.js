/* MAP MODULE */
const WELFARE = (shell) => {
  const debugmode = false;

  // State map: object to be used as the single source for the app state
  const state = {
    activeLayer: null,
    previousLayer: null,
    previousProject: null,
    previousProjectName: '',
    activeProject: null,
    activeProjectName: '',
    activeProjectLatLang: null,
  };

  /* Initializes the app state by setting the active layer,
   * and triggers a `init-layer-state` event.
   */
  const initState = () => {
    state.activeLayer = shell.getHash();
    // Notify
    shell.notify({
      type: 'init-layer-state',
      data: {
        previousLayer: state.previousLayer,
        activeLayer: state.activeLayer,
      },
    });
  };

  const onBack2Map = () => {
    shell.notify({
      type: 'reset-map',
      data: {
        activeProject: state.activeProject,
        activeLayer: state.activeLayer,
      },
    });
  };

  /* Changes the active layer, and triggers a `layer-update` event.
   */
  const updateLayerState = (activeLayer) => {
    state.previousLayer = state.activeLayer;
    state.activeLayer = activeLayer;
    if (debugmode) {
      const logMsg = `<layer-update> Prev: ${state.previousLayer} | Active: ${state.activeLayer}`;
      console.log(logMsg);
    }
    shell.notify({
      type: 'reset-project',
      data: {
        activeProject: state.activeProject,
        activeLayer: state.activeLayer,
      },
    });
    // Notify
    shell.notify({
      type: 'layer-updated',
      data: {
        previousLayer: state.previousLayer,
        activeLayer: state.activeLayer,
      },
    });
  };

  const updateProject = () => {
    shell.notify({
      type: 'update-project',
      data: {
        activeLayer: state.activeLayer,
        activeProject: state.activeProject,
        activeProjectName: state.activeProjectName,
        previousProject: state.previousProject,
        previousProjectName: state.previousProjectName,
        activeProjectLatLang: state.activeProjectLatLang,
      },
    });
  };

  const onProjectNavClick = (event) => {
    let obj;
    let cat;
    switch (state.activeLayer) {
      case 'housing':
        obj = event.data[state.activeLayer][event.category];
        break;
      case 'buildings':
        cat = event.category.replace(/-/g, ' - ');
        obj = event.data[state.activeLayer]
          .find(project => project.name === cat).alldata[event.target];
        break;
      default:
        obj = event.data[state.activeLayer][event.category][event.target];
        break;
    }
    if (debugmode) {
      console.log(obj);
    }

    const latLngs = obj.getGeometry().getAt(0).getAt(0);


    state.previousProject = state.activeProject;
    state.previousProjectName = state.activeProjectName;

    state.activeProject = obj;
    state.activeProjectLatLang = latLngs;
    state.activeProjectName = event.target;

    updateProject();
  };

  const onProjectMapClick = (event) => {
    state.previousProject = state.activeProject;
    state.previousProjectName = state.activeProjectName;

    state.activeProject = event.data.feature;
    state.activeProjectLatLang = event.data.latLng;

    switch (state.activeLayer) {
      case 'projects':
        state.activeProjectName = state.activeProject.getProperty('RelatedEnglishTitle');
        break;
      case 'buildings':
        state.activeProjectName = state.activeProject.alldata.BuildingName;
        break;
      case 'housing':
        state.activeProjectName = '1';
        break;
      default:
        break;
    }

    updateProject();
  };

  const onCategoryClosed = () => {
    if (state.activeProject) {
      shell.notify({
        type: 'reset-project',
        data: {
          activeProject: state.activeProject,
          activeLayer: state.activeLayer,
        },
      });

      if (debugmode) {
        console.log('reset project and map');
      }
    }
  };

  return {
    init() {
      initState();

      shell.listen({
        'session-state-pop': updateLayerState,
        'project-clicked': onProjectMapClick,
        'project-nav-clicked': onProjectNavClick,
        'category-closed': onCategoryClosed,
        back2map: onBack2Map,
      });
    },
    destroy() {
    },
  };
};
