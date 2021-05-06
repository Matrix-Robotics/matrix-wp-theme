/**
 * Block Script
 *
 * @package matrix theme
 */

(function ($) {

    listBlock           = $('.wp-block-matrix-list ul li');
    
    listBlock.on("click", function (e) {
        if ($(this).parent().has("ul")) {
            e.stopPropagation();
        }
        $(this).find('> ul').slideToggle(50);
        $(this).toggleClass( "bounce" );
    });

    listBlock.each(function() {
        $(this).contents().eq(0).wrap('<p/>');
    });

})( jQuery );