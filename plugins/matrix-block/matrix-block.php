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

include 'test/index.php';

include '01-banner/index.php';
include '02-call-to-action/index.php';
include '03-breadcrumb/index.php';
include '04-list/index.php';
include '05-table/index.php';
include '06-card-fluid/index.php';
include '07-product-fluid/index.php';
include '08-text-box/index.php';
include '09-horizental-card/index.php';
include '10-media-and-text/index.php';

include '11-button/index.php';
include '12-social-icon/index.php';

include '13-store-item-banner/index.php';
include '14-store-item-nav/index.php';
include '15-store-category/index.php';


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