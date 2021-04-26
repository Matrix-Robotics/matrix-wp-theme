import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { SVG, Path, Rect } from '@wordpress/components';

const TEMPLATE = [
	[
		'core/columns',
		[],
		[
			[
				'core/column',
				{ width:33.33 } ,
				[]
			],
			[
				'core/column',
				{ width:66.67 },
				[]
			]
		]
	],
];

registerBlockType( 'matrix/columns-block', {
	title: __( 'Columns (1:2)', 'matrix' ),
	icon: (<SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sidebar"><Rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" /><Path d="M9 3v18"/></SVG>),
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
