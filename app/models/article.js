var Base = require('./base')
	, _ = require('underscore');

module.exports = Base.extend({
  initialize: function() {
    _.bindAll(this, 'url', 'parse');
  },
  url: function() {
    return '/optportal/services/article.json?articleId=:id&login=' + this.app.get('user').login;
  },
  parse: function(data) {
    var data = data.hashMap.article
      , imageSlides = []
      , imagesPerSlide = []
      , imageOptions = data.illustrations
      , relatedProdTabs = [];

    _.each(imageOptions, function(image, index) {
      imagesPerSlide.push(image.fileName);  
      if ((index !== 0 && (index+1)%3 === 0) || (imageOptions.length-1 === index)) { imageSlides.push(imagesPerSlide); imagesPerSlide = []; }
    });

    if (data.assciateProducts && data.assciateProducts.length >= 1) relatedProdTabs.push({title: 'Associate Products', prods: data.assciateProducts});
    if (data.MatchedProduct && data.MatchedProduct.length >= 1) relatedProdTabs.push({title: 'Matching Products', prods: data.MatchedProduct});
    if (data.similarProducts && data.similarProducts.length >= 1) relatedProdTabs.push({title: 'Similar Products', prods: data.similarProducts});
    if (relatedProdTabs.length) {
      _.each(relatedProdTabs, function(tab, index) {
        tab.slides = [];
        var prodPerSlide = [];
        _.each(tab.prods, function(prod, index) {
          prod['image'] = prod.images.split(';').length ? prod.images.split(';')[0] : '';
          prodPerSlide.push(prod);  
          if ((index !== 0 && (index+1)%3 === 0) || (tab.prods.length-1 === index)) { 
            tab.slides.push(prodPerSlide); prodPerSlide = []; 
          }
        });
      })
    }
    _.extend(data, {
      'image': data.illustrations && data.illustrations.length ? data.illustrations[0].fileName : '',
      'imageSlides': imageSlides,
      'relatedProdTabs': relatedProdTabs
    });
    return data;
  }
});

module.exports.id = 'Article';