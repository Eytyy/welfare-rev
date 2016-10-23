/* MAP MODULE */
const WELFARE = (shell) => {
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

  /* Changes the active layer, and triggers a `layer-update` event.
   */
  const updateLayerState = (activeLayer) => {
    state.previousLayer = state.activeLayer;
    state.activeLayer = activeLayer;

    const logMsg = `<layer-update> Prev: ${state.previousLayer} | Active: ${state.activeLayer}`;
    console.log(logMsg);

    // Notify
    shell.notify({
      type: 'layer-updated',
      data: {
        previousLayer: state.previousLayer,
        activeLayer: state.activeLayer,
      },
    });
  };

  const updateProject = (event) => {
    state.previousProject = state.activeProject;
    state.activeProject = event.data.feature;
    state.activeProjectLatLang = event.data.latLng;

    switch (state.activeLayer) {
      case 'projects':
        state.activeProjectName = state.activeProject.getProperty('RelatedEnglishTitle');
        break;
      case 'buildings':
        state.activeProjectName = state.activeProject.getProperty('BuildingNa');
        break;
      case 'housing':
        break;
      default:
        break;
    }

    shell.notify({
      type: 'update-project',
      data: {
        activeLayer: state.activeLayer,
        activeProject: state.activeProject,
        activeProjectName: state.activeProjectName,
        previousProject: state.previousProject,
        activeProjectLatLang: state.activeProjectLatLang,
      },
    });
  };

  return {
    init() {
      initState();
      shell.listen({
        'session-state-pop': updateLayerState,
        'project-clicked': updateProject,
      });
    },
    destroy() {
    },
  };
};
