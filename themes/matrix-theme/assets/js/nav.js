/**
 * Customized Matrix block plugin Script
 *
 * @package matrix theme
 */

(function( $ ) {

	masthead            = $( 'header' );
	searchBarToggle     = masthead.find( '#search-btn' );
    searchBarInput      = masthead.find( '#is-search-input-65' );
    mobileMenuToggle    = masthead.find( '#menu-btn' );
    mobileMenu          = masthead.find( '.nav-menu-mobile' );
    i18nToggle          = masthead.find( '#i18n-btn' );
    i18nIcon            = masthead.find( '.i18n-icon' );
    cartLIcon           = masthead.find( '.cart-icon-desktop' );
    
    i18nToggle.change(function() {
        if ($(this).is(':checked')) {
            i18nIcon.addClass('click-label');
        } else {
            i18nIcon.removeClass('click-label');
        }
    });

   

})( jQuery );