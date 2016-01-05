module.exports = {
  index: function(params, callback) {
    this.app.set('title', 'Article');
    this.app.fetch({collection: {collection: 'Articles', params: params}}, callback);
  },
  show: function(params, callback) {
    this.app.set('title', 'Article');
    this.app.fetch({model: {model: 'Article', params: params}}, function(err, result) {
      if (err) return callback(err);
      callback(err, result);
    });
  }
};
