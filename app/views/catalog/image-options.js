var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'image_options_view',
  postRender: function() {
    this.$('.carousel-inner img').one('error', function() { this.remove() });
  }
 });
module.exports.id = 'catalog/image-options';
