/**
 * Customized Matrix block plugin Script
 *
 * @package matrix theme
 */

(function ($) {

    header            = $(' header ');
    searchBar           = header.find('.is-search-form');
    searchBarToggle     = header.find('#search-btn');
    searchBarInput      = header.find('#is-search-input-65');
    mobileMenuToggle    = header.find('#menu-btn');
    mobileMenu          = header.find('.nav-menu-mobile');
    i18nToggle          = header.find('#i18n-btn');
    i18nIcon            = header.find('.i18n-icon');
    i18nSelect          = header.find('.i18n-select select');
    i18nOption          = header.find('.i18n-select select option');
    cartLIcon           = header.find('.cart-icon-desktop');

    mobileMenuToggle.change(function() {
        if ($(this).is(':checked')) {
            mobileMenu.addClass('flexbox');
            cartLIcon.addClass('hidden');
        } else {
            mobileMenu.removeClass('flexbox');
            cartLIcon.removeClass('hidden');
        }
    });

    searchBarToggle.change(function() {
        if ($(this).is(':checked')) {
            searchBar.addClass('flexbox');
            searchBarInput.focus();
        } else {
            searchBar.removeClass('flexbox');
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

    i18nToggle.change(function () {
        if ($(this).is(':checked')) {
            i18nIcon.addClass('click-label');
        } else {
            i18nIcon.removeClass('click-label');
        }
    });

    // i18n route handler
    i18nSelect.on( 'change', function() {
        selectedLanguage = i18nOption.filter(':selected').val();

        currentContent = location.pathname.substring(
            location.pathname.indexOf("/", 1) + 1,
            location.pathname.length
        );

        window.location.href = "/" + selectedLanguage + "/" + currentContent;
    });

})(jQuery);