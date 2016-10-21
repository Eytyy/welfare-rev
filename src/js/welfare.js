/* MAP MODULE */
const WELFARE = (shell) => {
  // State map: object to be used as the single source for the app state
  const state = {
    activeLayer: null,
    previousLayer: null,
    activeCategory: null,
    previousCategory: null,
    activeProject: null,
    previousProject: null,
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

  return {
    init() {
      initState();
      shell.listen({
        'session-state-pop': updateLayerState,
      });
    },
    destroy() {
    },
  };
};
