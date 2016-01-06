module.exports = {
  index: function(params, callback) {
    this.app.set('title', 'Contact');
    this.app.fetch(null, callback);
  },
  show: function(params, callback) {
		this.app.set('title', 'Sammelan 2016');
		this.app.fetch(null, function(err, result) {
      if (err) return callback(err);
      callback(err, result);
    });
	}
};
