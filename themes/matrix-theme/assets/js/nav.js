/**
 * Navigation Script
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
    i18nIcon            = masthead.find( '.i18n-icon' )
    
    i18nToggle.change(function() {
        if ($(this).is(':checked')) {
            i18nIcon.addClass('click-label');
        } else {
            i18nIcon.removeClass('click-label');
        }
    });

    mobileMenuToggle.change(function() {
        if ($(this).is(':checked')) {
            mobileMenu.addClass('flexbox');
        } else {
            mobileMenu.removeClass('flexbox');
        }
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            if ( searchBarInput.is(':focus') ) {
                searchBarToggle.click();
                searchBarInput.blur();
            }
            if ( i18nIcon.hasClass('click-label') ) {
                i18nToggle.click();
                i18nIcon.removeClass('click-label');
            }
        }
    });

    $(document).mouseup(function(e) {
        if (!i18nIcon.is(e.target) && i18nIcon.has(e.target).length === 0) {
            if ( i18nIcon.hasClass('click-label') ) {
                i18nToggle.click();
                i18nIcon.removeClass('click-label');
            }
        }
    });

})( jQuery );