/**
 * Navigation Script
 *
 * @package matrix theme
 */

 (function( $ ) {

  product             = $( '.product' );
  productCard         = product.find( '.type-product' );
  productTitle        = product.find( '.product_title' );
  addToCartBtn        = product.find( 'button' );
  cartOrderForm       = product.find( '.cart' );
  skuNum              = product.find( '.product_meta' );
  cateType            = product.find( '.posted_in' );
  anchorTabLink       = product.find( '.tabs.wc-tabs>li>a' );

  $().ready(function() {
    productCard.addClass( 'woocommerce' );
    addToCartBtn.addClass( 'is-style-action-btn' );
    cateType.text(function(i,text){
      text = text.replace('Category: ','');
      text = text.replace('Categories: ','');
      return text;
    });
    cartOrderForm.before(skuNum);
    productTitle.before(cateType);

    // Jump to anchor tabs in single product page
    anchorTabLink.on('click', function(e){
      e.preventDefault();
      $("div.woocommerce-tabs>ul.tabs>li>a[href="+ $(this).attr("href") +"]")[0].click();
      $('html, body').animate({
          scrollTop: $("div.woocommerce-tabs").offset().top - 80
      }, 20); 
      console.log($("div.woocommerce-tabs").offset().top);
    });
  });

  $("img").load(function() {
    if(window.location.hash) {
      $("div.woocommerce-tabs>ul.tabs>li>a[href="+ window.location.hash +"]").get(0).click();
      $('html, body').animate({
          scrollTop: $("div.woocommerce-tabs").offset().top - 80
      }, 20);
    }
  });

  // Add downloads anchor hash from ivory search
  $(document).ajaxComplete(function() {
    if($('.is-title > a').length) {
      $('.is-title > a').each(function() {
          var _href = $(this).attr('href');
          $(this).attr('href', _href + (_href.charAt(_href.length-1) == '/' ?  "#tab-downloads" : "/#tab-downloads"));
      });
    }
  });

})( jQuery );