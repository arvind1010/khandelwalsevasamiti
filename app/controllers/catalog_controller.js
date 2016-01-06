module.exports = {
  index: function(params, callback) {
    this.app.set('title', 'Catalog');
    this.app.fetch(null, callback);
  },
  show: function(params, callback) {
		this.app.set('title', 'Product');
		this.app.fetch(null, function(err, result) {
      if (err) return callback(err);
      callback(err, result);
    });
	}
};
