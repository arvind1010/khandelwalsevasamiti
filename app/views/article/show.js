var BaseView = require('../base')
	, _ = require('underscore');

module.exports = BaseView.extend({
  className: 'article_view',
  events: {
  	'click #article-img-options-carousel img': 'loadMainImage'
  },
  initialize: function() {
  	_.bindAll(this, 'loadMainImage');
  },
  postRender: function() {
    $('.article-img > img').load(_.bind(function () {
  		this.$('.img-loader').hide();
  	}, this));
  },
  loadMainImage: function(event) {
  	this.$('.img-loader').show();
  	$('.article-img > img').attr('src', '').attr('src', $(event.target).data('regsrc'));
    $('.article-img .zoom-img').attr('src', $(event.target).data('largesrc'));
  }
});
module.exports.id = 'article/show';
