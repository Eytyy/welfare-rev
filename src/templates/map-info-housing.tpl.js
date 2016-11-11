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
    return "        <div class=\"housing-details__item\">\n          <div class=\"housing-details__item__label\">LIVING DURATION</div>\n          <div class=\"housing-details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.LivingDuration : depth0), depth0))
    + "</div>\n        </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"housing-details__item\">\n          <div class=\"housing-details__item__label\">Part of Housh</div>\n          <div class=\"housing-details__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.PartOfHoush : depth0), depth0))
    + "</div>\n        </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "            <div class=\"housing-sub__body__row\">\n              <div class=\"housing-sub__body__item\">"
    + alias2(alias1((depth0 != null ? depth0.UseAs : depth0), depth0))
    + "</div>\n              <div class=\"housing-sub__body__item\">"
    + alias2(alias1((depth0 != null ? depth0.SizeArea : depth0), depth0))
    + "</div>\n              <div class=\"housing-sub__body__item\">"
    + alias2(alias1((depth0 != null ? depth0.SructureType : depth0), depth0))
    + "</div>\n              <div class=\"housing-sub__body__item\"><i class=\"icon icon--"
    + alias2((helpers.ico || (depth0 && depth0.ico) || alias4).call(alias3,(depth0 != null ? depth0.ChangeOnSructure : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i></div>\n              <div class=\"housing-sub__body__item\"><i class=\"icon icon--"
    + alias2((helpers.ico || (depth0 && depth0.ico) || alias4).call(alias3,(depth0 != null ? depth0.DamageOnStructureOutsideAndInside : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i></div>\n            </div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__header__item\">Algae/ fungus or erosion of stone</div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__header__item\">Façade/ Plants Growing?</div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__header__item\">Ventilation</div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__header__item\">Dampness</div>\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__header__item\">Cause of dampness?</div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "            <div class=\"housing-sub__body__row\">\n              <div class=\"housing-sub__body__item\">"
    + alias2(alias1((depth0 != null ? depth0.UseAs : depth0), depth0))
    + "</div>\n              <div class=\"housing-sub__body__item\">"
    + alias2(alias1((depth0 != null ? depth0.SizeArea : depth0), depth0))
    + "</div>\n"
    + ((stack1 = helpers["if"].call(alias3,(helpers.ne || (depth0 && depth0.ne) || alias4).call(alias3,(depth0 != null ? depth0.AlgaeFungusOrErosionOfStone : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,(helpers.ne || (depth0 && depth0.ne) || alias4).call(alias3,(depth0 != null ? depth0["FaçadePlantsGrowing"] : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,(helpers.ne || (depth0 && depth0.ne) || alias4).call(alias3,(depth0 != null ? depth0.Ventilation : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,(helpers.ne || (depth0 && depth0.ne) || alias4).call(alias3,(depth0 != null ? depth0.Dampness : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,(helpers.ne || (depth0 && depth0.ne) || alias4).call(alias3,(depth0 != null ? depth0.CauseOfDampness : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n";
},"24":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"housing-sub__body__item\">\n                  <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.AlgaeFungusOrErosionOfStone : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                </div>\n";
},"26":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"housing-sub__body__item\">\n                  <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0["FaçadePlantsGrowing"] : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                </div>\n";
},"28":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.Ventilation : depth0), depth0))
    + "</div>\n";
},"30":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.Dampness : depth0), depth0))
    + "</div>\n";
},"32":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.CauseOfDampness : depth0), depth0))
    + "</div>\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "      <section class=\"housing-section\">\n        <h2 class=\"housing-section__title\">Building Additional Rooms</h2>\n        <section class=\"housing-sub\">\n          <h3 class=\"housing-sub__title\">Addition information</h3>\n\n          <div class=\"housing-sub__header\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.OriginalStructure : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.UseAs : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.FloorNo : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.SizeAprox : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.StructureType : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(43, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.IsTheAnnexATotalFloorOrPartial : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(45, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.IsTheAnnexHorizontalVerticalMix : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(47, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n          <div class=\"housing-sub__body\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.AnnexRooms : depth0),{"name":"each","hash":{},"fn":container.program(49, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n        </section>\n        <section class=\"housing-sub\">\n          <h3 class=\"housing-sub__title\">Type of Addition</h3>\n          <div class=\"housing-sub__header\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.OriginalStructure : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.IsItDivisionOfLargerUnit : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(64, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.DivisionOfLargerUnit : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(66, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.ClosureOfIwan : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(68, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.NewAddition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(70, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.ReorganaizationExterior : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(72, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.AdditionToCourtyard : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(74, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.AddedRoof : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(76, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n          <div class=\"housing-sub__body\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.AnnexRooms : depth0),{"name":"each","hash":{},"fn":container.program(78, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n        </section>\n      </section>\n";
},"35":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Original Structure</div>\n";
},"37":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Use</div>\n";
},"39":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Floor</div>\n";
},"41":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Size aprox</div>\n";
},"43":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Structure Type</div>\n";
},"45":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Is the annex a total floor? Or partial?</div>\n";
},"47":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Is the annex horizontal / vertical/ mix between both</div>\n";
},"49":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "              <div class=\"housing-sub__body__row\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.OriginalStructure : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.UseAs : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(52, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.FloorNo : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(54, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.SizeAprox : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(56, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.StructureType : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(58, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.IsTheAnnexATotalFloorOrPartial : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(60, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.IsTheAnnexHorizontalVerticalMix : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(62, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </div>\n";
},"50":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.OriginalStructure : depth0), depth0))
    + "\n                  </div>\n";
},"52":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.UseAs : depth0), depth0))
    + "\n                  </div>\n";
},"54":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.FloorNo : depth0), depth0))
    + "\n                  </div>\n";
},"56":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.SizeAprox : depth0), depth0))
    + "\n                  </div>\n";
},"58":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.StructureType : depth0), depth0))
    + "\n                  </div>\n";
},"60":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.IsTheAnnexATotalFloorOrPartial : depth0), depth0))
    + "\n                  </div>\n";
},"62":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.IsTheAnnexHorizontalVerticalMix : depth0), depth0))
    + "\n                  </div>\n";
},"64":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Is it: Division of larger Unit</div>\n";
},"66":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Division of Larger Room</div>\n";
},"68":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Closure of Iwan</div>\n";
},"70":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">New addition</div>\n";
},"72":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Reorganization/ exterior </div>\n";
},"74":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Addition to a courtyard</div>\n";
},"76":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Added roof</div>\n";
},"78":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "              <div class=\"housing-sub__body__row\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.OriginalStructure : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.IsItDivisionOfLargerUnit : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(79, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.DivisionOfLargerUnit : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(81, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.ClosureOfIwan : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(83, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.NewAddition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(85, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.ReorganaizationExterior : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(87, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.AdditionToCourtyard : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(89, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.AddedRoof : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(91, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </div>\n";
},"79":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.IsItDivisionOfLargerUnit : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                  </div>\n";
},"81":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.DivisionOfLargerUnit : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                  </div>\n";
},"83":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.ClosureOfIwan : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                  </div>\n";
},"85":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.NewAddition : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                  </div>\n";
},"87":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.ReorganaizationExterior : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                  </div>\n";
},"89":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.AdditionToCourtyard : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                  </div>\n";
},"91":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.AddedRoof : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                  </div>\n";
},"93":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "        <section class=\"housing-sub\">\n          <h3 class=\"housing-sub__title\">Kitchen Information</h3>\n          <div class=\"housing-sub__header\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Use : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <div class=\"wrap\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.KitchenSink : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(94, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.KitchenSinkCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(96, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n            <div class=\"wrap\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.KitchenCupboards : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(98, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.KitchenCupboardssCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(100, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.GazLocation : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(102, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n          <div class=\"housing-sub__body\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.Kitchen : depth0),{"name":"each","hash":{},"fn":container.program(104, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n        </section>\n";
},"94":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"housing-sub__header__item\">Kitchen sink</div>\n";
},"96":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"housing-sub__header__item\">Kitchen sink condition</div>\n";
},"98":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"housing-sub__header__item\">Kitchen Cupboards</div>\n";
},"100":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"housing-sub__header__item\">Kitchen Cupboardss Condition</div>\n";
},"102":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"housing-sub__header__item\">Gaz Location</div>\n";
},"104":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "              <div class=\"housing-sub__body__row\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Use : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(105, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                <div class=\"wrap\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.KitchenSink : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(107, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.KitchenSinkCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(109, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n                <div class=\"wrap\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.KitchenCupboards : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(111, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.KitchenCupboardssCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(113, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.GazLocation : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(115, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </div>\n";
},"105":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.Use : depth0), depth0))
    + "</div>\n";
},"107":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"housing-sub__body__item\">\n                      <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.KitchenSink : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                    </div>\n";
},"109":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"housing-sub__body__item\">\n                      <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.KitchenSinkCondition : depth0), depth0))
    + "</div>\n                    </div>\n";
},"111":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"housing-sub__body__item\">\n                      <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.KitchenCupboards : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                    </div>\n";
},"113":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"housing-sub__body__item\">\n                      <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.KitchenCupboardssCondition : depth0), depth0))
    + "</div>\n                    </div>\n";
},"115":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.GazLocation : depth0), depth0))
    + "</div>\n                  </div>\n";
},"117":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "        <section class=\"housing-sub\">\n          <h3 class=\"housing-sub__title\">Bathroom &amp; Toilet Information</h3>\n          <div class=\"housing-sub__header\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Use : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <div class=\"wrap\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BatTub : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(118, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BathTubCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(120, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n            <div class=\"wrap\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BathSower : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(122, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BathShowerCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(124, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n            <div class=\"wrap\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.ClosetBat : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(126, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.ClosetBatCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(128, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n            <div class=\"wrap\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BathLavatory : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(130, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BathLavatoryCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(132, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n          </div>\n          <div class=\"housing-sub__body\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.Bathroom_Toliets : depth0),{"name":"each","hash":{},"fn":container.program(134, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n        </section>\n";
},"118":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"housing-sub__header__item\">Bath Tub</div>\n";
},"120":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"housing-sub__header__item\">Bath Tub Condition</div>\n";
},"122":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"housing-sub__header__item\">Bath Shower</div>\n";
},"124":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"housing-sub__header__item\">Bath Shower Condition</div>\n";
},"126":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"housing-sub__header__item\">Closet</div>\n";
},"128":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"housing-sub__header__item\">Closet Condition</div>\n";
},"130":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"housing-sub__header__item\">BathLavatory</div>\n";
},"132":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"housing-sub__header__item\">BathLavatory Condition</div>\n";
},"134":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "              <div class=\"housing-sub__body__row\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Use : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(135, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                <div class=\"wrap\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BatTub : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(137, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BathTubCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(139, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n                <div class=\"wrap\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BathSower : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(141, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BathShowerCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(143, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n                <div class=\"wrap\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.ClosetBat : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(145, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.ClosetBatCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(147, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n                <div class=\"wrap\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BathLavatory : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(149, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.BathLavatoryCondition : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(151, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n              </div>\n";
},"135":function(container,depth0,helpers,partials,data) {
    return "                  <div class=\"housing-sub__body__item\">\n                    <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.Use : depth0), depth0))
    + "</div>\n                  </div>\n";
},"137":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"housing-sub__body__item\">\n                      <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.BatTub : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                    </div>\n";
},"139":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"housing-sub__body__item\">\n                      <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.BathTubCondition : depth0), depth0))
    + "</div>\n                    </div>\n";
},"141":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"housing-sub__body__item\">\n                      <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.BathSower : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                    </div>\n";
},"143":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"housing-sub__body__item\">\n                      <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.BathShowerCondition : depth0), depth0))
    + "</div>\n                    </div>\n";
},"145":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"housing-sub__body__item\">\n                      <i class=\"icon icon--"
    + container.escapeExpression((helpers.ico || (depth0 && depth0.ico) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.ClosetBat : depth0),{"name":"ico","hash":{},"data":data}))
    + "\"></i>\n                    </div>\n";
},"147":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"housing-sub__body__item\">\n                      <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.ClosetBatCondition : depth0), depth0))
    + "</div>\n                    </div>\n";
},"149":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"housing-sub__body__item\">\n                      <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.BathLavatory : depth0), depth0))
    + "</div>\n                    </div>\n";
},"151":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"housing-sub__body__item\">\n                      <div class=\"housing-sub__body__item\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.BathLavatoryCondition : depth0), depth0))
    + "</div>\n                    </div>\n";
},"153":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">PREVIOUS INTERVENTION/RESTORATION</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.PreviousInterventionRestoraion : depth0), depth0))
    + "</div>\n            </div>\n";
},"155":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">Intervention was</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.InterventionWas : depth0), depth0))
    + "</div>\n            </div>\n";
},"157":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">Year of Intervention</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.YearOfIntervention : depth0), depth0))
    + "</div>\n            </div>\n";
},"159":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">How regular is the building maintained since the restoration?</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.HowRegularIsTheBuildingMaintainedSinceTheRestoration : depth0), depth0))
    + "</div>\n            </div>\n";
},"161":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">Was the intervention?</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.WasTheIntervention : depth0), depth0))
    + "</div>\n            </div>\n";
},"163":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">How regular do you maintain your home?</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.HowRegularDoYouMaintianYourHome : depth0), depth0))
    + "</div>\n            </div>\n";
},"165":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">Courtyard or garden or Terrace</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.CourtyardOrGardenOrTerrace : depth0), depth0))
    + "</div>\n            </div>\n";
},"167":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">No. of Courtyard or garden or Terrace </div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.NoOfCourtyardOrGardenOrTerrace : depth0), depth0))
    + "</div>\n            </div>\n";
},"169":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">Common/ Shared Courtyard</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.CommonSharedCourtyard : depth0), depth0))
    + "</div>\n            </div>\n";
},"171":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">Courtyard 2 common or shared</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.Couryard2CommonSharedCourtyard : depth0), depth0))
    + "</div>\n            </div>\n";
},"173":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">Courtyard 2 open or closed </div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.Couryard2CourtyardCoveredOpen : depth0), depth0))
    + "</div>\n            </div>\n";
},"175":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">If covered newly</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.IfCoveredNewlyIsItPatialOrCompleteClosoure : depth0), depth0))
    + "</div>\n            </div>\n";
},"177":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">Material used</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.MaterialUsed : depth0), depth0))
    + "</div>\n            </div>\n";
},"179":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"housing-sub__info__item\">\n              <div class=\"housing-sub__info__item__label\">Courtyard Location within the housing unit</div>\n              <div class=\"housing-sub__info__item__value\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.CourtyardLocationWithinTheHousingUnit : depth0), depth0))
    + "</div>\n            </div>\n";
},"181":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.images : depth0),{"name":"each","hash":{},"fn":container.program(182, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"182":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <div class=\"image-wrapper\">\n          <img src=\"https://s3.amazonaws.com/eytyy.com/"
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + " misc image\">\n          <span class=\"image-caption\">"
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + "</span>\n        </div>\n";
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
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.LivingDuration : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.PartOfHoush : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n  <div class=\"project__bottom\">\n\n    <section class=\"housing-section\">\n      <h2 class=\"housing-section__title\">Building Original Rooms</h2>\n      <section class=\"housing-sub\">\n        <h3 class=\"housing-sub__title\">STRUCTURAL ASSESSMENT</h3>\n        <div class=\"housing-sub__header\">\n          <div class=\"housing-sub__header__item\">Use</div>\n          <div class=\"housing-sub__header__item\">Size Area(M2)</div>\n          <div class=\"housing-sub__header__item\">Structure Type</div>\n          <div class=\"housing-sub__header__item\">Changes on Structure</div>\n          <div class=\"housing-sub__header__item\">Damage on structure (outside and inside)</div>\n        </div>\n        <div class=\"housing-sub__body\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.OriginalRooms : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n      </section>\n      <section class=\"housing-sub\">\n        <h3 class=\"housing-sub__title\">PHYSICAL ASSESSMENT</h3>\n        <div class=\"housing-sub__header\">\n          <div class=\"housing-sub__header__item\">Use</div>\n          <div class=\"housing-sub__header__item\">Size Area(M2)</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.AlgaeFungusOrErosionOfStone : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0["FaçadePlantsGrowing"] : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Ventilation : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Dampness : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.CauseOfDampness : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"housing-sub__body\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.OriginalRooms : depth0),{"name":"each","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n      </section>\n    </section>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.notEmpty || (depth0 && depth0.notEmpty) || alias2).call(alias1,(depth0 != null ? depth0.AnnexRooms : depth0),"",{"name":"notEmpty","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <section class=\"housing-section\">\n      <h2 class=\"housing-section__title\">Kitchen &amp; Bath</h2>\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.notEmpty || (depth0 && depth0.notEmpty) || alias2).call(alias1,(depth0 != null ? depth0.Kitchen : depth0),"",{"name":"notEmpty","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(93, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.notEmpty || (depth0 && depth0.notEmpty) || alias2).call(alias1,(depth0 != null ? depth0.Bathroom_Toliets : depth0),"",{"name":"notEmpty","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(117, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </section>\n\n    <section class=\"housing-section housing-section--aditional-info\">\n      <h2 class=\"housing-section__title\">Building Additional Info</h2>\n      <section class=\"housing-sub\">\n        <h3 class=\"housing-sub__title\">INTERVENTION INFORMATION</h3>\n        <div class=\"housing-sub__info\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.PreviousInterventionRestoraion : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(153, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.InterventionWas : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(155, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.YearOfIntervention : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(157, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.HowRegularIsTheBuildingMaintainedSinceTheRestoration : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(159, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.WasTheIntervention : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(161, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.HowRegularDoYouMaintianYourHome : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(163, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n      </section>\n\n      <section class=\"housing-sub\">\n        <h3 class=\"housing-sub__title\">COURTYARD INFORMATION</h3>\n        <div class=\"housing-sub__info\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.CourtyardOrGardenOrTerrace : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(165, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.NoOfCourtyardOrGardenOrTerrace : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(167, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.CommonSharedCourtyard : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(169, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Couryard2CommonSharedCourtyard : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(171, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.Couryard2CourtyardCoveredOpen : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(173, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.IfCoveredNewlyIsItPatialOrCompleteClosoure : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(175, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.MaterialUsed : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(177, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(depth0 != null ? depth0.CourtyardLocationWithinTheHousingUnit : depth0),"",{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(179, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n      </section>\n    </section>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.images : depth0),{"name":"if","hash":{},"fn":container.program(181, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</article>\n";
},"useData":true});
})();