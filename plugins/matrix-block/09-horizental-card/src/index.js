import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { SVG, Path, Rect } from '@wordpress/components';

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
	icon: ( <SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card"><Rect x="1" y="4" width="22" height="16" rx="2" ry="2" fill="none"/><Path d="M1 10h22"/></SVG> ),
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
