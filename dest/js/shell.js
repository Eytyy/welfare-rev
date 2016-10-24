"use strict";

/* Mediator */
var SHELL = {
  create: function create(core, moduleID) {
    return {
      await: function await() {},
      get: function get(url) {
        return core.AJAX.get(url);
      },
      post: function post() {},
      getHash: function getHash() {
        return core.getUrlHash();
      },
      notify: function notify(event) {
        if (core.is_obj(event) && event.type) {
          core.triggerEvent(event);
        }
      },
      listen: function listen(events) {
        if (core.is_obj(events)) {
          core.registerEvent(events, moduleID);
        }
      },
      createElement: function createElement(el, opts) {
        return core.DOM.createElement(el, opts);
      },
      find: function find(selector) {
        return core.DOM.query(selector);
      },
      findAll: function findAll(selector) {
        return core.DOM.queryAll(selector);
      },
      injectTemplateText: function injectTemplateText(template, target) {
        core.DOM.appendTemplate(template, target);
      }
    };
  }
};