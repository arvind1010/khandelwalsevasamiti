module.exports = function(Handlebars) {

var templates = {};

templates["article/image-options"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<div class=\"item";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n				<div class=\"row\">\r\n					";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				</div>\r\n			</div>		\r\n		";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " active";
  }

function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\r\n						<div class=\"col-xs-4\"><img class=\"img-thumbnail img-responsive\" src=\"//cdn.optcentral.com/optportal/illustrations/"
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
    + "\"></div>\r\n					";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "\r\n		<a class=\"left custom-carousel-control\" href=\"#article-img-options-carousel\" data-slide=\"prev\">\r\n			<span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n		</a>\r\n		<a class=\"right custom-carousel-control\" href=\"#article-img-options-carousel\" data-slide=\"next\">\r\n			<span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n		</a>\r\n	";
  }

  buffer += "<div id=\"article-img-options-carousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\r\n	    				\r\n	<!-- Wrapper for slides -->\r\n	<div class=\"carousel-inner\">\r\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.imageSlides), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n\r\n	<!-- Controls -->\r\n	";
  stack1 = (helper = helpers.when || (depth0 && depth0.when),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.imageSlides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options) : helperMissing.call(depth0, "when", ((stack1 = (depth0 && depth0.imageSlides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;
  });

templates["article/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<div class=\"item";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n				";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			</div>		\r\n		";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " active";
  }

function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\r\n					<div class=\"row\">\r\n						";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					</div>\r\n				";
  return buffer;
  }
function program5(depth0,data,depth3) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n							<div class=\"col-sm-"
    + escapeExpression(((stack1 = ((stack1 = (depth3 && depth3.meta)),stack1 == null || stack1 === false ? stack1 : stack1.bootstrapColumn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n								"
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'data': (depth0)
  },data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth3 && depth3.meta)),stack1 == null || stack1 === false ? stack1 : stack1.layout)),stack1 == null || stack1 === false ? stack1 : stack1.type), options) : helperMissing.call(depth0, "view", ((stack1 = ((stack1 = (depth3 && depth3.meta)),stack1 == null || stack1 === false ? stack1 : stack1.layout)),stack1 == null || stack1 === false ? stack1 : stack1.type), options)))
    + "\r\n							</div>\r\n						";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n		<div class=\"row controller\">\r\n			<div class=\"container\">\r\n				<hr />\r\n				<!-- Indicators -->\r\n				<a class=\"left\" href=\"#article-carousel\" data-slide=\"prev\">previous</a>\r\n				<ol class=\"carousel-indicators\">\r\n					";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.slides), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			  </ol>\r\n				<a class=\"right\" href=\"#article-carousel\" data-slide=\"next\">next</a>\r\n			</div>\r\n		</div>	\r\n	";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			    	<li data-target=\"#article-carousel\" data-slide-to=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></li>\r\n			  	";
  return buffer;
  }

  buffer += "<div id=\"article-carousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\r\n	<!-- Wrapper for slides -->\r\n	<div class=\"carousel-inner\">\r\n		";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.slides), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n	";
  stack1 = (helper = helpers.when || (depth0 && depth0.when),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.slides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options) : helperMissing.call(depth0, "when", ((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.slides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;
  });

templates["article/list-details"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		  		<div class=\"item";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n		  			<img class=\"img-responsive\" src=\"//cdn.optcentral.com/optportal/illustrations/"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth1 && depth1.data)),stack1 == null || stack1 === false ? stack1 : stack1.company)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/regular/";
  if (helper = helpers.fileName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fileName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		  		</div>\r\n		  	";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " active";
  }

  buffer += "<div class=\"row\">\r\n	<div class=\"col-sm-6\">\r\n		<div class=\"imageslide-carousel carousel fade\">\r\n		  <!-- Wrapper for slides -->\r\n		  <div class=\"carousel-inner\">\r\n		  	";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.illustrations), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		 	</div>\r\n		</div>\r\n	</div>\r\n	<div class=\"col-sm-6\">\r\n		<h1>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\r\n		";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.body)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n</div>";
  return buffer;
  });

templates["article/list-image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"/article/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"thumbnail margin-bottom10\">\r\n	<img class=\"img-responsive\" src=\"/images/image_loader_big.gif\" data-src=\"//cdn.optcentral.com/optportal/illustrations"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n</a>\r\n<p class=\"text-center\">"
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
  buffer += "\r\n	<ul class=\"nav nav-tabs\">\r\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.relatedProdTabs), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</ul>\r\n\r\n	<!-- Tab panes -->\r\n	<div class=\"tab-content padding-top10\">\r\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.relatedProdTabs), {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<li class=\"";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"#related-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-toggle=\"tab\"><strong>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></a></li>\r\n		";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "active";
  }

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n			<div class=\"tab-pane ";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"related-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n				<div id=\"related-prods-carousel-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"related-prods-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\r\n					<!-- Wrapper for slides -->\r\n					<div class=\"carousel-inner\">\r\n						";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.slides), {hash:{},inverse:self.noop,fn:self.programWithDepth(8, program8, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					</div>\r\n					";
  stack1 = (helper = helpers.when || (depth0 && depth0.when),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.slides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options) : helperMissing.call(depth0, "when", ((stack1 = (depth0 && depth0.slides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				</div>\r\n			</div>\r\n		";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return " active";
  }

function program8(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\r\n							<div class=\"item";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n								<div class=\"row\">\r\n									";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(9, program9, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n								</div>\r\n							</div>		\r\n						";
  return buffer;
  }
function program9(depth0,data,depth3) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n										<div class=\"col-xs-4\"><a href=\"/product/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><img class=\"img-thumbnail img-responsive\" src=\"//cdn.optcentral.com/optportal/catalog/"
    + escapeExpression(((stack1 = ((stack1 = (depth3 && depth3.company)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/regular/";
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></a></div>\r\n									";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n						<!-- Controls -->\r\n						<a class=\"left custom-carousel-control\" href=\"#related-prods-carousel-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-slide=\"prev\">\r\n							<span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n						</a>\r\n						<a class=\"right custom-carousel-control\" href=\"#related-prods-carousel-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-slide=\"next\">\r\n							<span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n						</a>\r\n					";
  return buffer;
  }

  buffer += "<!-- Nav tabs -->\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.relatedProdTabs)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "	";
  return buffer;
  });

templates["article/show"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<!-- Content -->\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <a href=\"javascript: history.go(-1)\" class=\"btn btn-default btn-xs pull-right margin-bottom10\">Go Back</a>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"article-img\">\r\n    	<div class=\"img-loader\"></div>\r\n    	<img class=\"img-responsive\" src=\"//cdn.optcentral.com/optportal/illustrations/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.company)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/regular/";
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n      <span class=\"glyphicon glyphicon-zoom-in\" data-toggle=\"modal\" data-target=\".zoom-img-modal\"></span>\r\n      <!-- Image Zoom Modal -->\r\n      <div class=\"modal fade zoom-img-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\">\r\n          <div class=\"modal-content\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n            <div class=\"modal-body\">\r\n              <img class=\"zoom-img img-responsive\" src=\"//cdn.optcentral.com/optportal/illustrations/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.company)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/large/";
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>  			\r\n    <!-- Image Options Slider-->\r\n    "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'model': ((depth0 && depth0._model))
  },data:data},helper ? helper.call(depth0, "article/image-options", options) : helperMissing.call(depth0, "view", "article/image-options", options)))
    + "\r\n  </div>\r\n  <div class=\"visible-xs margin-bottom20\"></div>\r\n  <div class=\"col-sm-6\">\r\n    <h3>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n    ";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    <!-- Related Tabs-->\r\n    "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'model': ((depth0 && depth0._model))
  },data:data},helper ? helper.call(depth0, "article/related-tabs", options) : helperMissing.call(depth0, "view", "article/related-tabs", options)))
    + "\r\n  </div>\r\n</div>";
  return buffer;
  });

templates["catalog/image-options"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<div class=\"item";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n				<div class=\"row\">\r\n					";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				</div>\r\n			</div>		\r\n		";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " active";
  }

function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\r\n						<div class=\"col-xs-4\"><img class=\"img-thumbnail img-responsive\" src=\"//cdn.optcentral.com/optportal/catalog/"
    + escapeExpression(((stack1 = (depth2 && depth2.companyId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/regular/"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" data-largesrc=\"//cdn.optcentral.com/optportal/catalog/"
    + escapeExpression(((stack1 = (depth2 && depth2.companyId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/large/"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"></div>\r\n					";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "\r\n		<a class=\"left custom-carousel-control\" href=\"#img-options-carousel\" data-slide=\"prev\">\r\n			<span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n		</a>\r\n		<a class=\"right custom-carousel-control\" href=\"#img-options-carousel\" data-slide=\"next\">\r\n			<span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n		</a>\r\n	";
  }

  buffer += "<div id=\"img-options-carousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\r\n	    				\r\n	<!-- Wrapper for slides -->\r\n	<div class=\"carousel-inner\">\r\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.imageSlides), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n\r\n	<!-- Controls -->\r\n	";
  stack1 = (helper = helpers.when || (depth0 && depth0.when),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.imageSlides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options) : helperMissing.call(depth0, "when", ((stack1 = (depth0 && depth0.imageSlides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;
  });

templates["catalog/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n		  		";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth1 && depth1.meta)),stack1 == null || stack1 === false ? stack1 : stack1.breadCrumbData)),stack1 == null || stack1 === false ? stack1 : stack1.data), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		  	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			  		<li ";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.last), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.last), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\r\n			  	";
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
  buffer += "\r\n		  		";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth1 && depth1.meta)),stack1 == null || stack1 === false ? stack1 : stack1.breadCrumbData)),stack1 == null || stack1 === false ? stack1 : stack1.data), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		  	";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			  		<li ";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.last), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.last), {hash:{},inverse:self.program(11, program11, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\r\n			  	";
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
  buffer += "\r\n	  	<div class=\"col-xs-6 col-sm-3\">\r\n	    	<a href=\"/product/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n	      	<img class=\"img-thumbnail img-responsive\" src=\"//cdn.optcentral.com/optportal/catalog/";
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
    + "/regular/notavailable.jpg\" alt=\"\">\r\n	    	</a>\r\n	  	</div>\r\n  	";
  return buffer;
  }

  buffer += "<div class=\"catalog\">\r\n	<div class=\"row\">\r\n		<div class=\"col-sm-6\">\r\n			<!-- Breadcrumb -->\r\n		  <ol class=\"breadcrumb\">\r\n		  	";
  stack1 = (helper = helpers.when || (depth0 && depth0.when),options={hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.breadCrumbData)),stack1 == null || stack1 === false ? stack1 : stack1.type), "eq", "Collection", options) : helperMissing.call(depth0, "when", ((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.breadCrumbData)),stack1 == null || stack1 === false ? stack1 : stack1.type), "eq", "Collection", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		  	";
  stack1 = (helper = helpers.when || (depth0 && depth0.when),options={hash:{},inverse:self.noop,fn:self.programWithDepth(9, program9, data, depth0),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.breadCrumbData)),stack1 == null || stack1 === false ? stack1 : stack1.type), "eq", "Category", options) : helperMissing.call(depth0, "when", ((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.breadCrumbData)),stack1 == null || stack1 === false ? stack1 : stack1.type), "eq", "Category", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			</ol>\r\n		</div>\r\n		<div class=\"col-sm-6 top-pagination\">\r\n			<!-- Pagination -->\r\n			"
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'collection': ((depth0 && depth0._collection))
  },data:data},helper ? helper.call(depth0, "catalog/pagination", options) : helperMissing.call(depth0, "view", "catalog/pagination", options)))
    + "\r\n		</div>\r\n	</div>\r\n  \r\n	<!-- Product List -->\r\n	<div class=\"row product-list\">\r\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </div>\r\n\r\n  <div class=\"bottom-pagination\">\r\n  	<!-- Pagination -->\r\n		"
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'collection': ((depth0 && depth0._collection))
  },data:data},helper ? helper.call(depth0, "catalog/pagination", options) : helperMissing.call(depth0, "view", "catalog/pagination", options)))
    + "\r\n  </div>\r\n</div>";
  return buffer;
  });

templates["catalog/pagination"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n				<li class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n					<a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.num)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + escapeExpression(((stack1 = ((stack1 = (depth1 && depth1.meta)),stack1 == null || stack1 === false ? stack1 : stack1.currQueryString)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.text), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\r\n				</li>\r\n			";
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

  buffer += "\r\n<div class=\"row\">\r\n	<div class=\"col-sm-4\">\r\n		<p>Showing <strong>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.startProduct)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong> - <strong>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.endProduct)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong> of <strong>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.totalProducts)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong></p>\r\n	</div>\r\n	<div class=\"col-sm-8 clearfix\">\r\n		<ul class=\"pagination pagination-sm\">\r\n			";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.pages), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</ul>\r\n	</div>\r\n</div>";
  return buffer;
  });

templates["catalog/product-grouping"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    <label class=\"control-label\" for=\""
    + escapeExpression((helper = helpers.sanitize || (depth0 && depth0.sanitize),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.name), options) : helperMissing.call(depth0, "sanitize", (depth0 && depth0.name), options)))
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\r\n    <div class=\"controls\">\r\n      <select class=\"grouping selectpicker form-control\" data-param=\"";
  if (helper = helpers.type_value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type_value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\""
    + escapeExpression((helper = helpers.sanitize || (depth0 && depth0.sanitize),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.name), options) : helperMissing.call(depth0, "sanitize", (depth0 && depth0.name), options)))
    + "\">\r\n        <option value=\"0\" selected>Select one</option>\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.values), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      </select>\r\n    </div>\r\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n          <option value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\r\n        ";
  return buffer;
  }

  buffer += "<form class=\"product-config\">\r\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.groupings), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</form>\r\n<hr />";
  return buffer;
  });

templates["catalog/related-tabs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	<ul class=\"nav nav-tabs\">\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasVariations), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.relatedProdTabs), {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</ul>\r\n\r\n	<!-- Tab panes -->\r\n	<div class=\"tab-content padding-top10\">\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasVariations), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.relatedProdTabs), {hash:{},inverse:self.noop,fn:self.programWithDepth(10, program10, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\r\n			<li class=\"active\"><a href=\"#variations-tab\" data-toggle=\"tab\"><strong>Variations</strong></a></li>\r\n		";
  }

function program4(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<li class=\"";
  stack1 = helpers.unless.call(depth0, (depth1 && depth1.hasVariations), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"#related-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-toggle=\"tab\"><strong>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></a></li>\r\n		";
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
  buffer += "\r\n			<div class=\"tab-pane active\" id=\"variations-tab\">\r\n				"
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'collection_name': ("Variations"),
    'param_name': ("product_id"),
    'param_value': ((depth0 && depth0.variationId)),
    'lazy': ("true")
  },data:data},helper ? helper.call(depth0, "catalog/variations", options) : helperMissing.call(depth0, "view", "catalog/variations", options)))
    + "\r\n			</div>\r\n		";
  return buffer;
  }

function program10(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n			<div class=\"tab-pane ";
  stack1 = helpers.unless.call(depth0, (depth1 && depth1.hasVariations), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"related-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n				<div id=\"related-prods-carousel-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"related-prods-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\r\n					<!-- Wrapper for slides -->\r\n					<div class=\"carousel-inner\">\r\n						";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.slides), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					</div>\r\n					";
  stack1 = (helper = helpers.when || (depth0 && depth0.when),options={hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.slides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options) : helperMissing.call(depth0, "when", ((stack1 = (depth0 && depth0.slides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				</div>\r\n			</div>\r\n		";
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
  buffer += "\r\n							<div class=\"item";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n								<div class=\"row\">\r\n									";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n								</div>\r\n							</div>		\r\n						";
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n										<div class=\"col-xs-4\"><a href=\"/product/";
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
    + "\"></a></div>\r\n									";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n						<!-- Controls -->\r\n						<a class=\"left custom-carousel-control\" href=\"#related-prods-carousel-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-slide=\"prev\">\r\n							<span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n						</a>\r\n						<a class=\"right custom-carousel-control\" href=\"#related-prods-carousel-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-slide=\"next\">\r\n							<span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n						</a>\r\n					";
  return buffer;
  }

  buffer += "<!-- Nav tabs -->\r\n";
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
  
  
  return "\r\n  <div class=\"alert alert-danger\">Product not exist.</div>\r\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n<!-- Content -->\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <a href=\"javascript: history.go(-1)\" class=\"btn btn-default btn-xs pull-right margin-bottom10\">Go Back</a>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"prod-img\">\r\n    	<div class=\"img-loader\"></div>\r\n      <span class='hover-zoom'>\r\n        <img class=\"img-responsive\" src=\"//cdn.optcentral.com/optportal/catalog/";
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
    + "/large/notavailable.jpg\">\r\n        <p>Hover to zoom</p>\r\n      </span>\r\n\r\n      <span class=\"glyphicon glyphicon-zoom-in\" data-toggle=\"modal\" data-target=\".zoom-img-modal\"></span>\r\n      <!-- Image Zoom Modal -->\r\n      <div class=\"modal fade zoom-img-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n          <div class=\"modal-content\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n            <div class=\"modal-body\">\r\n              <img class=\"zoom-img img-responsive\" src=\"//cdn.optcentral.com/optportal/catalog/";
  if (helper = helpers.companyId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.companyId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/large/";
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>  			\r\n    <!-- Image Options Slider-->\r\n    "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'model': ((depth0 && depth0._model))
  },data:data},helper ? helper.call(depth0, "catalog/image-options", options) : helperMissing.call(depth0, "view", "catalog/image-options", options)))
    + "\r\n  </div>\r\n  <div class=\"visible-xs margin-bottom20\"></div>\r\n  <div class=\"col-sm-6\">\r\n    <ul class=\"list-inline\">\r\n  		<li><strong>Item #: ";
  if (helper = helpers.style_hash) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.style_hash); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></li>\r\n  		<li><strong>Price: ";
  if (helper = helpers.price) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.price); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></li>\r\n		</ul>\r\n    <div class=\"detail-tabs\">\r\n    	<!-- Nav tabs -->\r\n			<ul class=\"nav nav-tabs\">\r\n				<li class=\"active\"><a href=\"#description\" data-toggle=\"tab\">Description</a></li>\r\n			</ul>\r\n      <!-- Tab panes -->\r\n			<div class=\"tab-content\">\r\n				<div class=\"tab-pane fade in active\" id=\"description\">\r\n					<ul class=\"list-unstyled\">\r\n						";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.detailsList), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					</ul>\r\n				</div>\r\n			</div>\r\n    </div>\r\n\r\n    <!-- Social Sharing -->\r\n    "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'model': ((depth0 && depth0._model)),
    'image_selector': (".prod-img")
  },data:data},helper ? helper.call(depth0, "common/social_sharing", options) : helperMissing.call(depth0, "view", "common/social_sharing", options)))
    + "\r\n\r\n    <!-- Ecomm Button -->\r\n    "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'model_name': ("Webstore"),
    'param_name': ("product"),
    'param_value': ((depth0 && depth0.id)),
    'lazy': ("true")
  },data:data},helper ? helper.call(depth0, "catalog/webstore", options) : helperMissing.call(depth0, "view", "catalog/webstore", options)))
    + "\r\n\r\n    <!-- Product Grouping -->\r\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.groupings), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    \r\n    <!-- Related Tabs-->\r\n    "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'model': ((depth0 && depth0._model))
  },data:data},helper ? helper.call(depth0, "catalog/related-tabs", options) : helperMissing.call(depth0, "view", "catalog/related-tabs", options)))
    + "\r\n  </div>\r\n</div>\r\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n							<li>\r\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayInfo), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <strong>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":</strong> ";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n              </li>\r\n						";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                  <span class=\"glyphicon glyphicon-info-sign display-info\" title=\"";
  if (helper = helpers.displayInfo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayInfo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span>\r\n                ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n      "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'model': ((depth0 && depth0._model))
  },data:data},helper ? helper.call(depth0, "catalog/product-grouping", options) : helperMissing.call(depth0, "view", "catalog/product-grouping", options)))
    + "\r\n    ";
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
  buffer += "\r\n			<div class=\"item";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n				<div class=\"row\">\r\n					";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				</div>\r\n			</div>		\r\n		";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " active";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n						<div class=\"col-xs-4\">\r\n							<a href=\"/product/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"thumbnail\">\r\n								";
  if (helper = helpers.style_hash) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.style_hash); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<br>\r\n								";
  if (helper = helpers.price) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.price); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n							</a>\r\n						</div>\r\n					";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "\r\n		<!-- Controls -->\r\n			<a class=\"left custom-carousel-control\" href=\"#variations-prods-carousel\" data-slide=\"prev\">\r\n				<span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n			</a>\r\n			<a class=\"right custom-carousel-control\" href=\"#variations-prods-carousel\" data-slide=\"next\">\r\n				<span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n			</a>\r\n	";
  }

  buffer += "<div id=\"variations-prods-carousel\" class=\"related-prods-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\r\n	<!-- Wrapper for slides -->\r\n	<div class=\"carousel-inner\">\r\n		";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.slides), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n	";
  stack1 = (helper = helpers.when || (depth0 && depth0.when),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.slides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options) : helperMissing.call(depth0, "when", ((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.slides)),stack1 == null || stack1 === false ? stack1 : stack1.length), "gt", 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;
  });

templates["catalog/webstore"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	<div class=\"margin-bottom10\">\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.parentWindow), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<a href=\"";
  if (helper = helpers.finalUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.finalUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn btn-primary\" rel=\"nofollow\" target=\"_parent\"><span class=\"glyphicon glyphicon-shopping-cart\"></span> Add to Cart</a>\r\n		";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<a href=\"";
  if (helper = helpers.finalUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.finalUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"add_to_bag btn btn-primary\" rel=\"nofollow\"><span class=\"glyphicon glyphicon-shopping-cart\"></span> Add to Cart</a>\r\n		";
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


  buffer += "\r\n<ul>\r\n  <li><a href=\"https://www.facebook.com/sharer/sharer.php?u=";
  if (helper = helpers.shareUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.shareUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"share-facebook\" target=\"_blank\">Facebook</a></li>\r\n  <li><a href=\"https://twitter.com/share?url=";
  if (helper = helpers.shareUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.shareUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"share-twitter\" target=\"_blank\">Tweet</a></li>\r\n  <li><a href=\"https://pinterest.com/pin/create/button/?url=";
  if (helper = helpers.shareUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.shareUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&amp;description=message-here&amp;media=";
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"share-pinterest\" target=\"_blank\">Pinterest</a></li>\r\n</ul>";
  return buffer;
  });

templates["home/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	    <div class=\"item";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n	    	 <img class=\"img-responsive\" src=\"//cdn.optcentral.com/optportal/illustrations/"
    + escapeExpression(((stack1 = ((stack1 = (depth1 && depth1.company)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/large/";
  if (helper = helpers.fileName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fileName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n	    </div>\r\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " active";
  }

  buffer += "<div class=\"carousel fade\">\r\n  <!-- Wrapper for slides -->\r\n  \r\n  <div class=\"carousel-inner\">\r\n  	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.illustrations), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </div>\r\n</div>";
  return buffer;
  });

templates["home/popoverblock"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<a id=\"popover\">the popover link</a>\r\n	<div id=\"popover-head\" class=\"hide\">some title</div>\r\n	<div id=\"popover-content\" class=\"hide\">\r\n	<form>\r\n	  popover form\r\n	  <button type=\"button\" class=\"btn btn-default close-btn\">Close</button>\r\n	</form>\r\n</div>";
  });

templates["menu/categories"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n		";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.children)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<li class=\"dropdown-submenu\">\r\n        <a href=\"/catalog/1?category=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n        <ul class=\"dropdown-menu\">\r\n          <li><a href=\"/catalog/1?category=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">View All</a></li>\r\n        	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.children), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </ul>\r\n      </li>\r\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n          	<li><a href=\"/catalog/1?category=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\r\n          ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "  \r\n    	<li><a href=\"/catalog/1?category=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\r\n		";
  return buffer;
  }

  buffer += "<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">By Category <b class=\"caret\"></b></a>\r\n<ul class=\"dropdown-menu\">\r\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  });

templates["menu/collections"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n		";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.children)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<li class=\"dropdown-submenu\">\r\n        <a href=\"/catalog/1?coll_subcat=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_0\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n        <ul class=\"dropdown-menu\">\r\n          <li><a href=\"/catalog/1?coll_subcat=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_0\">View All</a></li>\r\n        	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.children), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </ul>\r\n      </li>\r\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n          	<li class=\"dropdown-submenu\">\r\n              <a href=\"/catalog/1?coll_subcat=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_0\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n              "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'collection_name': ("Categories"),
    'param_name': ("collection_id"),
    'param_value': ((depth0 && depth0.id)),
    'lazy': ("true")
  },data:data},helper ? helper.call(depth0, "menu/subcategories", options) : helperMissing.call(depth0, "view", "menu/subcategories", options)))
    + "\r\n            </li>\r\n          ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    	<li class=\"dropdown-submenu\">\r\n        <a href=\"/catalog/1?coll_subcat=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_0\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n        "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'collection_name': ("Categories"),
    'param_name': ("collection_id"),
    'param_value': ((depth0 && depth0.id)),
    'lazy': ("true")
  },data:data},helper ? helper.call(depth0, "menu/subcategories", options) : helperMissing.call(depth0, "view", "menu/subcategories", options)))
    + "\r\n      </li>\r\n		";
  return buffer;
  }

  buffer += "<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">By Collection <b class=\"caret\"></b></a>\r\n<ul class=\"dropdown-menu\">\r\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  });

templates["menu/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"collapse navbar-collapse\" id=\"topnavbar-collapse\">\r\n  <ul class=\"nav navbar-nav\">\r\n    <li><a href=\"/articles.html?menu=30&section=395\">About us</a></li>\r\n    <!-- Category Menu -->\r\n    "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'collection_name': ("Categories"),
    'lazy': ("true")
  },data:data},helper ? helper.call(depth0, "menu/categories", options) : helperMissing.call(depth0, "view", "menu/categories", options)))
    + "\r\n    "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{
    'collection_name': ("Collections"),
    'lazy': ("true")
  },data:data},helper ? helper.call(depth0, "menu/collections", options) : helperMissing.call(depth0, "view", "menu/collections", options)))
    + "\r\n    <li><a href=\"/catalog/1\">Catalog</a></li>\r\n    <li><a href=\"/articles.html?menu=30&section=644\">Press</a></li>\r\n  </ul>\r\n</div>";
  return buffer;
  });

templates["menu/subcategories"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.children)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.programWithDepth(5, program5, data, depth1),fn:self.programWithDepth(2, program2, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program2(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<li class=\"dropdown-submenu\">\r\n      <a href=\"/catalog/1?coll_subcat={../../meta.collectionId}}_0\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n      <ul class=\"dropdown-menu\">\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.children), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      </ul>\r\n    </li>\r\n  ";
  return buffer;
  }
function program3(depth0,data,depth3) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n          <li><a href=\"/catalog/1?coll_subcat="
    + escapeExpression(((stack1 = ((stack1 = (depth3 && depth3.meta)),stack1 == null || stack1 === false ? stack1 : stack1.collectionId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\r\n        ";
  return buffer;
  }

function program5(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "  \r\n    <li><a href=\"/catalog/1?coll_subcat="
    + escapeExpression(((stack1 = ((stack1 = (depth2 && depth2.meta)),stack1 == null || stack1 === false ? stack1 : stack1.collectionId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\r\n	";
  return buffer;
  }

  buffer += "<li><a href=\"/catalog/1?coll_subcat="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.collectionId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_0\">View All</a></li>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

return templates;

};