(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['map-info.tpl.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"map-info\" draggable=\"true\">\n  <div class=\"map-info__grabber\"><span class=\"grabber__handle\">&#8249;</span></div>\n  <span class=\"back2map-btn\">Back To Map</span>\n  <div class=\"map-info__inner\">\n  </div>\n</div>\n";
},"useData":true});
})();