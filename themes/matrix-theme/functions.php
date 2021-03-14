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
		add_editor_style( 'matrix-theme-styles/editor-style.css' );

		// Add support for custom units.
		add_theme_support( 'custom-units' );
	}

	function theme_add_woocommerce_support() {
		add_theme_support( 'woocommerce' );
	}

	add_action( 'after_setup_theme', 'matrix_theme_support' );
	add_action( 'after_setup_theme', 'theme_add_woocommerce_support' );
endif;


/**
 * Enqueue scripts and styles.
 */
function matrix_theme_scripts() {
	// Enqueue theme stylesheet.
	wp_enqueue_style( 'matrix-theme-style', get_stylesheet_uri(), array(), wp_get_theme()->get( 'Version' ) );

	// Register and enqueue nav.js.
	wp_enqueue_script( 'matrix-navigation-js', get_theme_file_uri( '/assets/js/nav.js' ), array( 'jquery' ), '1.0', true );
}

add_action( 'wp_enqueue_scripts', 'matrix_theme_scripts' );


/**
* Enqueue theme fonts.
*/
function matrix_theme_fonts() {
	wp_enqueue_style( 'matrix-theme-fonts', get_template_directory_uri() . '/assets/css/theme-fonts.css', array(), '20200212' );
}

add_action( 'wp_enqueue_scripts', 'matrix_theme_fonts', 1 );
add_action( 'enqueue_block_editor_assets', 'matrix_theme_fonts', 1 );
