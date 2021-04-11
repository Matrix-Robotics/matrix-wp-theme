<?php

/*
 * Plugin Name:     Matrix Block
 * Description:     Gutenberg blocks for Matrix theme
 * Version:         0.1.0
 * Author:          Kevin Cheng
 * Author URI:      https://github.com/kevinphys
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 *
 */

 
defined( 'ABSPATH' ) || exit;


// Register new Matrix block category in Gutenberg editor
function matrix_block_categories( $categories ) {
    // Plugin’s block category title and slug.
    $block_category = array( 'title' => esc_html__( 'Matrix Block', 'text-domain' ), 'slug' => 'matrix-block' );
    $category_slugs = wp_list_pluck( $categories, 'slug' );
 
    if ( ! in_array( $block_category['slug'], $category_slugs, true ) ) {
        $categories = array_merge(
            array(
                array(
                    'slug' => 'matrix-block',
                    'title' => __( 'Matrix Block', 'matrix-block' )
                ),
            ),
            $categories
        );
    }
 
    return $categories;
}

add_filter( 'block_categories', 'matrix_block_categories' );


/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function frontend_register_script() {

	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_register_script(
		'frontend-editor-script',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);
    
    register_block_type( 
		'matrix/frontend',
		array(
			'editor_script' => 'frontend-editor-script',
		)
	);

}

add_action( 'init', 'frontend_register_script' );
