'use strict';

var MESSAGES = function MESSAGES(shell) {
  var CONTAINER = shell.find('#messages');
  var msg = shell.find('.message');

  return {
    init: function init() {
      shell.listen({
        'app-updating': this.showLoader,
        'app-updated': this.hideLoader
      });
    },
    showLoader: function showLoader(event) {
      msg.innerHTML = event.message;
      CONTAINER.classList.add('js-active');
    },
    hideLoader: function hideLoader() {
      msg.innerHTML = '';
      CONTAINER.classList.remove('js-active');
    },
    destroy: function destroy() {}
  };
};