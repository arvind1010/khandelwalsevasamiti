var Base = require('./base')
  , _ = require('underscore');

 module.exports = Base.extend({

  initialize: function() {
    _.bindAll(this, 'parse', 'url');
  },

  url: function() {
    var params = {
      login : this.app.get('user').login,
      purpose : 'browsing',
      company : this.app.get('user').companyId,
      menuId : this.params.menu,
      ssect : this.params.section,
      sect : this.params.section
    };
    return '/optportal/services/articles.json?' + this.makeQueryString(_.extend({}, params));
  },

  parse: function(data) {
    var data = data.hashMap
      , layout = {};

    switch(this.params.section) {
      case '395':
        layout = { row : 1, column : 1, type : 'article/list-details' };
        break;
      case '644':
        layout = { row : 1, column : 4, type : 'article/list-image' };
        break;
      default:
        console.log('Default layout');
    };

    var slides = []
      , articlesPerSlide = []
      , rows = [];
    _.each(data.titles, function(value, index) {
      value['image'] = '/' + value.company.id + '/regular/' + (value.illustrations.length ? value.illustrations[0].fileName : 'notavailable.jpg');
      articlesPerSlide.push(value);
      if ((index !== 0 && (index+1)%layout.column === 0) || (data.titles.length-1 === index)) { 
        rows.push(articlesPerSlide); 
        articlesPerSlide = []; 
        if (rows.length === layout.row) {
          slides.push(rows);
          rows = [];
        }
      }
    });
    this.meta = {
      slides: slides,
      bootstrapColumn: 12 / layout.column,
      layout: layout
    };
    return data.titles;
  },

  makeQueryString: function(params) {
    return _.map(params, function (value, key) {
      return key + '=' + value;
    }).join('&');
  }
});
module.exports.id = 'Articles';