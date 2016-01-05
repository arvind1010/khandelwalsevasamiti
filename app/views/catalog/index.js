var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'catalog_index_view',
  postRender: function() {
  	this.$('.product-list img').one('error', function() { 
      this.src = $(this).data('errorsrc'); 
    });
  }
});
module.exports.id = 'catalog/index';
