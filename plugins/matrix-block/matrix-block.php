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

function matrix_block_register_block() {
 
    // automatically load dependencies and version
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
 
    wp_register_script(
        'gutenberg-examples-01-esnext',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );
 
    register_block_type( 'gutenberg-examples/example-01-basic-esnext', array(
        'apiVersion' => 2,
        'editor_script' => 'gutenberg-examples-01-esnext',
    ) );
 
}
add_action( 'init', 'matrix_block_register_block' );


function matrix_gutenberg_enqueue() {
    wp_enqueue_script(
        'matrix-block-script',
        plugins_url( 'matrix-block.js', __FILE__ )
    );
}
add_action( 'enqueue_block_editor_assets', 'matrix_gutenberg_enqueue' );


function sidebar_plugin_register() {
    wp_register_script(
        'plugin-sidebar-js',
        plugins_url( 'plugin-sidebar.js', __FILE__ ),
        array( 'wp-plugins', 'wp-edit-post', 'wp-element' )
    );
}
add_action( 'init', 'sidebar_plugin_register' );


function sidebar_plugin_script_enqueue() {
    wp_enqueue_script( 'plugin-sidebar-js' );
    register_post_meta( 'post', 'sidebar_plugin_meta_block_field', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ) );
}
add_action( 'enqueue_block_editor_assets', 'sidebar_plugin_script_enqueue' );
