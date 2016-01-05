var BaseView = require('../base')
	, _ = require('underscore');

module.exports = BaseView.extend({
  className: 'product_view',
  events: {
  	'click #img-options-carousel img': 'loadMainImage'
  },
  initialize: function() {
  	_.bindAll(this, 'loadMainImage');
  },
  postRender: function() {
    $('.prod-img > .hover-zoom > img').one('error', function() { this.src = $(this).data('errorsrc'); });
  	$('.prod-img > .hover-zoom > img').load(_.bind(function () {
  		this.$('.img-loader').hide();
  	}, this));
    this.$('.display-info').tooltip({html: true, placement: 'right'});
    this.$('.hover-zoom').zoom();
  },
  loadMainImage: function(event) {
  	this.$('.img-loader').show();
  	$('.prod-img > .hover-zoom > img').attr('src', '').attr('src', $(event.target).data('largesrc'));
    $('.prod-img .zoom-img').attr('src', $(event.target).data('largesrc'));
  }
});
module.exports.id = 'catalog/show';
