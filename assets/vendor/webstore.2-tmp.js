// 
;(function() {

  jQuery.deparam = function (value) {
    var params = {}, pieces = value.split('&'), pair, i, l;
    for (i = 0, l = pieces.length; i < l; i++) {
      pair = pieces[i].split('=', 2);
      params[decodeURIComponent(pair[0])] = (pair.length == 2 ? decodeURIComponent(pair[1].replace(/\+/g, ' ')) : true);
    }
    return params;
  };
  
  var 
  
  colorboxScriptPath = 'colorbox.min.js', // absolute path to colorbox script
  colorboxStylesPath = 'colorbox.css'; // absolute path to colorbox stylesheet
  
  __bind = function(fn, me) { 
    return function() { 
      return fn.apply(me, arguments); 
    }; 
  };

  window.ABC_ = (function() {

    function ABC_() {
      var link;
      this.continueShopping = __bind(this.continueShopping, this);
      this.addToBag = __bind(this.addToBag, this);
      if (navigator.appVersion.indexOf("MSIE 7.") > 0) {
        $('.add_to_bag').attr('target', '_blank');
        return false;
      }
      $(document.body).delegate('.add_to_bag', 'click', this.addToBag);
      $(document.body).delegate('#_continue-shopping', 'click', this.continueShopping);
      link = $('<link>');
      link.attr({
        type: 'text/css',
        rel: 'stylesheet',
        href: colorboxStylesPath
      });
      $('head').append(link); 
    }

    ABC_.prototype.addToBag = function(event) {
      this.showPopup(event.currentTarget.href + '&opt_abc_url=' + window.location.hostname);
      /*
      if (!jQuery.colorbox) {
        $.getScript(colorboxScriptPath, this.showPopup);
      } else {
        this.showPopup(event.currentTarget.href + '&opt_abc_url=' + window.location.hostname);
      }
      */
      return false;
    };

    ABC_.prototype.continueShopping = function(event) {
      $.colorbox.close();
      return false;
    };

    ABC_.prototype.showPopup = function(href) {
      var $iframe, $modal;
      $iframe = $('<iframe />');
	    $iframe.attr('src', href).width(850).height(400);
      
      this.$modal = $([
        '<div class="modal fade" id="_added-to-external-cart" tabindex="-1" role="dialog" aria-hidden="true">',
          '<div class="modal-dialog modal-lg">',
            '<div class="modal-content">',
              '<div class="modal-header">',
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title" id="myModalLabel">&nbsp;</h4>',
              '</div>',
              '<div class="modal-body"></div>',
            '</div>',
          '</div>',
        '</div>'].join(''));
      /*
      this.$modal = $([
        '<div id="_added-to-external-cart" style="width: 300px; height: 150px; text-align: center;">', 
          '<h2 class="__cart-message" style="font-size: 18px; margin: 20px 0 10px;">Adding item to cart...</h2>',
          '<p id="_preloader" style="margin: 0 0 10px; text-align: center"><img src="http://cdn-abc-staging.optabc.com/images/preloader.gif" />"</p>', 
          '<a class="__button" id="_continue-shopping" style="display: none; padding: 4px 8px; margin: 0 4px; background: #000; color: #fff;" href="#">Continue Shopping</a>', 
          '<a class="__button" id="_checkout" href="#" style="display: none; padding: 4px 8px; margin: 0 4px; background: #000; color: #fff;">Checkout</a>', 
          '<p style="font-size: 10px; padding: 13px 13px 0 13px;"><strong>Important Note:</strong> If you don\'t see a success message within the next 10 seconds, please make sure your cookies are enabled and try again. </p>',
        '</div>'
      ].join(''));
      */
      
      /* Need to ASK Mike about this
      if (externalBasketShowCheckout === 'false') {
        this.$modal.find('#_checkout').remove();
      }
      if (externalBasketShowCheckout === 'true' && externalBasketUrl !== '') {
        this.$modal.find('#_checkout').get(0).href=externalBasketUrl;
      }
      */
      this.$modal.find('.modal-body').append($iframe);
      /* Need to ASK to Mike about this
      return this.colorbox = $.colorbox({
        html: this.$modal,
        onComplete: function() {
          if (request_type === 'get') {
            setTimeout(function() {
              onMessageRecieved({ data: 'cart:loaded' });
            }, 3000);
          }
        }
      });
      */
      this.$modal.modal('show');
    };
    
    function onMessageRecieved(event) {
      if (event.data === 'cart:loaded') {
        $('h2.__cart-message').text('This item has been successfully added to your cart.');
        $('.__button').fadeIn();
        $('#_preloader').hide();
      }
      if (event.data === 'parent:url') {
      }
    }
    
    $(function() {
      
      var abc = new ABC_();

      if (window.addEventListener) {
        window.addEventListener('message', onMessageRecieved);
      } else {
         window.attachEvent('onmessage', onMessageRecieved);
      }
      
    });

    return ABC_;

  })();

}).call(this);
