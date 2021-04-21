import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { SVG, Path } from '@wordpress/components';

const TEMPLATE = [
	[
		'woocommerce/handpicked-products',
	]
];

registerBlockType( 'matrix/product-fluid', {
	
	title: __( 'Product Fluid', 'matrix' ),
	icon: ( <SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-plus"><Path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><Path d="M14 2v6h6M12 18v-6M9 15h6"/></SVG> ),
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
            	/>
			</div>
		);
	},
	save: ( ) => {
		return (
			<div>
				<InnerBlocks.Content
					template={ TEMPLATE }
            	/>
			</div>
		);
	},
} );
