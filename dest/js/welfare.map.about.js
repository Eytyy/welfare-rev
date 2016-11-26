'use strict';

var ABOUT = function ABOUT(shell) {
  var domMap = {};
  var dataCache = {};

  return {
    init: function init() {
      domMap.$container = shell.find('#about');

      this.updateAbout = this.updateAbout.bind(this);
      this.closeAbout = this.closeAbout.bind(this);
      this.opeanAbout = this.opeanAbout.bind(this);

      shell.listen({
        'about-clicked': this.updateAbout
      });
    },
    updateAbout: function updateAbout(data) {
      console.log(data);
    }
  };
};