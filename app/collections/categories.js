var Base = require('./base')
  , _ = require('underscore');

module.exports = Base.extend({

  initialize: function() {
    _.bindAll(this, 'parse');
  },

  url: function() {
    var params = {
      login : this.app.get('user').login,
      company : this.app.get('user').companyId
    };
    if (this.params.collection_id) _.extend(params, {collection_id: this.params.collection_id});
    return '/optportal/services/getBrowseBy.json?' + this.makeQueryString(_.extend({}, params));
  },

  parse: function(data) {
    if (this.params.collection_id) this.meta = {collectionId: this.params.collection_id}
    return data.hashMap.category;
  },

  makeQueryString: function(params) {
    return _.map(params, function (value, key) {
      return key + '=' + value;
    }).join('&');
  }
});
module.exports.id = 'Categories';