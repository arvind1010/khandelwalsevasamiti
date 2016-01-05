var Base = require('./base')
	, _ = require('underscore');

module.exports = Base.extend({
  initialize: function() {
    _.bindAll(this, 'url', 'parse');
  },
  url: function() {
    return '/optportal/services/articles.json?menuId=46&ssect=46&sect=46&purpose=POS&login=' + this.app.get('user').login + '&company=' + this.app.get('user').companyId;
  },
  parse: function(data) {
    return data.hashMap.article;
  }
});
module.exports.id = 'Home';