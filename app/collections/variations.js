var Base = require('./base')
  , _ = require('underscore');

module.exports = Base.extend({

  initialize: function(options) {
    _.bindAll(this, 'parse');
  },

  url: function() {
    var params = {
      login : this.app.get('user').login
    };
    return '/optportal/services/getvariation.json?' + this.makeQueryString(_.extend({}, params));
  },

  parse: function(data) {
    data = data.hashMap;
    var slides = []
      , prodsPerSlide = []
      , relatedProdTabs = [];
    _.each(data.products, function(value, index) {
      prodsPerSlide.push(value);  
      if ((index !== 0 && (index+1)%3 === 0) || (data.products.length-1 === index)) { slides.push(prodsPerSlide); prodsPerSlide = []; }
    });
    this.meta = {
      slides: slides
    };
    return data.products;
  },

  makeQueryString: function(params) {
    return _.map(params, function (value, key) {
      return key + '=' + value;
    }).join('&');
  }
});
module.exports.id = 'Variations';