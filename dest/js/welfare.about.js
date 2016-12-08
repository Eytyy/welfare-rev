'use strict';

var ABOUT = function ABOUT(shell) {
  var domMap = {};
  var aboutState = {
    active: false,
    currentAbout: null
  };
  var dataURL = 'data/about.json';
  var dataCache = '';

  return {
    init: function init() {
      domMap.$container = shell.find('#about');
      domMap.$title = shell.find('.about-title');
      domMap.$desc = shell.find('.about-desc');
      domMap.$toggleBtn = shell.find('.map-about__grabber');

      this.onAboutClicked = this.onAboutClicked.bind(this);

      domMap.$toggleBtn.addEventListener('click', this.closeAbout);

      shell.listen({
        'about-clicked': this.onAboutClicked
      });
    },


    // fetch about data
    fetchData: function fetchData() {
      return shell.get(dataURL).then(function (results) {
        return results;
      }).catch(function (err) {
        console.log(err);
        return '';
      });
    },
    closeAbout: function closeAbout() {
      aboutState.active = !aboutState.active;
      domMap.$container.classList.remove('js-active');
    },
    openAbout: function openAbout() {
      aboutState.active = !aboutState.active;
      domMap.$container.classList.add('js-active');
    },
    toggleAbout: function toggleAbout(target) {
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
    updateAbout: function updateAbout(target) {
      if (aboutState.currentAbout !== target) {
        var data = dataCache[target];
        domMap.$title.innerHTML = data.title;
        domMap.$desc.innerHTML = data.desc;
      }

      this.toggleAbout(target);
      aboutState.currentAbout = target;
    },
    onAboutClicked: function onAboutClicked(data) {
      var _this = this;

      // If data is available then update about from cache
      if (dataCache !== '') {
        this.updateAbout(data);
        return true;
      }
      // Else fetch data, update the cache, then call update
      this.fetchData().then(function (results) {
        console.log(results);
        dataCache = results;
        _this.updateAbout(data);
      }).catch(function (err) {
        console.log(err);
      });
      return true;
    }
  };
};