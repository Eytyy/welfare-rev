/* Mediator */
const SHELL = {
  create: (core, moduleID) => ({
    await() {
    },
    get(url) {
      return core.AJAX.get(url);
    },
    post() {
    },
    getHash() {
      return core.getUrlHash();
    },
    notify(event) {
      if (core.is_obj(event) && event.type) {
        core.triggerEvent(event);
      }
    },
    listen(events) {
      if (core.is_obj(events)) {
        core.registerEvent(events, moduleID);
      }
    },
    createElement(el, opts) {
      return core.DOM.createElement(el, opts);
    },
    find(selector) {
      return core.DOM.query(selector);
    },
    findAll(selector) {
      return core.DOM.queryAll(selector);
    },
    injectTemplateText(template, target) {
      core.DOM.appendTemplate(template, target);
    },
  }),
};
