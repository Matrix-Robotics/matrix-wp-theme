/**
 * Customized Matrix block plugin Script
 *
 * @package matrix theme
 */

(function ($) {

    masthead            = $('header.wp-block-template-part');
    searchBarToggle     = masthead.find('#search-btn');
    searchBarInput      = masthead.find('#is-search-input-65');
    mobileMenuToggle    = masthead.find('#menu-btn');
    mobileMenu          = masthead.find('.nav-menu-mobile');
    i18nToggle          = masthead.find('#i18n-btn');
    i18nIcon            = masthead.find('.i18n-icon');
    i18nSelect          = masthead.find('.i18n-select select');
    i18nOption          = masthead.find('.i18n-select select option');
    cartLIcon           = masthead.find('.cart-icon-desktop');

    prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
        currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            masthead.css("top", "0" );
        } else {
            masthead.css("top", "-80px" );
        }
        prevScrollpos = currentScrollPos;
    };

    i18nToggle.change(function () {
        if ($(this).is(':checked')) {
            i18nIcon.addClass('click-label');
        } else {
            i18nIcon.removeClass('click-label');
        }
    });

    i18nSelect.on( 'change', function() {
        selectedLanguage = i18nOption.filter(':selected').val();

        currentContent = location.pathname.substring(
            location.pathname.indexOf("/", 1) + 1,
            location.pathname.length
        );

        window.location.href = "/" + selectedLanguage + "/" + currentContent;
    });

})(jQuery);