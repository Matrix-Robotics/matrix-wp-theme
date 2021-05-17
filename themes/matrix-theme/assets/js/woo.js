/**
 * Navigation Script
 *
 * @package matrix theme
 */

 (function( $ ) {

  product             = $( '.product' );
  productTitle        = product.find ( '.product_title' );
  addToCartBtn        = product.find( 'button' );
  cartOrderForm       = product.find( '.cart' );
  skuNum              = product.find( '.product_meta' );
  cateType            = product.find( '.posted_in' );


  $().ready(function() {
    addToCartBtn.addClass( 'is-style-action-btn' );
    cateType.text(function(i,text){
        text = text.replace('Category: ','');
        text = text.replace('Categories: ','');
        return text;
    });
    cartOrderForm.before(skuNum);
    productTitle.before(cateType);
  });

  $(window).load(function() {
    // The slider being synced must be initialized first
    $('#carousel').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      itemWidth: 210,
      itemMargin: 5,
      asNavFor: '#slider'
    });
    
    $('#slider').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      sync: "#carousel"
    });
  });

})( jQuery );