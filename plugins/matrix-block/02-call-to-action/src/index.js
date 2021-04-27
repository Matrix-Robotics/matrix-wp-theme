import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { SVG, Path, Rect } from '@wordpress/components';

const TEMPLATE = [
	[
		'core/column',
		{ width:100 } ,
		[]
	],
];

registerBlockType( 'matrix/call-to-action-block', {
	title: __( 'Call to Action', 'matrix' ),
	icon: (<SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minimize-2"><Path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7"/></SVG>),
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
