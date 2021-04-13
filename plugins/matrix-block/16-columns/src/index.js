import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

const TEMPLATE = [
	[
		'core/columns',
		[],
		[
			[
				'core/column',
				{ width:33.33} ,
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
	title: __( 'Columns', 'matrix' ),
	icon: 'columns',
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
