(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['nav-cat-noicon.tpl.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"category-wrapper category-wrapper\">\n  <span class=\"map__nav__item__name\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</span>\n</div>\n";
},"useData":true});
})();