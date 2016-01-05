var Base = require('./base')
	, _ = require('underscore');

module.exports = Base.extend({
  initialize: function() {
    _.bindAll(this, 'url', 'parse');
  },
  url: function() {
    return '/optportal/services/webstore.json?login=' + this.app.get('user').login;
  },
  parse: function(data) {
    var user = data.user
      , product = data.product
      , entitlement = data.entitlement
      , retailer_ret_ecom_prod_url = data.retailer_ret_ecom_prod_url
      , finalUrl;
    
    if (user.ret_integration === 'iframe') {
      if (product.retailPrice && entitlement.extWebStore && entitlement.extPriceDisplay && retailer_ret_ecom_prod_url && retailer_ret_ecom_prod_url != '') {
        if (retailer_ret_ecom_prod_url.indexOf('#') !== -1) {
          var urlPieces = retailer_ret_ecom_prod_url.split('#');
          finalUrl = urlPieces[0] + '&__opt__#' + urlPieces[1];
        }
        else if (retailer_ret_ecom_prod_url.indexOf('?') !== -1) {
          finalUrl = retailer_ret_ecom_prod_url + '&__opt__';
        }
        else if (retailer_ret_ecom_prod_url.indexOf('?') === -1) {
          finalUrl = retailer_ret_ecom_prod_url + '?__opt__';
        }
      }
    }

    else if (user.ret_integration === 'get') {
      if (product.retailPrice && product.ecom === 'Sale' && entitlement.extWebStore && entitlement.extPriceDisplay && retailer_ret_ecom_prod_url && retailer_ret_ecom_prod_url != '') {
        if (retailer_ret_ecom_prod_url.indexOf('#') !== -1) {
          var urlPieces = retailer_ret_ecom_prod_url.split('#');
          finalUrl = urlPieces[0] + '&__opt_get__#' + urlPieces[1];
        }
        else if (retailer_ret_ecom_prod_url.indexOf('?') !== -1) {
          finalUrl = retailer_ret_ecom_prod_url + '&__opt_get__';
        }
        else if (retailer_ret_ecom_prod_url.indexOf('?') === -1) {
          finalUrl = retailer_ret_ecom_prod_url + '?__opt_get__';
        }
      }
    } 

    else if (user.ret_integration === 'parent_window') {
      _.extend(data, { parentWindow: true });
      if (product.retailPrice && product.ecom=='Sale' && entitlement.extWebStore && entitlement.extPriceDisplay && retailer_ret_ecom_prod_url && retailer_ret_ecom_prod_url != '') {
        if (retailer_ret_ecom_prod_url.indexOf('#') !== -1) {
          var urlPieces = retailer_ret_ecom_prod_url.split('#');
          finalUrl = urlPieces[0] + '&__opt__#' + urlPieces[1];
        }
        else if (retailer_ret_ecom_prod_url.indexOf('?') !== -1) {
          finalUrl = retailer_ret_ecom_prod_url + '&__opt__';
        }
        else if (retailer_ret_ecom_prod_url.indexOf('?') === -1) {
          finalUrl = retailer_ret_ecom_prod_url + '?__opt__';
        }
      }
    }

    /*
    else {
      if (data.cartUrl) {
        if (product.retailPrice && product.ecom=='Sale' && entitlement.extWebStore && entitlement.extPriceDisplay) {
          finalUrl = "Temp"
        }
      }
    }
    */
    _.extend(data, { finalUrl: finalUrl });
    return data;
  }
});
module.exports.id = 'Webstore';