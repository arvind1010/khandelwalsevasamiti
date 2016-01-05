var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'details_list_layout',
  postRender: function() {
    this.$('.carousel').carousel();
  }
});
module.exports.id = 'article/list-details';
