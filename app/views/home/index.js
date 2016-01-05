var BaseView = require('../base')
	, _ = require('underscore');

module.exports = BaseView.extend({
	initialize: function() {
		_.bindAll(this, 'postRender');
	},
	postRender: function() {
    this.$('.carousel').carousel();
  },
  className: 'home_index_view'
});
module.exports.id = 'home/index';
