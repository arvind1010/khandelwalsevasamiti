module.exports = {
  index: function(params, callback) {
    this.app.set('title', 'Home');
		this.app.fetch(null, function(err, result) {
      if (err) return callback(err);
      callback(err, result);
    });
  },
};
