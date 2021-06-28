/**
 * Block Script
 *
 * @package matrix theme
 */

(function ($) {

    listBlock           = $('.wp-block-matrix-list ul li');

    cards               = $('.products .product.type-product, .wc-block-grid__product, .wp-block-matrix-text-box-download, .wp-block-matrix-text-box-lesson, .wp-block-matrix-text-box-started, .wp-block-matrix-text-box-support, .wp-block-matrix-horizental-card');
    
    listBlock.on("click", function (e) {
        if ($(this).parent().has("ul")) {
            e.stopPropagation();
        }
        $(this).find('> ul').slideToggle(50);
        $(this).toggleClass( "bounce" );
    });

    cards.on("click", function (e) {
        $(this).toggleClass( "selected" );
    });

    cards.mouseleave(function (e) {
        var selected = $(this).hasClass('selected');
        if(selected) {
            $(this).toggleClass( "selected" );
        }
    });

    listBlock.each(function() {
        $(this).contents().eq(0).wrap('<p/>');
    });

})( jQuery );