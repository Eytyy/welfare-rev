'use strict';

var MAIN = {
  init: function init() {
    // Register Modules
    CORE.register('overlay', OVERLAY);
    CORE.register('messages', MESSAGES);
    CORE.register('info', INFO);
    CORE.register('about', ABOUT);
    CORE.register('nav', NAV);
    CORE.register('map', MAP);
    CORE.register('welfare', WELFARE);
    CORE.startAll();

    // Listen to state events
    window.onpopstate = function () {
      var activeLayer = CORE.getUrlHash();
      // Notify core of state event
      CORE.triggerEvent({
        type: 'session-state-pop',
        data: activeLayer
      });
    };
  }
};

window.onload = function () {
  MAIN.init();
};