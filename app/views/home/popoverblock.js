var BaseView = require('../base')
	, _ = require('underscore');

module.exports = BaseView.extend({
	events: {
		'click .close-btn': 'closePopover'
	},
  className: 'popoverblock_view',
  initialize: function() {
  	_.bindAll(this, 'closePopover');
  },
  postRender: function() {
    this.$('#popover').popover({ 
	    html : true,
	    title: function() {
	      return $("#popover-head").html();
	    },
	    content: function() {
	      return $("#popover-content").html();
	    }
		});
  },
  closePopover: function() {
  	this.$('#popover').popover('hide');
  }
});
module.exports.id = 'home/popoverblock';
