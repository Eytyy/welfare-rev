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
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['map-info-housing.tpl.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"housing-details__item\">\n          <div class=\"housing-details__item__label\">ORIGINAL USE</div>\n          <div class=\"housing-details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.BuildingOriginalUse : depth0), depth0))
    + "</div>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"housing-details__item\">\n          <div class=\"housing-details__item__label\">NUMBER OF FAMILIES</div>\n          <div class=\"housing-details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.NoOfFamilies : depth0), depth0))
    + "</div>\n        </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"housing-details__item\">\n          <div class=\"housing-details__item__label\">NUMBER OF RESIDENTS</div>\n          <div class=\"housing-details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.NoOfResident : depth0), depth0))
    + "</div>\n        </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.LivingDuration : depth0), depth0))
    + "</div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"housing-details__item__value\">Not Available</div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"housing-details__item\">\n          <div class=\"housing-details__item__label\">Part of Housh</div>\n          <div class=\"housing-details__item__value\">\n            <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.PartOfHoush : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n          </div>\n        </div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "          <section class=\"housing-sub\">\n          <h3 class=\"housing-sub__title\">STRUCTURAL ASSESSMENT</h3>\n          <div class=\"housing-sub__header\">\n            <div class=\"housing-sub__header__item\">Use</div>\n            <div class=\"housing-sub__header__item\">Size Area(M2)</div>\n            <div class=\"housing-sub__header__item\">Structure Type</div>\n            <div class=\"housing-sub__header__item\">Changes on Structure</div>\n            <div class=\"housing-sub__header__item\">Damage on structure (outside and inside)</div>\n          </div>\n          <div class=\"housing-sub__body\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.OriginalRooms : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n        </section>\n          <section class=\"housing-sub\">\n          <h3 class=\"housing-sub__title\">PHYSICAL ASSESSMENT</h3>\n          <div class=\"housing-sub__header\">\n            <div class=\"housing-sub__header__item\">Use</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.AlgaeFungusOrErosionOfStone : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0["FaçadePlantsGrowing"] : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Ventilation : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Dampness : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.CauseOfDampness : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n          <div class=\"housing-sub__body\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.OriginalRooms : depth0),{"name":"each","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n        </section>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "              <div class=\"housing-sub__body__row\">\n                <div class=\"housing-sub__body__item\">"
    + alias2(alias1((depth0 != null ? depth0.UseAs : depth0), depth0))
    + "</div>\n                <div class=\"housing-sub__body__item\">"
    + alias2(alias1((depth0 != null ? depth0.SizeArea : depth0), depth0))
    + "</div>\n                <div class=\"housing-sub__body__item\">"
    + alias2(alias1((depth0 != null ? depth0.SructureType : depth0), depth0))
    + "</div>\n                <div class=\"housing-sub__body__item\"><i class=\"icon icon--"
    + alias2((helpers.ico || (depth0 && depth0.ico) || alias4).call(alias3,(depth0 != null ? depth0.ChangeOnSructure : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i></div>\n                <div class=\"housing-sub__body__item\"><i class=\"icon icon--"
    + alias2((helpers.ico || (depth0 && depth0.ico) || alias4).call(alias3,(depth0 != null ? depth0.DamageOnStructureOutsideAndInside : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i></div>\n              </div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Algae/ fungus or erosion of stone</div>\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Façade/ Plants Growing?</div>\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Ventilation</div>\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Dampness</div>\n";
},"24":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Cause of dampness?</div>\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "              <div class=\"housing-sub__body__row\">\n                <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.UseAs : depth0), depth0))
    + "</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.AlgaeFungusOrErosionOfStone : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0["FaçadePlantsGrowing"] : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Ventilation : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Dampness : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.CauseOfDampness : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </div>\n";
},"27":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.AlgaeFungusOrErosionOfStone : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                  </div>\n";
},"29":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0["FaçadePlantsGrowing"] : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                  </div>\n";
},"31":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.Ventilation : depth0), depth0))
    + "</div>\n";
},"33":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.Dampness : depth0), depth0))
    + "</div>\n";
},"35":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.CauseOfDampness : depth0), depth0))
    + "</div>\n";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "      <section class=\"housing-section\">\n        <h2 class=\"housing-section__title\">Building Additional Rooms</h2>\n        <section class=\"housing-sub\">\n          <h3 class=\"housing-sub__title\">Addition information</h3>\n\n          <div class=\"housing-sub__header\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.OriginalStructure : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.UseAs : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.FloorNo : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.SizeAprox : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.StructureType : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.IsTheAnnexATotalFloorOrPartial : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.IsTheAnnexHorizontalVerticalMix : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n          <div class=\"housing-sub__body\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.AnnexRooms : depth0),{"name":"each","hash":{},"fn":container.program(52, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n        </section>\n        <section class=\"housing-sub\">\n          <h3 class=\"housing-sub__title\">Type of Addition</h3>\n          <div class=\"housing-sub__header\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.OriginalStructure : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.IsItDivisionOfLargerUnit : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(67, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.DivisionOfLargerUnit : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(69, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.ClosureOfIwan : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(71, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.NewAddition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(73, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.ReorganaizationExterior : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(75, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.AdditionToCourtyard : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(77, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.AddedRoof : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(79, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n          <div class=\"housing-sub__body\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.AnnexRooms : depth0),{"name":"each","hash":{},"fn":container.program(81, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n        </section>\n      </section>\n";
},"38":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Original Structure</div>\n";
},"40":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Use</div>\n";
},"42":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Floor</div>\n";
},"44":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Size aprox</div>\n";
},"46":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Structure Type</div>\n";
},"48":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Is the annex a total floor? Or partial?</div>\n";
},"50":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Is the annex horizontal / vertical/ mix between both</div>\n";
},"52":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "              <div class=\"housing-sub__body__row\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.OriginalStructure : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(53, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.UseAs : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(55, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.FloorNo : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(57, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.SizeAprox : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(59, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.StructureType : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(61, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.IsTheAnnexATotalFloorOrPartial : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(63, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.IsTheAnnexHorizontalVerticalMix : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(65, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </div>\n";
},"53":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.OriginalStructure : depth0), depth0))
    + "\n                  </div>\n";
},"55":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.UseAs : depth0), depth0))
    + "\n                  </div>\n";
},"57":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.FloorNo : depth0), depth0))
    + "\n                  </div>\n";
},"59":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.SizeAprox : depth0), depth0))
    + "\n                  </div>\n";
},"61":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.StructureType : depth0), depth0))
    + "\n                  </div>\n";
},"63":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.IsTheAnnexATotalFloorOrPartial : depth0), depth0))
    + "\n                  </div>\n";
},"65":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.IsTheAnnexHorizontalVerticalMix : depth0), depth0))
    + "\n                  </div>\n";
},"67":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Is it: Division of larger Unit</div>\n";
},"69":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Division of Larger Room</div>\n";
},"71":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Closure of Iwan</div>\n";
},"73":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">New addition</div>\n";
},"75":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Reorganization/ exterior </div>\n";
},"77":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Addition to a courtyard</div>\n";
},"79":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Added roof</div>\n";
},"81":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "              <div class=\"housing-sub__body__row\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.OriginalStructure : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(53, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.IsItDivisionOfLargerUnit : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(82, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.DivisionOfLargerUnit : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(84, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.ClosureOfIwan : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(86, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.NewAddition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(88, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.ReorganaizationExterior : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(90, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.AdditionToCourtyard : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(92, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.AddedRoof : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(94, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </div>\n";
},"82":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.IsItDivisionOfLargerUnit : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                  </div>\n";
},"84":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.DivisionOfLargerUnit : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                  </div>\n";
},"86":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.ClosureOfIwan : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                  </div>\n";
},"88":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.NewAddition : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                  </div>\n";
},"90":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.ReorganaizationExterior : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                  </div>\n";
},"92":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.AdditionToCourtyard : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                  </div>\n";
},"94":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.AddedRoof : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                  </div>\n";
},"96":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "        <section class=\"housing-sub\">\n          <h3 class=\"housing-sub__title\">Kitchen Information</h3>\n          <div class=\"housing-sub__header\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Use : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.KitchenSinkCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(97, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.KitchenCupboardssCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(99, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.GazLocation : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(101, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n          <div class=\"housing-sub__body\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.Kitchen : depth0),{"name":"each","hash":{},"fn":container.program(103, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n        </section>\n";
},"97":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Kitchen sink condition</div>\n";
},"99":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Kitchen Cupboardss Condition</div>\n";
},"101":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Gaz Location</div>\n";
},"103":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "              <div class=\"housing-sub__body__row\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Use : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(104, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.KitchenSinkCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(106, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.KitchenCupboardssCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(108, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.GazLocation : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(110, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </div>\n";
},"104":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.Use : depth0), depth0))
    + "</div>\n";
},"106":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.KitchenSinkCondition : depth0), depth0))
    + "</div>\n                  </div>\n";
},"108":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.KitchenCupboardssCondition : depth0), depth0))
    + "</div>\n                  </div>\n";
},"110":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.GazLocation : depth0), depth0))
    + "</div>\n                  </div>\n";
},"112":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "        <section class=\"housing-sub\">\n          <h3 class=\"housing-sub__title\">Bathroom &amp; Toilet Information</h3>\n          <div class=\"housing-sub__header\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Use : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BathTubCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(113, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BathShowerCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(115, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.ClosetBatCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(117, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BathLavatoryCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(119, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n          <div class=\"housing-sub__body\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.Bathroom_Toliets : depth0),{"name":"each","hash":{},"fn":container.program(121, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n        </section>\n";
},"113":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Bath Tub Condition</div>\n";
},"115":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Bath Shower Condition</div>\n";
},"117":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Closet Condition</div>\n";
},"119":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Bath Lavatory Condition</div>\n";
},"121":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "              <div class=\"housing-sub__body__row\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Use : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(122, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BathTubCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(124, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BathShowerCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(126, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.ClosetBatCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(128, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BathLavatoryCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(130, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </div>\n";
},"122":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.Use : depth0), depth0))
    + "</div>\n                  </div>\n";
},"124":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.BathTubCondition : depth0), depth0))
    + "</div>\n                  </div>\n";
},"126":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.BathShowerCondition : depth0), depth0))
    + "</div>\n                  </div>\n";
},"128":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.ClosetBatCondition : depth0), depth0))
    + "</div>\n                  </div>\n";
},"130":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.BathLavatoryCondition : depth0), depth0))
    + "</div>\n                  </div>\n";
},"132":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">PREVIOUS INTERVENTION/RESTORATION</div>\n              <div class=\"housing-sub__info__item__value\">\n                <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.PreviousInterventionRestoraion : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n              </div>\n            </div>\n";
},"134":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">Intervention was</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.InterventionWas : depth0), depth0))
    + "</div>\n            </div>\n";
},"136":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">Year of Intervention</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.YearOfIntervention : depth0), depth0))
    + "</div>\n            </div>\n";
},"138":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">How regular is the building maintained since the restoration?</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.HowRegularIsTheBuildingMaintainedSinceTheRestoration : depth0), depth0))
    + "</div>\n            </div>\n";
},"140":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">Was the intervention?</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.WasTheIntervention : depth0), depth0))
    + "</div>\n            </div>\n";
},"142":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">How regular do you maintain your home?</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.HowRegularDoYouMaintianYourHome : depth0), depth0))
    + "</div>\n            </div>\n";
},"144":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">Courtyard or garden or Terrace</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.CourtyardOrGardenOrTerrace : depth0), depth0))
    + "</div>\n            </div>\n";
},"146":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">No. of Courtyard or garden or Terrace </div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.NoOfCourtyardOrGardenOrTerrace : depth0), depth0))
    + "</div>\n            </div>\n";
},"148":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">Common/ Shared Courtyard</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.CommonSharedCourtyard : depth0), depth0))
    + "</div>\n            </div>\n";
},"150":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">If covered newly</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.IfCoveredNewlyIsItPatialOrCompleteClosoure : depth0), depth0))
    + "</div>\n            </div>\n";
},"152":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">Material used</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.MaterialUsed : depth0), depth0))
    + "</div>\n            </div>\n";
},"154":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">Courtyard Location within the housing unit</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.CourtyardLocationWithinTheHousingUnit : depth0), depth0))
    + "</div>\n            </div>\n";
},"156":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"housing-images\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.images : depth0),{"name":"each","hash":{},"fn":container.program(157, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n";
},"157":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"housing-image\">\n            <img src=\"https://s3.amazonaws.com/eytyy.com/"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\">\n          </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"project project--housing\">\n  <div class=\"project__top\">\n    <header class=\"project__header\">\n      <h2 class=\"project__title\">"
    + alias4(((helper = (helper = helpers.building || (depth0 != null ? depth0.building : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"building","hash":{},"data":data}) : helper)))
    + "</h2>\n      <h3 class=\"project__sub-title\">"
    + alias4(((helper = (helper = helpers.study || (depth0 != null ? depth0.study : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"study","hash":{},"data":data}) : helper)))
    + "</h2>\n    </header>\n    <div class=\"housing-details\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BuildingOriginalUse : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.NoOfFamilies : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.NoOfResident : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"housing-details__item\">\n          <div class=\"housing-details__item__label\">Start Of Use</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.LivingDuration : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.PartOfHoush : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n  <div class=\"project__bottom\">\n      <section class=\"housing-section\">\n        <h2 class=\"housing-section__title\">Building Original Rooms</h2>\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.notEmpty || (depth0 && depth0.notEmpty) || alias2).call(alias1,(depth0 != null ? depth0.OriginalRooms : depth0),"",{"name":"notEmpty","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </section>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.notEmpty || (depth0 && depth0.notEmpty) || alias2).call(alias1,(depth0 != null ? depth0.AnnexRooms : depth0),"",{"name":"notEmpty","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <section class=\"housing-section\">\n      <h2 class=\"housing-section__title\">Kitchen &amp; Bath</h2>\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.notEmpty || (depth0 && depth0.notEmpty) || alias2).call(alias1,(depth0 != null ? depth0.Kitchen : depth0),"",{"name":"notEmpty","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(96, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.notEmpty || (depth0 && depth0.notEmpty) || alias2).call(alias1,(depth0 != null ? depth0.Bathroom_Toliets : depth0),"",{"name":"notEmpty","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(112, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </section>\n\n    <section class=\"housing-section housing-section--aditional-info\">\n      <h2 class=\"housing-section__title\">Building Additional Info</h2>\n      <section class=\"housing-sub\">\n        <h3 class=\"housing-sub__title\">INTERVENTION INFORMATION</h3>\n        <div class=\"housing-sub__info\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.PreviousInterventionRestoraion : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(132, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.InterventionWas : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(134, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.YearOfIntervention : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(136, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.HowRegularIsTheBuildingMaintainedSinceTheRestoration : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(138, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.WasTheIntervention : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(140, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.HowRegularDoYouMaintianYourHome : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(142, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n      </section>\n\n      <section class=\"housing-sub\">\n        <h3 class=\"housing-sub__title\">COURTYARD INFORMATION</h3>\n        <div class=\"housing-sub__info\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.CourtyardOrGardenOrTerrace : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(144, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.NoOfCourtyardOrGardenOrTerrace : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(146, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.CommonSharedCourtyard : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(148, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.IfCoveredNewlyIsItPatialOrCompleteClosoure : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(150, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.MaterialUsed : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(152, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.CourtyardLocationWithinTheHousingUnit : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(154, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n      </section>\n    </section>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.images : depth0),{"name":"if","hash":{},"fn":container.program(156, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
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
templates['nav-cat-noicon.tpl.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"category-wrapper category-wrapper\">\n  <span class=\"map__nav__item__name\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</span>\n</div>\n";
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
templates['nav-layer-housing.tpl.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<span class=\"map__nav__item map__nav__item--project\" data-target=\""
    + ((stack1 = alias1((depth0 != null ? depth0.target : depth0), depth0)) != null ? stack1 : "")
    + "\" data-cat="
    + alias2(alias1((depth0 != null ? depth0.cat : depth0), depth0))
    + ">\n  <span class=\"map__nav__item__title\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</span>\n</span>\n";
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
    + "\">\n    <span class=\"about-btn\" data-target=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\n      <i class=\"icon icon--about\"></i>\n    </span>\n    <a href=\"#"
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