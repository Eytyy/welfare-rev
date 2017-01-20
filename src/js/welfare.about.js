const ABOUT = (shell) => {
  const domMap = {};
  const aboutState = {
    active: false,
    currentAbout: null,
  };
  const dataURL = 'data/about.json';
  let dataCache = '';

  return {
    init() {
      domMap.$container = shell.find('#about');
      domMap.$title = shell.find('.about-title');
      domMap.$desc = shell.find('.about-desc');
      domMap.$toggleBtn = shell.find('.map-about__grabber');

      this.onAboutClicked = this.onAboutClicked.bind(this);

      domMap.$toggleBtn.addEventListener('click', this.closeAbout);

      shell.listen({
        'about-clicked': this.onAboutClicked,
      });
    },

    // fetch about data
    fetchData() {
      return shell.get(dataURL)
        .then(results => results)
        .catch((err) => {
          console.log(err);
          return '';
        });
    },

    closeAbout() {
      aboutState.active = !aboutState.active;
      domMap.$container.classList.remove('js-active');
    },

    openAbout() {
      aboutState.active = !aboutState.active;
      domMap.$container.classList.add('js-active');
    },

    toggleAbout(target) {
      // if about section is active; visible
      // and the current about is the same as target the close
      // this means we clicked the same about twice and we are toggling
      if (aboutState.active && aboutState.currentAbout === target) {
        this.closeAbout();
      }
      // if about section is not active; hidden, show it
      else if (!aboutState.active) {
        this.openAbout();
      }
    },

    updateAbout(target) {
      if (aboutState.currentAbout !== target) {
        const data = dataCache[target];
        domMap.$title.innerHTML = data.title;
        domMap.$desc.innerHTML = data.desc;
      }

      this.toggleAbout(target);
      aboutState.currentAbout = target;
    },

    onAboutClicked(data) {
      // If data is available then update about from cache
      if (dataCache !== '') {
        this.updateAbout(data);
        return true;
      }
      // Else fetch data, update the cache, then call update
      this.fetchData().then((results) => {
        dataCache = results;
        this.updateAbout(data);
      }).catch((err) => {
        console.log(err);
      });
      return true;
    },
  };
};
