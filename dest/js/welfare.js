'use strict';

/* MAP MODULE */
var WELFARE = function WELFARE(shell) {
  // State map: object to be used as the single source for the app state
  var state = {
    activeLayer: null,
    previousLayer: null,
    previousProject: null,
    previousProjectName: '',
    activeProject: null,
    activeProjectName: '',
    activeProjectLatLang: null
  };

  /* Initializes the app state by setting the active layer,
   * and triggers a `init-layer-state` event.
   */
  var initState = function initState() {
    state.activeLayer = shell.getHash();
    // Notify
    shell.notify({
      type: 'init-layer-state',
      data: {
        previousLayer: state.previousLayer,
        activeLayer: state.activeLayer
      }
    });
  };

  /* Changes the active layer, and triggers a `layer-update` event.
   */
  var updateLayerState = function updateLayerState(activeLayer) {
    state.previousLayer = state.activeLayer;
    state.activeLayer = activeLayer;

    var logMsg = '<layer-update> Prev: ' + state.previousLayer + ' | Active: ' + state.activeLayer;
    console.log(logMsg);
    shell.notify({
      type: 'reset-project',
      data: {
        activeProject: state.activeProject,
        activeLayer: state.activeLayer
      }
    });
    // Notify
    shell.notify({
      type: 'layer-updated',
      data: {
        previousLayer: state.previousLayer,
        activeLayer: state.activeLayer
      }
    });
  };

  var updateProject = function updateProject() {
    shell.notify({
      type: 'update-project',
      data: {
        activeLayer: state.activeLayer,
        activeProject: state.activeProject,
        activeProjectName: state.activeProjectName,
        previousProject: state.previousProject,
        previousProjectName: state.previousProjectName,
        activeProjectLatLang: state.activeProjectLatLang
      }
    });
  };

  var onProjectNavClick = function onProjectNavClick(event) {
    var obj = event.category ? event.data[state.activeLayer][event.category][event.target] : event.data[state.activeLayer][event.target];

    var latLngs = obj.getGeometry().getAt(0).getAt(0);

    state.previousProject = state.activeProject;
    state.previousProjectName = state.activeProjectName;

    state.activeProject = obj;
    state.activeProjectLatLang = latLngs;
    state.activeProjectName = event.target;

    updateProject();
  };

  var onProjectMapClick = function onProjectMapClick(event) {
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
        break;
      default:
        break;
    }

    updateProject();
  };

  var onCategoryClosed = function onCategoryClosed() {
    if (state.activeProject) {
      // console.log('reset project and map');
      shell.notify({
        type: 'reset-project',
        data: {
          activeProject: state.activeProject,
          activeLayer: state.activeLayer
        }
      });
    }
  };

  return {
    init: function init() {
      initState();

      shell.listen({
        'session-state-pop': updateLayerState,
        'project-clicked': onProjectMapClick,
        'project-nav-clicked': onProjectNavClick,
        'category-closed': onCategoryClosed
      });
    },
    destroy: function destroy() {}
  };
};