var BaseView = require('../base')
	, _ = require('underscore');

module.exports = BaseView.extend({
  className: 'image_list_layout',
  postRender: function() {
    this.$('img').unveil();
    $('#article-carousel').on('slid.bs.carousel', _.bind(function() {
  		this.$('img').unveil();
		}, this));
  }
 });
module.exports.id = 'article/list-image';
