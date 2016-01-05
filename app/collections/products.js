var Base = require('./base')
  , _ = require('underscore');

module.exports = Base.extend({

  initialize: function() {
    _.bindAll(this, 'parse', 'parseBreadCrumb');
  },

  url: function() {
    var params = {
      login : this.app.get('user').login,
      company : this.app.get('user').companyId,
      category_ids : this.params.category || '',
      cat_id : this.params.category || ''
    };
    if (this.params.coll_subcat) params['collection_id_' + this.params.coll_subcat.split('_')[0]] = this.params.coll_subcat.split('_')[1];
    return '/optportal/services/brand/items.json?page=:page&' + this.makeQueryString(_.extend({}, params, this.app.get('catalog')));
  },

  parse: function(data) {
    var data = data.hashMap
      , _this = this;
    if (!('products' in data)) return [];
    _.each(data.products, function(value) {
      _.extend(value, {
        'properties': value.properties2.details,
        'styleNumber': value.style_hash,
        'retailPrice': value.price
      });
    });
    this.meta = {
      totalProducts : data.totalProductCount,
      startProduct : data.startProductCount,
      endProduct : data.endProductCount,
      currQueryString : this.app.req && this.app.req.url.split('?')[1] ? ('?' + this.app.req.url.split('?')[1]) : (this.app.router && this.app.router.currentFragment.split('?')[1] ? ('?' + this.app.router.currentFragment.split('?')[1]) : ''),
      breadCrumbData : {
        type: Object.keys(data.breadCrumbData)[0], 
        data: this.parseBreadCrumb(data.breadCrumbData, [])
      },
      pages : (function make() {
        var list = []
          , current = Math.floor(data.startProductCount/_this.app.get('catalog').prodPerPage) + 1
          , start = current < 3 ? 1 : (current - 2)
          , end = current < Math.ceil(data.totalProductCount/_this.app.get('catalog').prodPerPage) - 2 ? current + 2 : Math.ceil(data.totalProductCount/_this.app.get('catalog').prodPerPage);
        if (current > 1) list.push({text: '&laquo;', num: current-1});
        for (var i = start; i <= end; i++) list.push({num: i, active: i === current ? true : false});
        if (current < end) list.push({text: '&raquo;', num: current+1});
        return list;
      })()
    };
    return data.products;
  },

  parseBreadCrumb: function (obj, existingObj) { 
    var k, _this = this;
    if (obj instanceof Object) {
      for (k in obj){
        if (obj.hasOwnProperty(k) && obj[k] instanceof Object){
          existingObj.push({name:obj[k].name, id:obj[k].id});
          _this.parseBreadCrumb(obj[k], existingObj);
        }                
      }
    } 
    return existingObj;
  },

  makeQueryString: function(params) {
    return _.map(params, function (value, key) {
      return key + '=' + value;
    }).join('&');
  }
});
module.exports.id = 'Products';