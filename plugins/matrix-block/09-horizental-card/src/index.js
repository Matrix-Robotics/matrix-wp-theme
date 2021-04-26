import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { SVG, Path } from '@wordpress/components';

const TEMPLATE = [
	[
		'core/image', {
		}
	],
	[
		'core/group', {}, [
			[
				'core/heading', {
					placeholder: __('Title Text')
				}
			],
			[
				'core/paragraph', { 
					placeholder: __('Add text box descriptoin here')
				}
			],
			[
				'core/button', { 
					placeholder: __('button')
				}
			]
		]
	],
];

registerBlockType( 'matrix/horizental-card', {
	
	title: __( 'Horizental Card', 'matrix' ),
	icon: ( <SVG width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><Path fill-rule="evenodd" clip-rule="evenodd" d="M4 5.75a2 2 0 012-2h12a2 2 0 012 2v9.5a2 2 0 01-2 2h-.503c.04.307.122.623.268.88.183.323.493.62 1.242.62h1v2.5H15.74c-1.663 0-3.252-.768-3.915-1.755-.496-.737-.723-1.568-.796-2.245H6a2 2 0 01-2-2v-9.5zm14 0H6v9.5h7v1.5c0 .436.13 1.104.483 1.63.318.472 1.304.87 2.256.87h.366a3.39 3.39 0 01-.078-.13c-.482-.848-.562-1.803-.562-2.37v-1.5H18v-9.5z" fill="#000"/><Path d="M11 10h2v4h-2v-4zM11 7h2v2h-2z" fill="#000"/></SVG> ),
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
