<?php

if ( ! function_exists( 'matrix_theme_support' ) ) :
	function matrix_theme_support()  {
		// Adding support for featured images.
		add_theme_support( 'post-thumbnails' );

		// Adding support for alignwide and alignfull classes in the block editor.
		add_theme_support( 'align-wide' );

		// Adding support for core block visual styles.
		add_theme_support( 'wp-block-styles' );

		// Adding support for responsive embedded content.
		add_theme_support( 'responsive-embeds' );

		// Add support for editor styles.
		add_theme_support( 'editor-styles' );

		// Enqueue editor styles.
		add_editor_style( 'assets/css/editor-style.css' );

		// Add support for custom units.
		add_theme_support( 'custom-units' );

	}

	function theme_add_woocommerce_support() {
		add_theme_support( 'woocommerce', array(
			'thumbnail_image_width' => 320,
			'gallery_thumbnail_image_width' => 150,
			'single_image_height' => 800,
			) );
		add_theme_support( 'wc-product-gallery-lightbox' );
		add_theme_support( 'wc-product-gallery-slider' );
	}

	add_action( 'after_setup_theme', 'matrix_theme_support' );
	add_action( 'after_setup_theme', 'theme_add_woocommerce_support' );
endif;


/**
 * Dequeue Gutenberg inline css.
 */
function remove_wp_block_library_css(){
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'wp-block-library-theme' );
    wp_dequeue_style( 'wc-block-style' ); 
} 


/**
* Load FSE block template parts into classic PHP theme
* ref: https://github.com/WordPress/gutenberg/issues/29024#issuecomment-783179297
*/
function get_html_block_template_parts( $relative_path ) {
	$path     = get_theme_file_path( $relative_path );
	$contents = file_get_contents( $path );

	echo do_blocks( do_shortcode( $contents ) );
}

/**
 * Reorganize dashboard.
 */
function remove_dashboard_widgets () {
 
	//Completely remove various dashboard widgets
	remove_meta_box( 'dashboard_quick_press',   'dashboard', 'side' );      //Quick Press widget
	remove_meta_box( 'dashboard_recent_drafts', 'dashboard', 'side' );      //Recent Drafts
	remove_meta_box( 'dashboard_primary',       'dashboard', 'side' );      //WordPress.com Blog
	remove_meta_box( 'dashboard_secondary',     'dashboard', 'side' );      //Other WordPress News
	remove_meta_box( 'dashboard_incoming_links','dashboard', 'normal' );    //Incoming Links
	remove_meta_box( 'dashboard_plugins',       'dashboard', 'normal' );    //Plugins
	remove_meta_box( 'dashboard_site_health',   'dashboard', 'normal' );   
	remove_meta_box( 'dashboard_right_now',     'dashboard', 'normal' );   
	
}


/**
* Enqueue theme fonts.
*/
function matrix_theme_fonts() {
	wp_enqueue_style( 'matrix-theme-fonts', get_template_directory_uri() . '/assets/css/theme-fonts.css', array() );
}


/**
 * Enqueue scripts and styles.
 */
function matrix_theme_scripts() {
	// Enqueue theme stylesheet.
	wp_enqueue_style( 'matrix-theme-style', get_template_directory_uri() . '/assets/css/style.css', array() );

	// Register and enqueue nav.js.
	wp_enqueue_script( 'matrix-block-js', get_template_directory_uri() . '/assets/js/block.js' , array( 'jquery' ), '1.0', true );

	// Register and enqueue nav.js.
	wp_enqueue_script( 'matrix-navigation-js', get_template_directory_uri() . '/assets/js/nav.js' , array( 'jquery' ), '1.0', true );

	// Register and enqueue woocommerce.js.
	wp_enqueue_script( 'matrix-woo-js', get_template_directory_uri() . '/assets/js/woo.js' , array( 'jquery' ), '1.0', true );
}


/**
 * Enqueue Woocommerce stylesheet
 */
function wp_enqueue_woocommerce_style(){
	wp_register_style( 'matrix-woocommerce-style', get_template_directory_uri() . '/assets/css/woocommerce.css' );
	
	if ( class_exists( 'woocommerce' ) ) {
		wp_enqueue_style( 'matrix-woocommerce-style' );
	}
}

function wcc_change_breadcrumb_delimiter( $defaults ) {
	// Change the breadcrumb delimeter from '/' to '>'
	$defaults['delimiter'] = '&nbsp; &gt; &nbsp;';
	return $defaults;
}

function custom_breadcrumb( $crumbs, $object_class ){
    // Loop through all $crumb
    foreach( $crumbs as $key => $crumb ){
        $taxonomy = 'product_cat'; // The product category taxonomy

        // Check if it is a product category term
        $term_array = term_exists( $crumb[0], $taxonomy );

        // if it is a product category term
        if ( $term_array !== 0 && $term_array !== null ) {

            // Get the WP_Term instance object
            $term = get_term( $term_array['term_id'], $taxonomy );

            // HERE set your new link with a custom one
            $crumbs[$key][1] = home_url( '/'.$term->slug.'/' ); // or use all other dedicated functions
        }
    }
	
    return $crumbs;
}


/**
 * Add a custom product data tab
 */

function woo_new_product_tab( $tabs ) {
	
	$tabs['description']['title'] = __( 'Overview' );
	$tabs['additional_information']['title'] = __( 'Specifications' );

	unset( $tabs['download'] ); 		// Remove the download tab
    unset( $tabs['reviews'] ); 			// Remove the reviews tab		

	return $tabs;
}




add_theme_support( 'editor-color-palette', array(
	array(
		'name'  => __( 'secondary blue', 'matrix-color' ),
		'slug'  => 'secondary-blue',
		'color'	=> '#00A1E9',
	),
	array(
		'name'  => __( 'support yellow', 'matrix-color' ),
		'slug'  => 'support-yellow',
		'color' => '#EFBB00',
	),
	array(
		'name'  => __( 'gray gray', 'matrix-color' ),
		'slug'  => 'gray-scale',
		'color' => '#6D6D6D',
    ),
	array(
		'name'  => __( 'white', 'matrix-color' ),
		'slug'  => 'pure-white',
		'color' => '#FFF',
    ),
	array(
		'name'  => __( 'block', 'matrix-color' ),
		'slug'  => 'pure-block',
		'color' => '#000',
    )
) );



function modify_upload_mimes ( $mimes_types ) {
    // add your extension to the mimes array as below
    $mimes_types['zip'] = 'application/zip';
    $mimes_types['rar'] = 'application/x-rar-compressed';
    $mimes_types['gz'] = 'application/x-gzip';
    $mimes_types['step'] = 'application/STEP';
    $mimes_types['stl'] = 'application/sla';
    return $mimes_types;
}

function add_allow_upload_extension_exception( $types, $file, $filename, $mimes ) {
    // Do basic extension validation and MIME mapping
    $wp_filetype = wp_check_filetype( $filename, $mimes );
    $ext         = $wp_filetype['ext'];
    $type        = $wp_filetype['type'];
    if( in_array( $ext, array( 'zip', 'rar', 'gz', 'step', 'stl' ) ) ) {
        $types['ext'] = $ext;
        $types['type'] = $type;
    }
    return $types;
}

// Remove XML-RPC function
add_filter( 'xmlrpc_enabled', '__return_false' );

add_action( 'wp_enqueue_scripts', 'remove_wp_block_library_css', 100 );
add_action( 'wp_enqueue_scripts', 'get_html_block_template_parts', 1 );
add_action( 'wp_dashboard_setup', 'remove_dashboard_widgets' );

add_action( 'enqueue_block_editor_assets', 'matrix_theme_fonts', 1 );
add_action( 'wp_enqueue_scripts', 'matrix_theme_fonts', 1 );
add_action( 'wp_enqueue_scripts', 'matrix_theme_scripts' );

add_action( 'wp_enqueue_scripts', 'wp_enqueue_woocommerce_style' );
add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );
add_filter( 'woocommerce_breadcrumb_defaults', 'wcc_change_breadcrumb_delimiter' );
add_filter( 'woocommerce_get_breadcrumb', 'custom_breadcrumb', 10, 2 );
add_filter( 'woocommerce_product_tabs', 'woo_new_product_tab' );

add_filter( 'upload_mimes', 'modify_upload_mimes', 99 );
add_filter( 'wp_check_filetype_and_ext', 'add_allow_upload_extension_exception', 99, 4 );
