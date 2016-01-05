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
    return '/optportal/services/getBrowseBy.json?' + this.makeQueryString(_.extend({}, params));
  },

  parse: function(data) {
    return data.hashMap.collection;
  },

  makeQueryString: function(params) {
    return _.map(params, function (value, key) {
      return key + '=' + value;
    }).join('&');
  }
});
module.exports.id = 'Collections';