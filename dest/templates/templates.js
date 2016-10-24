(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['map-info-buildings.tpl.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "        <h2 class=\"project__title\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.BuildingNa : depth0), depth0))
    + "</h2>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <h2 class=\"project__title\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.eBuildingN : depth0), depth0))
    + "</h2>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"project__details__item project__founder\">\n            <div class=\"details__item__label\">FOUNDER</div>\n            <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.Founder : depth0), depth0))
    + "</div>\n          </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__otherNames\">\n          <div class=\"details__item__label\">OTHER NAMES</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.otherName : depth0), depth0))
    + "</div>\n        </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__timePeriod\">\n          <div class=\"details__item__label\">TIME PERIOD</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.TimePeriod : depth0), depth0))
    + "</div>\n        </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project_buildingImportance\">\n          <div class=\"details__item__label\">BUILDING IMPORTANNCE</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.BuildingIm : depth0), depth0))
    + "</div>\n        </div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__usage\">\n          <div class=\"details__item__label\">USGAE</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.BuildingUs : depth0), depth0))
    + "</div>\n        </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__founderType\">\n          <div class=\"details__item__label\">FOUNDER TYPE</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.FounderTyp : depth0), depth0))
    + "</div>\n        </div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__reference\">\n          <div class=\"details__item__label\">REFERENCES</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.Reference : depth0), depth0))
    + "</div>\n        </div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__buildingType\">\n          <div class=\"details__item__label\">BUILDING TYPE</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.BuildingTy : depth0), depth0))
    + "</div>\n        </div>\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__buildingDate\">\n          <div class=\"details__item__label\">BUILDING Date</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.BuildingDa : depth0), depth0))
    + "</div>\n        </div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__restoredIn\">\n          <div class=\"details__item__label\">Restored In</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.RestoredIn : depth0), depth0))
    + "</div>\n        </div>\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__originalUse\">\n          <div class=\"details__item__label\">Original Use</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.originalUs : depth0), depth0))
    + "</div>\n        </div>\n";
},"27":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__currentUse\">\n          <div class=\"details__item__label\">Current Use</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.CurrentUse : depth0), depth0))
    + "</div>\n        </div>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.images : depth0),{"name":"each","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"30":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <img class=\"misc-image\" src=\"https://s3.amazonaws.com/eytyy.com/"
    + alias2(alias1(depth0, depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? depth0.BuildingNa : depth0), depth0))
    + " misc image\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<article class=\"project project--buildings\">\n  <div class=\"project__top\">\n    <header class=\"project__header\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BuildingNa : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.eBuildingN : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      <div class=\"project__details project__details--main\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Founder : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"project__details__item project__knownRelations\">\n          <div class=\"details__item__label\">KNOWN RELATION</div>\n          <div class=\"details__item__value\"></div>\n        </div>\n      </div>\n    </header>\n    <aside class=\"project__details\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.otherName : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.TimePeriod : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BuildingIm : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BuildingUs : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.FounderTyp : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Reference : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </aside>\n    <div class=\"project__details--buildings-extras\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BuildingTy : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BuildingDa : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.RestoredIn : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.originalUs : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.CurrentUse : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n  <div class=\"project__bottom\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.images : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</article>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['map-info-projects.tpl.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__period\">\n          <div class=\"details__item__label\">Period</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.Period : depth0), depth0))
    + "</div>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "    <div class=\"project__mid\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.beforeImage : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.afterImage : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"image-comp image-comp--before\" style=\"background-image: url('https://s3.amazonaws.com/eytyy.com/"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.beforeImage : depth0), depth0))
    + "');\">\n        </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"image-comp image-comp--after\" style=\"background-image:url('https://s3.amazonaws.com/eytyy.com/"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.afterImage : depth0), depth0))
    + "');\">\n        </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.miscImages : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <img class=\"misc-image\" src=\"https://s3.amazonaws.com/eytyy.com/"
    + alias2(alias1(depth0, depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? depth0.RelatedEnglishTitle : depth0), depth0))
    + " misc image\">\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <ul class=\"links\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.otherFiles : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var alias1=container.escapeExpression;

  return "          <li class=\"links__item\">\n            <a href=\"https://s3.amazonaws.com/eytyy.com/"
    + alias1(container.lambda(depth0, depth0))
    + "\">"
    + alias1((helpers.formatFileName || (depth0 && depth0.formatFileName) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"formatFileName","hash":{},"data":data}))
    + "</a>\n          </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "<article class=\"project project--projects\">\n  <div class=\"project__top\">\n    <header class=\"project__header\">\n      <div class=\"project__date\">"
    + alias2(alias1((depth0 != null ? depth0.YearofFinsihing : depth0), depth0))
    + "</div>\n      <h2 class=\"project__title\">"
    + alias2(alias1((depth0 != null ? depth0.RelatedEnglishTitle : depth0), depth0))
    + "</h2>\n      <p class=\"project__description\">\n        "
    + alias2(alias1((depth0 != null ? depth0.Text : depth0), depth0))
    + "\n      </p>\n    </header>\n    <aside class=\"project__details\">\n"
    + ((stack1 = helpers["if"].call(alias3,(helpers.ne || (depth0 && depth0.ne) || alias4).call(alias3,(depth0 != null ? depth0.Period : depth0),"Unkown",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      <div class=\"project__details__item project__budget\">\n        <div class=\"details__item__label\">Budget</div>\n        <div class=\"details__item__value\">$"
    + alias2((helpers.formatCurr || (depth0 && depth0.formatCurr) || alias4).call(alias3,(depth0 != null ? depth0.Cost : depth0),{"name":"formatCurr","hash":{},"data":data}))
    + "</div>\n      </div>\n      <div class=\"project__details__item project__beneficary\">\n        <div class=\"details__item__label\">Beneficiary</div>\n        <div class=\"details__item__value\">"
    + alias2(alias1((depth0 != null ? depth0.Beneficary : depth0), depth0))
    + "</div>\n      </div>\n      <div class=\"project__details__item project__phase\">\n        <div class=\"details__item__label\">Phase</div>\n        <div class=\"details__item__value\">"
    + alias2(alias1((depth0 != null ? depth0.phase : depth0), depth0))
    + "</div>\n      </div>\n    </aside>\n  </div>\n"
    + ((stack1 = helpers["if"].call(alias3,(helpers.or || (depth0 && depth0.or) || alias4).call(alias3,(depth0 != null ? depth0.beforeImage : depth0),(depth0 != null ? depth0.afterImage : depth0),{"name":"or","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <div class=\"project__bottom\">\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.miscImages : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.otherFiles : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</article>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['map-info.tpl.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"map-info\" draggable=\"true\">\n  <div class=\"map-info__grabber\"><span class=\"grabber__handle\">&#8249;</span></div>\n  <div class=\"map-info__inner\">\n  </div>\n</div>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['nav-cat.tpl.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"category-wrapper category-wrapper--"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "\">\n  <i class=\"map__nav__item__icon\"></i>\n  <span class=\"map__nav__item__name\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</span>\n</div>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['nav-layer-wcat.tpl.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<span class=\"map__nav__item map__nav__item--project\" data-target=\""
    + ((stack1 = alias1((depth0 != null ? depth0.title : depth0), depth0)) != null ? stack1 : "")
    + "\" data-cat="
    + alias2(alias1((depth0 != null ? depth0.cat : depth0), depth0))
    + ">\n  <span class=\"map__nav__item__title\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</span>\n</span>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['nav-layer.tpl.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "<span class=\"map__nav__item map__nav__item--project\" data-target=\""
    + ((stack1 = alias1((depth0 != null ? depth0.title : depth0), depth0)) != null ? stack1 : "")
    + "\">\n  <span class=\"map__nav__item__title\">"
    + container.escapeExpression(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</span>\n</span>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['nav.tpl.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "  <div class=\"map__nav__item-wrapper map__nav__item-wrapper--"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\n    <a href=\"#"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\" class=\"map__nav__item map__nav__item--layer map__nav__item--"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\n      <i class=\"map__nav__item__icon\"></i>\n      <span class=\"map__nav__item__name\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</span>\n    </a>\n  </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();