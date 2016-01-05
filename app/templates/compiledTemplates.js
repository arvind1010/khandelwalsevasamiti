module.exports = function(Handlebars) {

var templates = {};

templates["article/image-options"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n			<div class=\"item";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n				<div class=\"row\">\n					";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</div>\n			</div>		\n		";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " active";
  }

function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\n						<div class=\"col-xs-4\"><img class=\"img-thumbnail img-responsive\" src=\"//cdn.optcentral.com/optportal/illustrations/"
    + escapeExpression(((stack1 = ((stack1 = (depth2 && depth2.company)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/regular/"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" data-largesrc=\"//cdn.optcentral.com/optportal/illustrations/"
    + escapeExpression(((stack1 = ((stack1 = (depth2 && depth2.company)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/large/"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" data-regsrc=\"//cdn.optcentral.com/optportal/illustrations/"
    + escapeExpression(((stack1 = ((stack1 = (depth2 && depth2.company)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/regular/"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"></div>\n					";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "\n		<a class=\"left custom-carousel-control\" href=\"#article-img-options-carousel\" data-slide=\"prev\">\n			<span class=\"glyphicon glyphicon-chevron-left\"></span>\n		</a>\n		<a class=\"right custom-carousel-control\" href=\"#article-img-options-carousel\" data-slide=\"next\">\n			<span class=\"glyphicon glyphicon-chevron-right\"></span>\n		</a>\n	";
  }

  buffer += "<div id=\"article-img-options-carousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\n	    				\n	<!-- Wrapper for slides -->\n	<div class=\"carousel-inner\">\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.imageSlides), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n\n	<!-- Controls -->\n	";
  stack1 = (helper = helpers.when || (depth0 && depth0.when),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.imageSlides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options) : helperMissing.call(depth0, "when", ((stack1 = (depth0 && depth0.imageSlides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

templates["article/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n			<div class=\"item";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n				";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>		\n		";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " active";
  }

function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\n					<div class=\"row\">\n						";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</div>\n				";
  return buffer;
  }
function program5(depth0,data,depth3) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n							<div class=\"col-sm-"
    + escapeExpression(((stack1 = ((stack1 = (depth3 && depth3.meta)),stack1 == null || stack1 === false ? stack1 : stack1.bootstrapColumn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n								"
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'data': (depth0)
  },data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth3 && depth3.meta)),stack1 == null || stack1 === false ? stack1 : stack1.layout)),stack1 == null || stack1 === false ? stack1 : stack1.type), options) : helperMissing.call(depth0, "view", ((stack1 = ((stack1 = (depth3 && depth3.meta)),stack1 == null || stack1 === false ? stack1 : stack1.layout)),stack1 == null || stack1 === false ? stack1 : stack1.type), options)))
    + "\n							</div>\n						";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<div class=\"row controller\">\n			<div class=\"container\">\n				<hr />\n				<!-- Indicators -->\n				<a class=\"left\" href=\"#article-carousel\" data-slide=\"prev\">previous</a>\n				<ol class=\"carousel-indicators\">\n					";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.slides), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			  </ol>\n				<a class=\"right\" href=\"#article-carousel\" data-slide=\"next\">next</a>\n			</div>\n		</div>	\n	";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			    	<li data-target=\"#article-carousel\" data-slide-to=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></li>\n			  	";
  return buffer;
  }

  buffer += "<div id=\"article-carousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\n	<!-- Wrapper for slides -->\n	<div class=\"carousel-inner\">\n		";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.slides), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n	";
  stack1 = (helper = helpers.when || (depth0 && depth0.when),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.slides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options) : helperMissing.call(depth0, "when", ((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.slides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

templates["article/list-details"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n		  		<div class=\"item";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n		  			<img class=\"img-responsive\" src=\"//cdn.optcentral.com/optportal/illustrations/"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth1 && depth1.data)),stack1 == null || stack1 === false ? stack1 : stack1.company)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/regular/";
  if (helper = helpers.fileName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fileName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n		  		</div>\n		  	";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " active";
  }

  buffer += "<div class=\"row\">\n	<div class=\"col-sm-6\">\n		<div class=\"imageslide-carousel carousel fade\">\n		  <!-- Wrapper for slides -->\n		  <div class=\"carousel-inner\">\n		  	";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.illustrations), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		 	</div>\n		</div>\n	</div>\n	<div class=\"col-sm-6\">\n		<h1>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n		";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.body)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n</div>";
  return buffer;
  });

templates["article/list-image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"/article/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"thumbnail margin-bottom10\">\n	<img class=\"img-responsive\" src=\"/images/image_loader_big.gif\" data-src=\"//cdn.optcentral.com/optportal/illustrations"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n</a>\n<p class=\"text-center\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>";
  return buffer;
  });

templates["article/related-tabs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<ul class=\"nav nav-tabs\">\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.relatedProdTabs), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</ul>\n\n	<!-- Tab panes -->\n	<div class=\"tab-content padding-top10\">\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.relatedProdTabs), {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n			<li class=\"";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"#related-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-toggle=\"tab\"><strong>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></a></li>\n		";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "active";
  }

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n			<div class=\"tab-pane ";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"related-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n				<div id=\"related-prods-carousel-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"related-prods-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\n					<!-- Wrapper for slides -->\n					<div class=\"carousel-inner\">\n						";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.slides), {hash:{},inverse:self.noop,fn:self.programWithDepth(8, program8, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</div>\n					";
  stack1 = (helper = helpers.when || (depth0 && depth0.when),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.slides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options) : helperMissing.call(depth0, "when", ((stack1 = (depth0 && depth0.slides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</div>\n			</div>\n		";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return " active";
  }

function program8(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\n							<div class=\"item";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n								<div class=\"row\">\n									";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(9, program9, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n								</div>\n							</div>		\n						";
  return buffer;
  }
function program9(depth0,data,depth3) {
  
  var buffer = "", stack1, helper;
  buffer += "\n										<div class=\"col-xs-4\"><a href=\"/product/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><img class=\"img-thumbnail img-responsive\" src=\"//cdn.optcentral.com/optportal/catalog/"
    + escapeExpression(((stack1 = ((stack1 = (depth3 && depth3.company)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/regular/";
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></a></div>\n									";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n						<!-- Controls -->\n						<a class=\"left custom-carousel-control\" href=\"#related-prods-carousel-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-slide=\"prev\">\n							<span class=\"glyphicon glyphicon-chevron-left\"></span>\n						</a>\n						<a class=\"right custom-carousel-control\" href=\"#related-prods-carousel-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-slide=\"next\">\n							<span class=\"glyphicon glyphicon-chevron-right\"></span>\n						</a>\n					";
  return buffer;
  }

  buffer += "<!-- Nav tabs -->\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.relatedProdTabs)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "	";
  return buffer;
  });

templates["article/show"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<!-- Content -->\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <a href=\"javascript: history.go(-1)\" class=\"btn btn-default btn-xs pull-right margin-bottom10\">Go Back</a>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <div class=\"article-img\">\n    	<div class=\"img-loader\"></div>\n    	<img class=\"img-responsive\" src=\"//cdn.optcentral.com/optportal/illustrations/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.company)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/regular/";
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <span class=\"glyphicon glyphicon-zoom-in\" data-toggle=\"modal\" data-target=\".zoom-img-modal\"></span>\n      <!-- Image Zoom Modal -->\n      <div class=\"modal fade zoom-img-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n            <div class=\"modal-body\">\n              <img class=\"zoom-img img-responsive\" src=\"//cdn.optcentral.com/optportal/illustrations/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.company)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/large/";
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>  			\n    <!-- Image Options Slider-->\n    "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'model': ((depth0 && depth0._model))
  },data:data},helper ? helper.call(depth0, "article/image-options", options) : helperMissing.call(depth0, "view", "article/image-options", options)))
    + "\n  </div>\n  <div class=\"visible-xs margin-bottom20\"></div>\n  <div class=\"col-sm-6\">\n    <h3>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    ";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <!-- Related Tabs-->\n    "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'model': ((depth0 && depth0._model))
  },data:data},helper ? helper.call(depth0, "article/related-tabs", options) : helperMissing.call(depth0, "view", "article/related-tabs", options)))
    + "\n  </div>\n</div>";
  return buffer;
  });

templates["catalog/image-options"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n			<div class=\"item";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n				<div class=\"row\">\n					";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</div>\n			</div>		\n		";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " active";
  }

function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\n						<div class=\"col-xs-4\"><img class=\"img-thumbnail img-responsive\" src=\"//cdn.optcentral.com/optportal/catalog/"
    + escapeExpression(((stack1 = (depth2 && depth2.companyId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/regular/"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" data-largesrc=\"//cdn.optcentral.com/optportal/catalog/"
    + escapeExpression(((stack1 = (depth2 && depth2.companyId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/large/"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"></div>\n					";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "\n		<a class=\"left custom-carousel-control\" href=\"#img-options-carousel\" data-slide=\"prev\">\n			<span class=\"glyphicon glyphicon-chevron-left\"></span>\n		</a>\n		<a class=\"right custom-carousel-control\" href=\"#img-options-carousel\" data-slide=\"next\">\n			<span class=\"glyphicon glyphicon-chevron-right\"></span>\n		</a>\n	";
  }

  buffer += "<div id=\"img-options-carousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\n	    				\n	<!-- Wrapper for slides -->\n	<div class=\"carousel-inner\">\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.imageSlides), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n\n	<!-- Controls -->\n	";
  stack1 = (helper = helpers.when || (depth0 && depth0.when),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.imageSlides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options) : helperMissing.call(depth0, "when", ((stack1 = (depth0 && depth0.imageSlides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

templates["catalog/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n		  		";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth1 && depth1.meta)),stack1 == null || stack1 === false ? stack1 : stack1.breadCrumbData)),stack1 == null || stack1 === false ? stack1 : stack1.data), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		  	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			  		<li ";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.last), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.last), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n			  	";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "class=\"active\"";
  }

function program5(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<a href=\"/catalog/1?coll_subcat=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_0\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>";
  return buffer;
  }

function program9(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n		  		";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth1 && depth1.meta)),stack1 == null || stack1 === false ? stack1 : stack1.breadCrumbData)),stack1 == null || stack1 === false ? stack1 : stack1.data), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		  	";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			  		<li ";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.last), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.last), {hash:{},inverse:self.program(11, program11, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n			  	";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<a href=\"/catalog/1?category=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n	  	<div class=\"col-xs-6 col-sm-3\">\n	    	<a href=\"/product/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n	      	<img class=\"img-thumbnail img-responsive\" src=\"//cdn.optcentral.com/optportal/catalog/";
  if (helper = helpers.company_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.company_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/regular/";
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-errorsrc=\"//cdn.optcentral.com/optportal/catalog/";
  if (helper = helpers.company_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.company_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/regular/notavailable.jpg\" alt=\"\">\n	    	</a>\n	  	</div>\n  	";
  return buffer;
  }

  buffer += "<div class=\"catalog\">\n	<div class=\"row\">\n		<div class=\"col-sm-6\">\n			<!-- Breadcrumb -->\n		  <ol class=\"breadcrumb\">\n		  	";
  stack1 = (helper = helpers.when || (depth0 && depth0.when),options={hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.breadCrumbData)),stack1 == null || stack1 === false ? stack1 : stack1.type), "eq", "Collection", options) : helperMissing.call(depth0, "when", ((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.breadCrumbData)),stack1 == null || stack1 === false ? stack1 : stack1.type), "eq", "Collection", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		  	";
  stack1 = (helper = helpers.when || (depth0 && depth0.when),options={hash:{},inverse:self.noop,fn:self.programWithDepth(9, program9, data, depth0),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.breadCrumbData)),stack1 == null || stack1 === false ? stack1 : stack1.type), "eq", "Category", options) : helperMissing.call(depth0, "when", ((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.breadCrumbData)),stack1 == null || stack1 === false ? stack1 : stack1.type), "eq", "Category", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</ol>\n		</div>\n		<div class=\"col-sm-6 top-pagination\">\n			<!-- Pagination -->\n			"
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'collection': ((depth0 && depth0._collection))
  },data:data},helper ? helper.call(depth0, "catalog/pagination", options) : helperMissing.call(depth0, "view", "catalog/pagination", options)))
    + "\n		</div>\n	</div>\n  \n	<!-- Product List -->\n	<div class=\"row product-list\">\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n\n  <div class=\"bottom-pagination\">\n  	<!-- Pagination -->\n		"
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'collection': ((depth0 && depth0._collection))
  },data:data},helper ? helper.call(depth0, "catalog/pagination", options) : helperMissing.call(depth0, "view", "catalog/pagination", options)))
    + "\n  </div>\n</div>";
  return buffer;
  });

templates["catalog/pagination"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n				<li class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n					<a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.num)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + escapeExpression(((stack1 = ((stack1 = (depth1 && depth1.meta)),stack1 == null || stack1 === false ? stack1 : stack1.currQueryString)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.text), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n				</li>\n			";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "active";
  }

function program4(depth0,data) {
  
  var stack1;
  stack1 = ((stack1 = (depth0 && depth0.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program6(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = (depth0 && depth0.num)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

  buffer += "\n<div class=\"row\">\n	<div class=\"col-sm-4\">\n		<p>Showing <strong>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.startProduct)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong> - <strong>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.endProduct)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong> of <strong>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.totalProducts)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong></p>\n	</div>\n	<div class=\"col-sm-8 clearfix\">\n		<ul class=\"pagination pagination-sm\">\n			";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.pages), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</ul>\n	</div>\n</div>";
  return buffer;
  });

templates["catalog/product-grouping"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <label class=\"control-label\" for=\""
    + escapeExpression((helper = helpers.sanitize || (depth0 && depth0.sanitize),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.name), options) : helperMissing.call(depth0, "sanitize", (depth0 && depth0.name), options)))
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\n    <div class=\"controls\">\n      <select class=\"grouping selectpicker form-control\" data-param=\"";
  if (helper = helpers.type_value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type_value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\""
    + escapeExpression((helper = helpers.sanitize || (depth0 && depth0.sanitize),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.name), options) : helperMissing.call(depth0, "sanitize", (depth0 && depth0.name), options)))
    + "\">\n        <option value=\"0\" selected>Select one</option>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.values), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </select>\n    </div>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <option value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n        ";
  return buffer;
  }

  buffer += "<form class=\"product-config\">\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.groupings), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</form>\n<hr />";
  return buffer;
  });

templates["catalog/related-tabs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<ul class=\"nav nav-tabs\">\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasVariations), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.relatedProdTabs), {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</ul>\n\n	<!-- Tab panes -->\n	<div class=\"tab-content padding-top10\">\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasVariations), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.relatedProdTabs), {hash:{},inverse:self.noop,fn:self.programWithDepth(10, program10, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n			<li class=\"active\"><a href=\"#variations-tab\" data-toggle=\"tab\"><strong>Variations</strong></a></li>\n		";
  }

function program4(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n			<li class=\"";
  stack1 = helpers.unless.call(depth0, (depth1 && depth1.hasVariations), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"#related-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-toggle=\"tab\"><strong>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></a></li>\n		";
  return buffer;
  }
function program5(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program6(depth0,data) {
  
  
  return "active";
  }

function program8(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n			<div class=\"tab-pane active\" id=\"variations-tab\">\n				"
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'collection_name': ("Variations"),
    'param_name': ("product_id"),
    'param_value': ((depth0 && depth0.variationId)),
    'lazy': ("true")
  },data:data},helper ? helper.call(depth0, "catalog/variations", options) : helperMissing.call(depth0, "view", "catalog/variations", options)))
    + "\n			</div>\n		";
  return buffer;
  }

function program10(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n			<div class=\"tab-pane ";
  stack1 = helpers.unless.call(depth0, (depth1 && depth1.hasVariations), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"related-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n				<div id=\"related-prods-carousel-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"related-prods-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\n					<!-- Wrapper for slides -->\n					<div class=\"carousel-inner\">\n						";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.slides), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</div>\n					";
  stack1 = (helper = helpers.when || (depth0 && depth0.when),options={hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.slides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options) : helperMissing.call(depth0, "when", ((stack1 = (depth0 && depth0.slides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</div>\n			</div>\n		";
  return buffer;
  }
function program11(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program12(depth0,data) {
  
  
  return " active";
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n							<div class=\"item";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n								<div class=\"row\">\n									";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n								</div>\n							</div>		\n						";
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n										<div class=\"col-xs-4\"><a href=\"/product/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><img class=\"img-thumbnail img-responsive\" src=\"//cdn.optcentral.com/optportal/catalog/";
  if (helper = helpers.companyId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.companyId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/regular/";
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></a></div>\n									";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n						<!-- Controls -->\n						<a class=\"left custom-carousel-control\" href=\"#related-prods-carousel-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-slide=\"prev\">\n							<span class=\"glyphicon glyphicon-chevron-left\"></span>\n						</a>\n						<a class=\"right custom-carousel-control\" href=\"#related-prods-carousel-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-slide=\"next\">\n							<span class=\"glyphicon glyphicon-chevron-right\"></span>\n						</a>\n					";
  return buffer;
  }

  buffer += "<!-- Nav tabs -->\n";
  stack1 = (helper = helpers.when || (depth0 && depth0.when),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.hasVariations), "or", ((stack1 = (depth0 && depth0.relatedProdTabs)),stack1 == null || stack1 === false ? stack1 : stack1.length), options) : helperMissing.call(depth0, "when", (depth0 && depth0.hasVariations), "or", ((stack1 = (depth0 && depth0.relatedProdTabs)),stack1 == null || stack1 === false ? stack1 : stack1.length), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "	";
  return buffer;
  });

templates["catalog/show"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n  <div class=\"alert alert-danger\">Product not exist.</div>\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<!-- Content -->\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <a href=\"javascript: history.go(-1)\" class=\"btn btn-default btn-xs pull-right margin-bottom10\">Go Back</a>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <div class=\"prod-img\">\n    	<div class=\"img-loader\"></div>\n      <span class='hover-zoom'>\n        <img class=\"img-responsive\" src=\"//cdn.optcentral.com/optportal/catalog/";
  if (helper = helpers.companyId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.companyId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/large/";
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-errorsrc=\"//cdn.optcentral.com/optportal/catalog/";
  if (helper = helpers.companyId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.companyId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/large/notavailable.jpg\">\n        <p>Hover to zoom</p>\n      </span>\n\n      <span class=\"glyphicon glyphicon-zoom-in\" data-toggle=\"modal\" data-target=\".zoom-img-modal\"></span>\n      <!-- Image Zoom Modal -->\n      <div class=\"modal fade zoom-img-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\">\n          <div class=\"modal-content\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n            <div class=\"modal-body\">\n              <img class=\"zoom-img img-responsive\" src=\"//cdn.optcentral.com/optportal/catalog/";
  if (helper = helpers.companyId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.companyId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/large/";
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>  			\n    <!-- Image Options Slider-->\n    "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'model': ((depth0 && depth0._model))
  },data:data},helper ? helper.call(depth0, "catalog/image-options", options) : helperMissing.call(depth0, "view", "catalog/image-options", options)))
    + "\n  </div>\n  <div class=\"visible-xs margin-bottom20\"></div>\n  <div class=\"col-sm-6\">\n    <ul class=\"list-inline\">\n  		<li><strong>Item #: ";
  if (helper = helpers.style_hash) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.style_hash); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></li>\n  		<li><strong>Price: ";
  if (helper = helpers.price) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.price); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></li>\n		</ul>\n    <div class=\"detail-tabs\">\n    	<!-- Nav tabs -->\n			<ul class=\"nav nav-tabs\">\n				<li class=\"active\"><a href=\"#description\" data-toggle=\"tab\">Description</a></li>\n			</ul>\n      <!-- Tab panes -->\n			<div class=\"tab-content\">\n				<div class=\"tab-pane fade in active\" id=\"description\">\n					<ul class=\"list-unstyled\">\n						";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.detailsList), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</ul>\n				</div>\n			</div>\n    </div>\n\n    <!-- Social Sharing -->\n    "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'model': ((depth0 && depth0._model)),
    'image_selector': (".prod-img")
  },data:data},helper ? helper.call(depth0, "common/social_sharing", options) : helperMissing.call(depth0, "view", "common/social_sharing", options)))
    + "\n\n    <!-- Ecomm Button -->\n    "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'model_name': ("Webstore"),
    'param_name': ("product"),
    'param_value': ((depth0 && depth0.id)),
    'lazy': ("true")
  },data:data},helper ? helper.call(depth0, "catalog/webstore", options) : helperMissing.call(depth0, "view", "catalog/webstore", options)))
    + "\n\n    <!-- Product Grouping -->\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.groupings), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    \n    <!-- Related Tabs-->\n    "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'model': ((depth0 && depth0._model))
  },data:data},helper ? helper.call(depth0, "catalog/related-tabs", options) : helperMissing.call(depth0, "view", "catalog/related-tabs", options)))
    + "\n  </div>\n</div>\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n							<li>\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayInfo), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <strong>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":</strong> ";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n              </li>\n						";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                  <span class=\"glyphicon glyphicon-info-sign display-info\" title=\"";
  if (helper = helpers.displayInfo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayInfo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span>\n                ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n      "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'model': ((depth0 && depth0._model))
  },data:data},helper ? helper.call(depth0, "catalog/product-grouping", options) : helperMissing.call(depth0, "view", "catalog/product-grouping", options)))
    + "\n    ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.notExist), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

templates["catalog/variations"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<div class=\"item";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n				<div class=\"row\">\n					";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</div>\n			</div>		\n		";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " active";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n						<div class=\"col-xs-4\">\n							<a href=\"/product/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"thumbnail\">\n								";
  if (helper = helpers.style_hash) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.style_hash); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<br>\n								";
  if (helper = helpers.price) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.price); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n							</a>\n						</div>\n					";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "\n		<!-- Controls -->\n			<a class=\"left custom-carousel-control\" href=\"#variations-prods-carousel\" data-slide=\"prev\">\n				<span class=\"glyphicon glyphicon-chevron-left\"></span>\n			</a>\n			<a class=\"right custom-carousel-control\" href=\"#variations-prods-carousel\" data-slide=\"next\">\n				<span class=\"glyphicon glyphicon-chevron-right\"></span>\n			</a>\n	";
  }

  buffer += "<div id=\"variations-prods-carousel\" class=\"related-prods-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\n	<!-- Wrapper for slides -->\n	<div class=\"carousel-inner\">\n		";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.slides), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n	";
  stack1 = (helper = helpers.when || (depth0 && depth0.when),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.slides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options) : helperMissing.call(depth0, "when", ((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.slides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

templates["catalog/webstore"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div class=\"margin-bottom10\">\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.parentWindow), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n			<a href=\"";
  if (helper = helpers.finalUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.finalUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn btn-primary\" rel=\"nofollow\" target=\"_parent\"><span class=\"glyphicon glyphicon-shopping-cart\"></span> Add to Cart</a>\n		";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n			<a href=\"";
  if (helper = helpers.finalUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.finalUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"add_to_bag btn btn-primary\" rel=\"nofollow\"><span class=\"glyphicon glyphicon-shopping-cart\"></span> Add to Cart</a>\n		";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.finalUrl), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

templates["common/social_sharing"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n<ul>\n  <li><a href=\"https://www.facebook.com/sharer/sharer.php?u=";
  if (helper = helpers.shareUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.shareUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"share-facebook\" target=\"_blank\">Facebook</a></li>\n  <li><a href=\"https://twitter.com/share?url=";
  if (helper = helpers.shareUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.shareUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"share-twitter\" target=\"_blank\">Tweet</a></li>\n  <li><a href=\"https://pinterest.com/pin/create/button/?url=";
  if (helper = helpers.shareUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.shareUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&amp;description=message-here&amp;media=";
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"share-pinterest\" target=\"_blank\">Pinterest</a></li>\n</ul>";
  return buffer;
  });

templates["home/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n	    <div class=\"item";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n	    	 <img class=\"img-responsive\" src=\"//cdn.optcentral.com/optportal/illustrations/"
    + escapeExpression(((stack1 = ((stack1 = (depth1 && depth1.company)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/large/";
  if (helper = helpers.fileName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fileName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n	    </div>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " active";
  }

  buffer += "<div class=\"carousel fade\">\n  <!-- Wrapper for slides -->\n  \n  <div class=\"carousel-inner\">\n  	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.illustrations), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>";
  return buffer;
  });

templates["home/popoverblock"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<a id=\"popover\">the popover link</a>\n	<div id=\"popover-head\" class=\"hide\">some title</div>\n	<div id=\"popover-content\" class=\"hide\">\n	<form>\n	  popover form\n	  <button type=\"button\" class=\"btn btn-default close-btn\">Close</button>\n	</form>\n</div>";
  });

templates["menu/categories"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.children)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n			<li class=\"dropdown-submenu\">\n        <a href=\"/catalog/1?category=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"/catalog/1?category=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">View All</a></li>\n        	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.children), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n      </li>\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          	<li><a href=\"/catalog/1?category=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n          ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "  \n    	<li><a href=\"/catalog/1?category=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n		";
  return buffer;
  }

  buffer += "<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">By Category <b class=\"caret\"></b></a>\n<ul class=\"dropdown-menu\">\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });

templates["menu/collections"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.children)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n			<li class=\"dropdown-submenu\">\n        <a href=\"/catalog/1?coll_subcat=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_0\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"/catalog/1?coll_subcat=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_0\">View All</a></li>\n        	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.children), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n      </li>\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          	<li class=\"dropdown-submenu\">\n              <a href=\"/catalog/1?coll_subcat=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_0\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n              "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'collection_name': ("Categories"),
    'param_name': ("collection_id"),
    'param_value': ((depth0 && depth0.id)),
    'lazy': ("true")
  },data:data},helper ? helper.call(depth0, "menu/subcategories", options) : helperMissing.call(depth0, "view", "menu/subcategories", options)))
    + "\n            </li>\n          ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    	<li class=\"dropdown-submenu\">\n        <a href=\"/catalog/1?coll_subcat=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_0\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n        "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'collection_name': ("Categories"),
    'param_name': ("collection_id"),
    'param_value': ((depth0 && depth0.id)),
    'lazy': ("true")
  },data:data},helper ? helper.call(depth0, "menu/subcategories", options) : helperMissing.call(depth0, "view", "menu/subcategories", options)))
    + "\n      </li>\n		";
  return buffer;
  }

  buffer += "<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">By Collection <b class=\"caret\"></b></a>\n<ul class=\"dropdown-menu\">\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });

templates["menu/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"collapse navbar-collapse\" id=\"topnavbar-collapse\">\n  <ul class=\"nav navbar-nav\">\n    <li><a href=\"/articles.html?menu=30&section=395\">About us</a></li>\n    <!-- Category Menu -->\n    "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'collection_name': ("Categories"),
    'lazy': ("true")
  },data:data},helper ? helper.call(depth0, "menu/categories", options) : helperMissing.call(depth0, "view", "menu/categories", options)))
    + "\n    "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'collection_name': ("Collections"),
    'lazy': ("true")
  },data:data},helper ? helper.call(depth0, "menu/collections", options) : helperMissing.call(depth0, "view", "menu/collections", options)))
    + "\n    <li><a href=\"/catalog/1\">Catalog</a></li>\n    <li><a href=\"/articles.html?menu=30&section=644\">Press</a></li>\n  </ul>\n</div>";
  return buffer;
  });

templates["menu/subcategories"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.children)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.programWithDepth(5, program5, data, depth1),fn:self.programWithDepth(2, program2, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n		<li class=\"dropdown-submenu\">\n      <a href=\"/catalog/1?coll_subcat={../../meta.collectionId}}_0\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n      <ul class=\"dropdown-menu\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.children), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n    </li>\n  ";
  return buffer;
  }
function program3(depth0,data,depth3) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <li><a href=\"/catalog/1?coll_subcat="
    + escapeExpression(((stack1 = ((stack1 = (depth3 && depth3.meta)),stack1 == null || stack1 === false ? stack1 : stack1.collectionId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n        ";
  return buffer;
  }

function program5(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "  \n    <li><a href=\"/catalog/1?coll_subcat="
    + escapeExpression(((stack1 = ((stack1 = (depth2 && depth2.meta)),stack1 == null || stack1 === false ? stack1 : stack1.collectionId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n	";
  return buffer;
  }

  buffer += "<li><a href=\"/catalog/1?coll_subcat="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.collectionId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_0\">View All</a></li>\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

return templates;

};