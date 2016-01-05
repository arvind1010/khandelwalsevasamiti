var BaseView = require('../base')
	, _ = require('underscore');

module.exports = BaseView.extend ({
  className: 'product_grouping_view',
  events: {
    'change .grouping': 'loadGrouping'
  },
  initialize: function() {
  	_.bindAll(this, 'loadGrouping', 'changeProduct');
  },
  loadGrouping: function(event) {
    var $target = $(event.target)
      , targetVal = $target.val()
      , _this = this;
    _.each(this.$('.grouping').not($target), function(select) {
      var currProp = _this.model.get('propertyFilterMap')[$target.attr('id')][targetVal][$(select).attr('id')];
      _.each($(select).find('option'), function(option) {
        $(option).prop('disabled', currProp.indexOf($(option).val()) === -1);
      });
    }); 
    if (!(this.$('.grouping option:selected[value="0"]').length)) this.changeProduct();
  },

  changeProduct: function() {
  	var fields = this.$('.grouping')
    	, propParams = _.map(fields, function(field) {
      		return {
            name: field.getAttribute('data-param'),
            value: field.value
          };
        })
    	, url = '/api/-/optportal/services/groupresultid.json'
    	,	params = {
    		appType: 1,
    		product: this.model.id,
    		comp: this.app.get('user').companyId,
    		login: this.app.get('user').login,
    		propvalues: this.serialize(propParams)
    	};
    	$.get(url, params, function(data) {	window.location.href = '/product/' + data.hashMap.productId; });	
  },

  serialize: function(params) {
  	var pieces = [];
		_.each(params, function(param) {
      pieces.push(
        param.name.replace(/\s/g, '__') + 
        '@@' + 
        param.value.replace(/\s/g, '__')
      );
    });
		return pieces.join(';;');
	}
});
module.exports.id = 'catalog/product-grouping';
