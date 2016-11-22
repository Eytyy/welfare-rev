(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['map-info-buildings.tpl.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "        <h2 class=\"project__title\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.BuildingName : depth0), depth0))
    + "</h2>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"project__details__item project__founder\">\n            <div class=\"details__item__label\">المؤسس أو الواقف</div>\n            <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.Founder : depth0), depth0))
    + "</div>\n          </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "              "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.Relation : depth0), depth0))
    + "<br />\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__otherNames\">\n          <div class=\"details__item__label\">أسماء المبنى الأخرى</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.otherName : depth0), depth0))
    + "</div>\n        </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__timePeriod\">\n          <div class=\"details__item__label\">الفترة الزمنية</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.TimePeriod : depth0), depth0))
    + "</div>\n        </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project_buildingImportance\">\n          <div class=\"details__item__label\">أهمية المبنى</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.BuildingImportance : depth0), depth0))
    + "</div>\n        </div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__usage\">\n          <div class=\"details__item__label\">تصنيف الوظيفة</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.BuildingUse : depth0), depth0))
    + "</div>\n        </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__founderType\">\n          <div class=\"details__item__label\">فئة المؤسس</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.FounderType : depth0), depth0))
    + "</div>\n        </div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__reference\">\n          <div class=\"details__item__label\">المصادر والمراجع الأساسية</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.Reference : depth0), depth0))
    + "</div>\n        </div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__buildingType\">\n          <div class=\"details__item__label\">تصنيف المبنى</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.BuildingType : depth0), depth0))
    + "</div>\n        </div>\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__buildingDate\">\n          <div class=\"details__item__label\">تاريخ التأسيس</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.BuildingDate : depth0), depth0))
    + "</div>\n        </div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__restoredIn\">\n          <div class=\"details__item__label\">تاريخ بعض مراحل الترميم</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.RestoredIn : depth0), depth0))
    + "</div>\n        </div>\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__originalUse\">\n          <div class=\"details__item__label\">وظيفة المبنى الأصلية</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.originalUse : depth0), depth0))
    + "</div>\n        </div>\n";
},"27":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"project__details__item project__currentUse\">\n          <div class=\"details__item__label\">الحالة الوظيفة حاليا</div>\n          <div class=\"details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.CurrentUse : depth0), depth0))
    + "</div>\n        </div>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.images : depth0),{"name":"each","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"30":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <div class=\"image-wrapper\">\n          <img src=\"https://s3.amazonaws.com/eytyy.com/"
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + " misc image\">\n          <span class=\"image-caption\">"
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + "</span>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<article class=\"project project--buildings\">\n  <div class=\"project__top\">\n    <header class=\"project__header\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BuildingName : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      <div class=\"project__details project__details--main\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Founder : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"project__details__item project__knownRelations\">\n          <div class=\"details__item__label\">بعض الأعلام التي لها علاقة بالمبنى</div>\n          <div class=\"details__item__value\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.Relation : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n        </div>\n      </div>\n    </header>\n    <aside class=\"project__details\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.otherName : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.TimePeriod : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BuildingImportance : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BuildingUse : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.FounderType : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Reference : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </aside>\n    <div class=\"project__details--buildings-extras\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BuildingType : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BuildingDate : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.RestoredIn : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.originalUse : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.CurrentUse : depth0)," ",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n  <div class=\"project__bottom\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.images : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</article>\n";
},"useData":true});
})();