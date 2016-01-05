module.exports = {
  index: function(params, callback) {
    this.app.set('title', 'Catalog');
    this.app.fetch({collection: {collection: 'Products', params: params}}, callback);
  },
  show: function(params, callback) {
		this.app.set('title', 'Product');
		this.app.fetch({model: {model: 'Product', params: params}}, function(err, result) {
      if (err) return callback(err);
      callback(err, result);
    });
	}
};
