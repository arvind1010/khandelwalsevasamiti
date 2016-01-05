var Base = require('./base')
	, _ = require('underscore');

module.exports = Base.extend({
  initialize: function () {
    _.bindAll(this, 'parse', 'parseGroupings');
  },

  url: function() {
    var defaults = {
      login : this.app.get('user').login,
      comp : this.app.get('user').companyId,
      catalog_type : 'standard',
      catalog_version : 3,
      appType : 1
    };
    return '/optportal/services/newproduct.json?product=:id&' + this.makeQueryString(_.extend({}, defaults));
  }, 

  idAttribute: 'id',
  
  parse: function(data) {
    var data = data.hashMap;
    if (!('product' in data)) return {notExist: true};
    var imageSlides = []
      , imagesPerSlide = []
      , relatedProdTabs = []
      , imageOptions = data.product.images.split(';')
      , _this = this;
    _.each(imageOptions, function(image, index) {
      imagesPerSlide.push(image);  
      if ((index !== 0 && (index+1)%3 === 0) || (imageOptions.length-1 === index)) { imageSlides.push(imagesPerSlide); imagesPerSlide = []; }
    });

    if (data.associateProduct && data.associateProduct.length >= 1) relatedProdTabs.push({title: data.product.compInfo.associatedProdText || 'Associate Products', prods: data.associateProduct});
    if (data.MatchedProduct && data.MatchedProduct.length >= 1) relatedProdTabs.push({title: data.product.compInfo.matchingProdText || 'Matching Products', prods: data.MatchedProduct});
    if (data.similarProducts && data.similarProducts.length >= 1) relatedProdTabs.push({title: data.product.compInfo.similar_items_collection_text || 'Similar Products', prods: data.similarProducts});
    if (relatedProdTabs.length) {
      _.each(relatedProdTabs, function(tab, index) {
        tab.slides = [];
        var prodPerSlide = [];
        _.each(tab.prods, function(prod, index) {
          prodPerSlide.push(prod);  
          if ((index !== 0 && (index+1)%3 === 0) || (tab.prods.length-1 === index)) { 
            tab.slides.push(prodPerSlide); prodPerSlide = []; 
          }
        });
      })
    }

    // Customize Variations
    var variationParentId = data.product.variations_parent_id;
    data.product.hasVariations = (variationParentId != 0) || data.product.hasVariations;
    data.product.variationId = (variationParentId != 0) ? variationParentId : data.product.id;
    // Customize Variations End
    
  	_.extend(data.product, {
  		'detailsList': data.detailsList,
      'imageSlides': imageSlides,
      'relatedProdTabs': relatedProdTabs,
      'propertyFilterMap' : _this.parsePropFilterMap(data.propertyFilterMap)
  	});
    if (data.detailsList.length) {
      data.product.groupings = this.parseGroupings(data);
    }
  	return data.product;
  },

  parseGroupings: function(data) {
    var groupings = []
      , valuesMap = data.propertyTypeAllValuesMap
      , detailsList;

    detailsList = _.where(data.detailsList, { 
      fieldType: 'SELECT' 
    });

    _.each(detailsList, function(property) {
      if (!valuesMap[property.type_value]) return false;
      if (valuesMap[property.type_value].length >= 2) {
        groupings.push(_.extend(property, {
          values: _.map(valuesMap[property.type_value], function(value) {
            return {
              value: value,
              selected: value === property.value ? true : false
            };
          })
        }));
      }
    });
    return groupings;
  },

  parsePropFilterMap: function(data) {
    var customizedPropFilterMap = {};
    _.each (data, function(valMap, key) {
      var innerProp = {};
      _.each (valMap, function(propMap, key) {
        var innerMostMap = {};
        _.each (propMap, function(innerValMap, key) {
          innerMostMap[key.replace(/\W/g, '')] = innerValMap;
        });
        innerProp[key] = innerMostMap;
      });
      customizedPropFilterMap[key.replace(/\W/g, '')] = innerProp;
    });
    return customizedPropFilterMap;
  },

  makeQueryString: function(params) {
    return _.map(params, function (value, key) {
      return key + '=' + value;
    }).join('&');
  }
});
module.exports.id = 'Product';