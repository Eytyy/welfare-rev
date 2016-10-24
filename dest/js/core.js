'use strict';

/* exported CORE */
var CORE = function () {
  // Cache Modules
  var modules = {};

  return {
    // REGISTER MODULE
    register: function register(moduleID, creator) {
      modules[moduleID] = {
        create: creator,
        instance: null
      };
    },

    registerEvent: function registerEvent(events, module) {
      if (this.is_obj(events) && module) {
        if (modules[module]) {
          modules[module].events = events;
        } else {
          console.log('there is an issue');
        }
      } else {
        console.log('there is an issue 2');
      }
    },
    triggerEvent: function triggerEvent(event) {
      var module = void 0;
      Object.keys(modules).forEach(function (key) {
        if (modules.hasOwnProperty(key)) {
          module = modules[key];
          if (module.events && module.events[event.type]) {
            module.events[event.type](event.data);
          }
        }
      });
    },


    // Start Module
    start: function start(moduleID) {
      var mod = modules[moduleID];
      if (mod) {
        mod.instance = mod.create(SHELL.create(this, moduleID));
        mod.instance.init();
      }
    },


    // START ALL MODULES
    startAll: function startAll() {
      var _this = this;

      Object.keys(modules).forEach(function (moduleID) {
        if (modules.hasOwnProperty(moduleID)) {
          _this.start(moduleID);
        }
      });
    },


    AJAX: {
      get: function get(url) {
        var prom = new Promise(function (resolve, reject) {
          var req = new XMLHttpRequest();
          req.open('GET', url);
          req.onload = function () {
            // This is called even on 404 etc so check the status
            if (req.status === 200) {
              // Resolve the promise with the response text
              resolve(req.response);
            } else {
              // Otherwise reject with the status text
              // which will hopefully be a meaningful error
              reject(Error(req.statusText));
            }
          };
          // Handle network errors
          req.onerror = function () {
            reject(Error('Network Error'));
          };

          // Make the request
          req.send(null);
        });
        return prom.then(function (response) {
          var data = JSON.parse(response);
          return data;
        }).catch(function (err) {
          console.log(err);
        });
      }
    },

    // DOM METHODS
    DOM: {
      query: function query(selector) {
        return document.querySelector(selector);
      },
      queryAll: function queryAll(selector) {
        return document.querySelectorAll(selector);
      },
      appendTemplate: function appendTemplate(template, target) {
        target.insertAdjacentHTML('beforeend', template);
      },
      createElement: function createElement(el, opts) {
        var DOMel = document.createElement(el);
        if (opts.class) {
          opts.class.forEach(function (classi) {
            DOMel.classList.add(classi);
          });
        }
        return DOMel;
      }
    },

    getUrlHash: function getUrlHash() {
      var url = window.location.hash.substr(1) || '/';
      return url;
    },
    is_arr: function is_arr(arr) {
      return Array.isArray(arr);
    },
    is_obj: function is_obj(obj) {
      return Object.prototype.toString.call(obj) === '[object Object]';
    }
  };
}();