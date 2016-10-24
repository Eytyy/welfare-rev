const MESSAGES = (shell) => {
  const CONTAINER = shell.find('#messages');
  const msg = shell.find('.message');

  return {
    init() {
      shell.listen({
        'app-updating': this.showLoader,
        'app-updated': this.hideLoader,
      });
    },

    showLoader(event) {
      msg.innerHTML = event.message;
      CONTAINER.classList.add('js-active');
    },

    hideLoader() {
      msg.innerHTML = '';
      CONTAINER.classList.remove('js-active');
    },

    destroy() {
    },
  };
};
