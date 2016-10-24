const MAIN = {
  init() {
    // Register Modules
    CORE.register('overlay', OVERLAY);
    CORE.register('messages', MESSAGES);
    CORE.register('info', INFO);
    CORE.register('nav', NAV);
    CORE.register('map', MAP);
    CORE.register('welfare', WELFARE);
    CORE.startAll();

    // Listen to state events
    window.onpopstate = () => {
      const activeLayer = CORE.getUrlHash();
      // Notify core of state event
      CORE.triggerEvent({
        type: 'session-state-pop',
        data: activeLayer,
      });
    };
  },
};

window.onload = () => {
  MAIN.init();
};
