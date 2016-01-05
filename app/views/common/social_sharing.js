
/**
 * 
 */

var _ = require('underscore')
  , BaseView = require('../../views/base');

/**
 * 
 */

module.exports = BaseView.extend({

  className: 'social-sharing-view',

  events: {
    'click .share-facebook': 'facebook',
    'click .share-twitter': 'twitter',
    'click .share-pinterest': 'pinterest'
  },

  initialize: function() {

  },

  getTemplateData: function() {
    var data = BaseView.prototype.getTemplateData.call(this)
      , images = this.model ? this.model.get('images') : false
      , fragment;

    if (IS_SERVER) fragment = this.app.req.url;
    else fragment = '/' + this.app.router.currentFragment;

    data.shareUrl = encodeURIComponent('http://' + this.app.attributes.hostname + fragment);

    if (images && images.length) data.image = images[0];

    if (this.options.message) data.options.message;

    return data;

  },

  facebook: function() {
    var url = $(event.target).attr('href');
    this.showPopup(url, 'share-twitter');
    return false;
  },

  twitter: function() {
    var url = $(event.target).attr('href');
    this.showPopup(url, 'share-twitter');
    return false;
  },

  pinterest: function() {
    var url = $(event.target).attr('href');
    this.showPopup(url, 'share-pinterest');
    return false;
  },

  showPopup: function(url, name) {
    window.open(url, name, 'width=600,height=300'); 
    return false;
  }

});

module.exports.id = 'common/social_sharing';