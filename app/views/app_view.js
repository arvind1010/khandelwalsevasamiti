var BaseAppView = require('rendr/client/app_view');

module.exports = BaseAppView.extend({
  postInitialize: function() {
    this.app.on('change:loading', function(app, loading) {
      $('body').toggleClass('loading', loading);
    });

    this.app.on('change:title', function(app, title) {
      document.title = title + '';
    });
  }
});
