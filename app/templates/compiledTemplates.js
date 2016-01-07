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
  


  return "<div>\r\n	<h1 class=\"text-center\">खंडेलवाल सेवा समिती, परतवाड़ा-अचलपूर</h1>\r\n	<h3 class=\"text-center\"> कार्यकारिणी</h3>\r\n</div>\r\n<hr>\r\n<div class=\"row\">\r\n	<div class=\"col-sm-6 \">\r\n	<div class=\"well\">\r\n		<h2 class=\"text-center\">अध्यक्ष</h2>\r\n		<hr>\r\n		<h4 class=\"text-center\">गोविंद नारायणदासजी सिरोया</h4>\r\n		<h4 class=\"text-center\">9422156180, 9130356180</h4>			\r\n	</div>\r\n		\r\n	</div>\r\n	<div class=\"col-sm-6 \">\r\n		<div class=\"well\">\r\n			<h2 class=\"text-center\">सचिव</h2>\r\n			<hr>\r\n			<h4 class=\"text-center\">राजेंद्र कन्हेय्यालाल पाटोदीया</h4>\r\n			<h4 class=\"text-center\">9421827601, 9764309684</h4>	\r\n			\r\n		</div>\r\n					\r\n	</div>\r\n	\r\n</div>\r\n\r\n<div class=\"row\">\r\n	<div class=\"col-sm-6 \">\r\n	<div class=\"well\">\r\n		<h2 class=\"text-center\">उपाध्यक्ष</h2>\r\n		<hr>\r\n		<h4 class=\"text-center\">मनीष रमेशचंद्रजी डंगायच  - 9422234459</h4>\r\n		<h4 class=\"text-center\">संतोष व्दारकादासजी खुटेटा  - 9422858348</h4>\r\n		<h4 class=\"text-center\">मनीष मोहनलालजी भुखमारीया  - 9420718184</h4>\r\n		<h4 class=\"text-center\">अजय श्रीरामजी सेठी  - 9422156282</h4>	\r\n		<h4 class=\"text-center\">बजरंग दिपचंदजी खुटेटा  - 9890006474</h4>			\r\n	</div>\r\n	\r\n\r\n	</div>\r\n	<div class=\"col-sm-6 \">\r\n		<div class=\"well\">\r\n			<h2 class=\"text-center\">सह सचिव</h2>\r\n			<hr>\r\n			<h4 class=\"text-center\">रितेश चंद्रकांतजी बंब  - 9923450422</h4>\r\n			<h4 class=\"text-center\">मुरारी मदनलालजी ताम्बी - 9422159267</h4>\r\n			<h4 class=\"text-center\">जयकुमार श्यामसुंदरजी घिया - 9527282808</h4>\r\n			<h4 class=\"text-center\">कुलदिप संपतकुमारजी तंबोलिया - 9420833337, 8149820445</h4>\r\n			\r\n		</div>\r\n		\r\n						\r\n	</div>\r\n	\r\n</div>\r\n\r\n<div class=\"row\">\r\n	<div class=\"col-sm-6\">\r\n		<div class=\"row\">\r\n			<div class=\"col-sm-12 \">\r\n				<div class=\"well\">\r\n					<h2 class=\"text-center\">कोषाध्यक्ष</h2>\r\n					<hr>\r\n					<h4 class=\"text-center\">प्रकाशचंद्र भुरमलजी भुखमारीया </h4>\r\n					<h4 class=\"text-center\">9403619592</h4>	\r\n					\r\n				</div>\r\n							\r\n			</div>\r\n			<div class=\"col-sm-12 \">\r\n			<div class=\"well\">\r\n			<h2 class=\"text-center\">सह कोषाध्यक्ष</h2>\r\n					<hr>\r\n					<h4 class=\"text-center\">विजय सत्यनारायणजी भुखमारीया </h4>\r\n					<h4 class=\"text-center\">9422890314</h4>	\r\n\r\n				\r\n			</div>\r\n							\r\n			</div>\r\n			<div class=\"col-sm-12 \">\r\n				<div class=\"well\">\r\n					<h2 class=\"text-center\">स्वागत अध्यक्ष</h2>\r\n					<hr>\r\n					<h4 class=\"text-center\">कैलाश रामबिलासजी रावत</h4>\r\n					<h4 class=\"text-center\">9923108700</h4>	\r\n					\r\n				</div>			\r\n			</div>\r\n			\r\n		</div>\r\n			\r\n	</div>\r\n	<div class=\"col-sm-6 \">\r\n	<div class=\"well\">\r\n		<h2 class=\"text-center\">स्मरणिका प्रमुख</h2>\r\n					<hr>\r\n					<h4 class=\"text-center\">रामबाबु भुकमारीया</h4>\r\n					<h4 class=\"text-center\">9422159324</h4>	\r\n					\r\n		\r\n	</div>\r\n	<div class=\"well\">\r\n	<h2 class=\"text-center\">आवास-निवास व्यवस्था</h2>\r\n		<hr>\r\n		<h4 class=\"text-center\">प्रदिप सिरोया  - 9423126633</h4>\r\n		<h4 class=\"text-center\">अनिल साकोनिया - 9423623274</h4>\r\n\r\n		<h4 class=\"text-center\">संदीप कुलवाल - 9890085100</h4>\r\n		<h4 class=\"text-center\">अमित कुलवाल  - 9420076223</h4>\r\n\r\n		<h4 class=\"text-center\">अमित डंगायच  - 9423125741</h4>\r\n		<h4 class=\"text-center\">रोशन सिरोया  - 9422941028</h4>\r\n\r\n		<h4 class=\"text-center\">राजेश बुसर  - 9890760076</h4>\r\n		<h4 class=\"text-center\">कृष्णा बड़ाया, चिखलदरा – 9423648890</h4>\r\n		\r\n	</div>\r\n		\r\n\r\n\r\n\r\n	</div>\r\n	\r\n</div>\r\n";
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
  


  return "<div class=\"well\">\r\n	<div class=\"txt text-center\"><h3>कार्यालय</h3></div>\r\n\r\n	<hr>\r\n\r\n	<div class=\"txt text-center\"><p><span style=\"font-size:16px;\">खंडेलवाल सेवा समिती,</span><br></p><p><span style=\"font-size:16px;\">C/o,&nbsp;खंडेलवाल ट्रेडिंग कंपनी, सदर बाज़ार,</span><br></p><p><span style=\"font-size:16px;\">परतवाड़ा, जि. अमरावती (महाराष्ट्र)<br>फोन नं. 07223-220413, 222413<span class=\"editor_accent2\"></span></span><span class=\"editor_accent2\"></span></p><p><span style=\"font-size:16px;\">Email: khandelwalsevasamiti@gmail.com</span><br></p></div>\r\n	\r\n</div>\r\n\r\n<div class=\"well\">\r\n	<div class=\"txt text-center\"><h3>फॉर्म भेजने का पता&nbsp;</h3></div>\r\n\r\n	<HR>\r\n\r\n	<div class=\"txt text-center\"><p><span style=\"font-size:16px;\">कुलदीप संपतकुमारजी तंबोलिया,<br></span></p><p><span style=\"font-size:16px;\"> वकिल लाईन, परतवाड़ा 444805 <br></span></p><p><span style=\"font-size:16px;\">जि. अमरावती (महा.)&nbsp;</span></p><p><span style=\"font-size:16px;\">फोन नं. 07223-220445, 9028233699, 8149820445</span><br></p></div>\r\n\r\n\r\n	\r\n</div>\r\n\r\n<div class=\"well\">\r\n	<div class=\"txt text-center\"><h3>आवास व्यवस्था हेतू संपर्क&nbsp;&nbsp;</h3></div>\r\n\r\n	<hr>\r\n\r\n\r\n	<div class=\"txt text-center\"><p><span style=\"font-size:16px;\">प्रदिप सिरोया &nbsp;- 9423126633<br><br>अनिल साकोनिया -&nbsp;9423623274<br><br>संदीप कुलवाल - 9890085100<br><br>अमित कुलवाल &nbsp;- 9420076223<br><br>अमित डंगायच &nbsp;- 9423125741<br><br>रोशन सिरोया &nbsp;- 9422941028<br><br>राजेश बुसर &nbsp;- 9890760076<br><br>कृष्णा बड़ाया, चिखलदरा – 9423648890</span><span style=\"font-size:16px;\"></span></p></div>\r\n	\r\n</div>";
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
  


  return "<div class=\"well\">\r\n  <h3 style=\"text-align: center;\"><strong>व्दितीय अखिल भारतीय खंडेलवाल युवक-युवती परिचय सम्मेलन एवं सामुहिक विवाह&nbsp;</strong></h3>\r\n\r\n  <hr>\r\n  <p style=\"text-align: justify;\"><span style=\"font-size:16px;\">पिछले बार की तरह इस बार भी खंडेलवाल सेवा समिती, परतवाड़ा-अचलपूर&nbsp;- <strong>अखिल भारतीय खंडेलवाल युवक-युवती परिचय सम्मेलन एवं सामुहिक विवाह</strong> का आयोजन करने जा रहा है। गत सम्मेलन मे मिले सभी समाज़ बंधुओ के प्रोत्साहन को देखते हुए इस बार <strong>दिनांक</strong>&nbsp;<strong>11, 12&nbsp;एवं&nbsp;13 फरवरी 2016</strong> को सम्मेलन आयोजित करने का निश्चित हुआ है। अतः सभी समाज़ बंधुओ का खंडेलवाल सेवा समिती, परतवाड़ा-अचलपूर&nbsp;हार्दिक स्वागत करता है।</span><span style=\"font-size:16px;\"></span><span style=\"font-size:16px;\"></span><span style=\"font-size:9px;\"></span><br></p>\r\n\r\n  <br>\r\n  <p style=\"text-align: justify;\"><span style=\"font-size:16px;\">​<strong>स्थान :-</strong><strong>रंगोली लॉंन्स, चिखलदरा रोड, परतवाड़ा,&nbsp;444805 जि. अमरावती (महाराष्ट्र)</strong></span><br></p>\r\n  \r\n</div>\r\n\r\n\r\n<div class=\"well\">\r\n  <h3 style=\"text-align: center;\"><strong>प्रत्याशी रजिस्ट्रेशन फॉर्म&nbsp;</strong></h3>\r\n\r\n  <hr>\r\n\r\n  <div class=\"txt \"><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">1. कृपया प्रत्येक फॉर्म के साथ रु. 1000/- का ड्राफ्ट या मनी ऑर्डर खंडेलवाल सेवा समिती, परतवाड़ा के नाम से कुलदिप संपतकुमारजी खंडेलवाल, वकिल लाईन, परतवाड़ा 444805 जि. अमरावती (महा.) इस पते पर भेजे। </span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">PNB A/c.No. 0501000101209753.&nbsp;अधिक जानकारी के लिये फोन नं. (07223) 220445 या मोबाइल नं. 9028233699, 8149820445 पर संपर्क करे।<br><br>2. युवक की आयु 21 वर्ष एवं युवती की आयु 18 वर्ष से कम ना हो यह विशेष ध्यान दे।&nbsp;</span></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\"></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">3.&nbsp;निचे दिये गए किसी एक&nbsp;लिंक पर क्लिक करके प्रत्याशी रजिस्ट्रेशन फॉर्म&nbsp;डाउनलोड करे। &nbsp;</span><br></p></div>\r\n\r\n  <a href=\"/images/Sammellan-form.pdf\" class=\"btn btn-success\"> क्लिक करे</a>\r\n\r\n\r\n\r\n  \r\n</div>\r\n\r\n\r\n<div class=\"well\">\r\n  <div class=\"txt \"><h3 style=\"text-align: center;\"><strong>विज्ञापन</strong></h3></div>\r\n  <hr>\r\n\r\n  <div class=\"txt \"><caption><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">सम्मेलन मे प्रकाशित होनेवाली स्मरणिका (परिचय पुस्तिका) मे विज्ञापन देकर इस सामाजिक कार्य मे आर्थिक सहयोग प्रदान करे।<br><br>1. विज्ञापन के लिये विज्ञापनदाता को डिझाईन स्वय तयार करके पेनड्राइव / सि.डी. / समिती के ई-मेल आयडी पर भेजना अनिवार्य है।</span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\"><br>2. &nbsp;किसी भी प्रकार की त्रुटी के लिये आयोजन समिती जबाबदार नहीं होगी।</span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\"></span><br></p><p class=\"text-center\"><strong><span style=\"font-size:16px;\" >विज्ञापन दर</span></strong><br></p></caption>\r\n\r\n  <table class=\"table table-bordered\">\r\n  <tr>\r\n  <td style=\"text-align: center;\"><span style=\"font-size:16px;\">कवर पेज नं. 2 मल्टीकलर<br></span></td><td style=\"text-align: center;\"><span style=\"font-size:16px;\">रु. 31000/-<br></span></td></tr><tr><td style=\"text-align: center;\"><span style=\"font-size:16px;\">कवर पेज नं. 3 मल्टीकलर&nbsp;<br></span></td><td style=\"text-align: center;\"><span style=\"font-size:16px;\">रु. 31000/-<br></span></td></tr><tr><td style=\"text-align: center;\"><span style=\"font-size:16px;\">कवर पेज नं. 4 मल्टीकलर<br></span></td><td style=\"text-align: center;\"><span style=\"font-size:16px;\">रु. 41000/-<br></span></td></tr><tr><td style=\"text-align: center;\"><span style=\"font-size:16px;\">फुल पेज मल्टीकलर&nbsp;<br></span></td><td style=\"text-align: center;\"><span style=\"font-size:16px;\">रु. 11000/-<br></span></td></tr><tr><td style=\"text-align: center;\"><span style=\"font-size:16px;\">हाफ पेज मल्टीकलर<br></span></td><td style=\"text-align: center;\"><span style=\"font-size:16px;\">रु. 6100/-<br></span></td></tr><tr><td style=\"text-align: center;\"><span style=\"font-size:16px;\">क्वार्टर पेज कलर&nbsp;<br></span></td><td style=\"text-align: center;\"><span style=\"font-size:16px;\">रु. 3100/-<br></span></td></tr><tr><td style=\"text-align: center;\"><span style=\"font-size:16px;\">शुभेच्छा ब्यानर मल्टीकलर<br></span></td><td style=\"text-align: center;\"><span style=\"font-size:16px;\">रु. 3100/-</span><br></td></tr></table>\r\n\r\n\r\n  <p style=\"text-align: justify;\"><br></p>\r\n\r\n  <table class=\"table table-bordered\"><caption><p style=\"text-align: center;\"><strong><span style=\"font-size:16px;\">संपर्क</span></strong></p></caption><tbody><tr><td><p style=\"text-align: center;\"><span style=\"font-size:16px;\">संपतकुमार तमोलिया<br></span></p><p style=\"text-align: center;\"><span style=\"font-size:16px;\">9028233699</span><br></p></td><td><p style=\"text-align: center;\"><span style=\"font-size:16px;\">रामबाबु भुकमारीया<br></span></p><p style=\"text-align: center;\"><span style=\"font-size:16px;\">9422159324</span><br></p></td><td><p style=\"text-align: center;\"><span style=\"font-size:16px;\"></span><span style=\"font-size:16px;\">कैलाश दुसाद</span><br></p><p style=\"text-align: center;\"><span style=\"font-size:16px;\">9422159516<br></span></p></td></tr></tbody></table></div>\r\n\r\n\r\n\r\n  \r\n</div>\r\n\r\n<div class=\"well\">\r\n<div class=\"txt \"><h3 style=\"text-align: center;\"><strong></strong><strong>आवश्यक सुचना एवं नियम</strong></h3></div>\r\n<hr>\r\n\r\n<div class=\"txt \"><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">1. परिचय सम्मेलन मे शामिल होने हेतु पंजीयन (रजिस्ट्रेशन) कराना अनिवार्य है।</span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\"><br>2. पुस्तिका मे प्रकाशन हेतु 2 नवीनतम रंगीन पासपोर्ट साइज फोटो भेजना अनिवार्य है।<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">3. परिचय पत्र के साथ प्रत्याशी के 2 पासपोर्ट साइज फोटो व शुल्क रु. 1000/- जमा कराना अनिवार्य है। (विधवा, विकलांग नि:शुल्क)<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">4. आयोजन स्थल पर प्रत्याशी के साथ 2 अभिभावक के अलावा पधारे अतिथीयों को प्रवेश शुल्क रु. 700/- अनिवार्य है।<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">5. आयोजन स्थल पर समिती द्वारा चाय, नाश्ता, भोजन की व्यवस्था रहेगी।<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">6. आवास व्यवस्था कॉमन हॉल मे नि:शुल्क रहेगी (उपलब्धता अनुसार) ।<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">7. आवास व्यवस्था स्पेशल रूम मे सशुल्क रहेगी (उपलब्धता अनुसार) ।<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">8. सम्मेलन मे आनेवाले प्रत्येक व्यक्ती को असुविधा से बचने के लिए आयोजन व आवास स्थल पर पहचान पत्र लगाना अनिवार्य रहेगा।<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">9. विधुर / तलाक़शुदा इस सम्मेलन मे हिस्सा ले सकेंगे (तलाक़शुदा का प्रमाणपत्र अनिवार्य है), साथ ही प्रतिज्ञापत्र देना होगा।<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">10. प्रवेश पत्र एवं परिचय पुस्तिका संच प्राप्त करने हेतु सम्मेलन स्थल पर प्रत्याशी शुल्क की रसीद साथ लाना अनिवार्य है।<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">11. प्रवेश पत्र गुम होने पर डुप्लीकेट बनाकर नहीं दिया जायेगा, उन्हे पुनः पंजीयन राशी भरकर ही प्रवेश प्राप्त हो सकेगा।<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">12. आयु एवं शिक्षा संबंधी प्रमाण की झेरॉक्स कॉपी अवश्य भेजे। बिना प्रमाण के शिक्षा डिग्री मंजुर नहीं होगी उसे म्येट्रिक ही समझा जायेगा।<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">13. सम्मेलन स्थल पर आनेवाले परिचय पत्र को प्रकाशित करने के लिए समिती बाध्य नहीं रहेगी।<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">14. पूर्व नियोजीत संबंध के सामुहिक विवाह मे सम्मिलीत करने की सुचना दि. 05/02/2016 तक कार्यालय को मिल जानी चाहिए।<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">15. समय-समय पर समिती व्दारा दी गयी सुचनाओं&nbsp;का पालन करना अनिवार्य होगा।<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">16. समिती व्दारा सामुहिक विवाह का आयोजन किया गया है। सामुहिक विवाह मे सम्मिलीत होने हेतु वर पक्ष से रु. 7100/- और वधु&nbsp;पक्ष से रु. 5100/- विवाह शुल्क रखा गया है। विवाह मे 10 व्यक्ती नि:शुल्क सम्मिलीत हो सकेंगे।<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">17. किसी भी प्रत्याशी के विवरण के बारे मे समिती को प्रत्यक्ष कोई जानकारी नहीं होती है, समिती अभिभावकों व्दारा दिये गए विवरण को ही सत्य मानती है। अतः भावुकता, विवशता, जल्दबाज़ी मे आकर संबंध स्थापित करने के पूर्व दोनों पक्ष एक दुसरे की जानकारी अवश्य प्राप्त कर लेवे। हमारा उद्देश दोनों पक्षों को समीप लाना है, विवाह पश्चात किसी भी पक्ष व्दारा उत्पन्न विवाद के लिए आयोजन समिती न तो उत्तरदायी होगी और न ही उन्हे आरोपीत किया जायेगा।<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">18. परिचय पुस्तिका मे विवरण प्रकाशन मे अधिकतम सावधानियाँ बरती जाती है, परंतु फॉर्म मे अस्पष्टता अथवा अन्य कारण से होने वाली त्रुटियों&nbsp;के लिए समिती जिम्मेदार नहीं होगी। त्रुटियाँ&nbsp;पाये जाने पर सम्मेलन के दौरान आयोजकों के ध्यान मे लाये जिससे उसे उद्घोषणा के व्दारा&nbsp;दुसरो को सुचित करने का प्रयास किया जायेगा।<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">19. सुरक्षा तथा सुविधा की दृष्टि से कृपया अपने साथ बहुमूल्य आभूषण आदि ना&nbsp;लावे। आपके वस्तुओं की सुरक्षा की जबाबदारी आपकी होगी।<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">20. युवक – युवती परिचय आयोजकों व्दारा&nbsp;मंच पर कराया जायेगा। युवक और युवती को मंच पर आना अनिवार्य रहेगा।<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">21. परिचय पत्र पहुचने की अंतिम तिथी दि. 20 जनवरी 2016 है, इस समय तक प्राप्त परिचय पत्र ही पुस्तिका मे प्रकाशित किये जा सकेंगे। समय पर आनेवाले फॉर्म स्विकार करना न करना समिती पर निर्भर रहेगा।<br></span><br></p><p style=\"text-align: justify;\"><span style=\"font-size:16px;\">22. परिचय पत्र को भरने के बाद मे एक प्रती झेरॉक्स अपने पास रखें।&nbsp;</span></p></div>\r\n  \r\n</div>\r\n\r\n\r\n";
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
  


  return "\r\n<div class=\"row\">\r\n<div class=\"col-sm-2\">\r\n	<img src=\"/images/vlogo.jpg\" class=\"img-responsive\">\r\n	\r\n</div>\r\n  <div class=\"col-sm-10\">\r\n    <h1 style=\"text-align: center;\">खंडेलवाल सेवा समिती, परतवाड़ा-अचलपूर</h1>\r\n<h3 style=\"text-align: center;\">व्दितीय अखिल भारतीय खंडेलवाल युवक-युवती परिचय सम्मेलन एवं सामुहिक विवाह</h3>\r\n<h3 style=\"text-align: center;\">दिनांक 11, 12 एवं 13 फरवरी  2016 </h3>\r\n<h3 style=\"text-align: center;\">स्थान :- रंगोली लॉंन्स, चिखलदरा रोड, परतवाड़ा</h3>\r\n    \r\n  </div>\r\n  \r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-9\">\r\n\r\n<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <!-- Indicators -->\r\n  <ol class=\"carousel-indicators\">\r\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\r\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\r\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\r\n  </ol>\r\n\r\n  <!-- Wrapper for slides -->\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n   <div class=\"item active\">\r\n              <img src=\"/images/img1.jpg\" class=\"img-responsive\" style=\"border: 1px solid #000;\">\r\n            </div>\r\n            <div class=\"item\">\r\n              <img src=\"/images/img2.jpg\" class=\"img-responsive\" style=\"border: 1px solid #000;\">\r\n            </div>\r\n            <div class=\"item\">\r\n              <img src=\"/images/img3.jpg\" class=\"img-responsive\" style=\"border: 1px solid #000;\">\r\n            </div>\r\n            <div class=\"item\">\r\n              <img src=\"/images/img4.jpg\" class=\"img-responsive\" style=\"border: 1px solid #000;\">\r\n            </div> \r\n            <div class=\"item\">\r\n              <img src=\"/images/img5.jpg\" class=\"img-responsive\" style=\"border: 1px solid #000;\">\r\n            </div>\r\n            <div class=\"item\">\r\n              <img src=\"/images/img6.jpg\" class=\"img-responsive\" style=\"border: 1px solid #000;\">\r\n            </div>\r\n            <div class=\"item\">\r\n              <img src=\"/images/img7.jpg\" class=\"img-responsive\" style=\"border: 1px solid #000;\">\r\n            </div>\r\n            <div class=\"item\">\r\n              <img src=\"/images/img8.jpg\" class=\"img-responsive\" style=\"border: 1px solid #000;\">\r\n            </div>\r\n            <div class=\"item\">\r\n              <img src=\"/images/img9.jpg\" class=\"img-responsive\" style=\"border: 1px solid #000;\">\r\n            </div>\r\n            <div class=\"item\">\r\n              <img src=\"/images/img10.jpg\" class=\"img-responsive\" style=\"border: 1px solid #000;\">\r\n            </div>\r\n            <div class=\"item\">\r\n              <img src=\"/images/img11.jpg\" class=\"img-responsive\" style=\"border: 1px solid #000;\">\r\n            </div>\r\n  </div>\r\n\r\n  <!-- Controls -->\r\n  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n\r\n    \r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n  	<img src=\"/images/kalash.gif\" style=\"margin: auto;display: block;\">\r\n  	<h3 style=\"text-align: center;\">सम्मेलन 2016</h3>\r\n  	<h5 style=\"text-align: center;\">सम्मेलन के बारे मे जानकारी एवं प्रत्याशी रजिस्ट्रेशन फॉर्म डाउनलोड करने हेतू यहा क्लिक करे। </h5>\r\n  	<a href=\"/sammelan\" class=\"btn btn-success\" style=\"text-align: center;display: block;margin-right: 0px;\">क्लिक करे</a>\r\n  	\r\n  	<hr>\r\n\r\n  	<img style=\"margin: auto;display: block;\" src=\"/images/contact.png\">\r\n  	<h3 style=\"text-align: center;\">संपर्क </h3>\r\n  	<h5 style=\"text-align: center;\">सम्मेलन के बारे मे किसी भी तरह की अन्य जानकारी अथवा समस्या निवारण हेतू संपर्क करने के लिए यहा क्लिक करे।  </h5>\r\n  	<a href=\"/contact\" class=\"btn btn-success\" style=\"text-align: center;display: block;margin-right: 0px;\">क्लिक करे</a>\r\n\r\n  </div>\r\n  \r\n</div>\r\n";
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