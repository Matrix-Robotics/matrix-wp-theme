import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

const TEMPLATE = [
	[
		'woocommerce/handpicked-products',
	]
];

registerBlockType( 'matrix/product-fluid', {
	
	title: __( 'Product Fluid', 'matrix' ),
	icon: 'align-wide',
	category: 'matrix-block',
	styles: [
	],
	attributes: {
	},
	example: {
		attributes: {
		},
	},
	edit: ( ) => {
		return (
			<div>
				<InnerBlocks
					template={ TEMPLATE }
					templateLock="all"
            	/>
			</div>
		);
	},
	save: ( ) => {
		return (
			<div>
				<InnerBlocks.Content
					template={ TEMPLATE }
					templateLock="all"
            	/>
			</div>
		);
	},
} );
