/**
 * We inject the Handlebars instance, because this module doesn't know where
 * the actual Handlebars instance will come from.
 */
module.exports = function(Handlebars) {
	var helpers = {};

	helpers.copyright = function(year) {
    return new Handlebars.SafeString('&copy;' + year);
  };

  helpers.when = function(operand_1, operator, operand_2, options) {
  	var operators = {
	    		'eq': function(l,r) { return l == r; },
	    		'gt': function(l,r) { return l > r; },
	    		'or': function(l,r) { return l || r; }
	  		}
	  	,	result = operators[operator](operand_1,operand_2);

	  if (result) return options.fn(this);
	  else	return options.inverse(this);
  };

  helpers.log = function(context) {
  	return console.log(context);
	};

	helpers.sanitize = function(str) {
  	return str.replace(/\W/g, '');
	};

  return helpers;
};
