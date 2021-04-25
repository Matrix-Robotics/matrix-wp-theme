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


/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function text_box_lesson_register_script() {

	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_register_script(
		'text-box-lesson-editor-script',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);
    
    wp_register_style(
		'text-box-lesson-style',
		plugins_url( 'style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	register_block_type( 
		'matrix/text-box-lesson',
		array(
			'editor_script' => 'text-box-lesson-editor-script',
			'style' 		=> 'text-box-lesson-style',
		)
	);


}

add_action( 'init', 'text_box_lesson_register_script' );

