/**
 * Navigation Script
 *
 * @package matrix theme
 */

(function( $ ) {
	var masthead, searchBarToggle;

	masthead        = $( '.wp-site-blocks .site-header' );
	searchBarToggle = masthead.find( '.search-btn' );
    searchBarInput  = masthead.find( '#is-search-input-65' );
    

    searchBarToggle.change(function() {
        if ($(this).is(':checked')) {
            searchBarInput.focus();
        }
      });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            if ( searchBarInput.is(':focus') ) {
                searchBarToggle.click();
                searchBarInput.blur();
            }
        }
    });

})( jQuery );