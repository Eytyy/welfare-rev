/* exported CORE */
const CORE = (() => {
  // Cache Modules
  const modules = {};

  return {
    // REGISTER MODULE
    register: (moduleID, creator) => {
      modules[moduleID] = {
        create: creator,
        instance: null,
      };
    },

    registerEvent(events, module) {
      if (this.is_obj(events) && module) {
        if (modules[module]) {
          modules[module].events = events;
        }
        else {
          console.log('there is an issue');
        }
      }
      else {
        console.log('there is an issue 2');
      }
    },

    triggerEvent(event) {
      let module;
      Object.keys(modules).forEach((key) => {
        if (modules.hasOwnProperty(key)) {
          module = modules[key];
          if (module.events && module.events[event.type]) {
            module.events[event.type](event.data);
          }
        }
      });
    },

    // Start Module
    start(moduleID) {
      const mod = modules[moduleID];
      if (mod) {
        mod.instance = mod.create(SHELL.create(this, moduleID));
        mod.instance.init();
      }
    },

    // START ALL MODULES
    startAll() {
      Object.keys(modules).forEach((moduleID) => {
        if (modules.hasOwnProperty(moduleID)) {
          this.start(moduleID);
        }
      });
    },

    AJAX: {
      get(url) {
        console.log(`https://elasticbeanstalk-us-west-2-759804563210.s3.amazonaws.com/welfare-rev/${url}`);
        const prom = new Promise((resolve, reject) => {
          const req = new XMLHttpRequest();
          req.open('GET', `https://elasticbeanstalk-us-west-2-759804563210.s3.amazonaws.com/welfare-rev/${url}`);
          req.onload = () => {
            // This is called even on 404 etc so check the status
            if (req.status === 200) {
              // Resolve the promise with the response text
              resolve(req.response);
            }
            else {
              // Otherwise reject with the status text
              // which will hopefully be a meaningful error
              reject(Error(req.statusText));
            }
          };
          // Handle network errors
          req.onerror = () => {
            reject(Error('Network Error'));
          };

          // Make the request
          req.send(null);
        });
        return prom.then((response) => {
          const data = JSON.parse(response);
          return data;
        }).catch((err) => {
          console.log(err);
        });
      },
    },

    // DOM METHODS
    DOM: {
      query(selector) {
        return document.querySelector(selector);
      },
      queryAll(selector) {
        return document.querySelectorAll(selector);
      },
      appendTemplate(template, target) {
        target.insertAdjacentHTML('beforeend', template);
      },
      createElement(el, opts) {
        const DOMel = document.createElement(el);
        if (opts.class) {
          opts.class.forEach((classi) => {
            DOMel.classList.add(classi);
          });
        }
        return DOMel;
      },
    },

    getUrlHash() {
      const url = window.location.hash.substr(1) || '/';
      return url;
    },

    is_arr(arr) {
      return Array.isArray(arr);
    },

    is_obj(obj) {
      return Object.prototype.toString.call(obj) === '[object Object]';
    },
  };
})();
