import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { SVG, Path } from '@wordpress/components';

const TEMPLATE = [
	[
		'core/html', {
			content: __(
				'<svg width="52" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.777 13H13v26h28.167V22.812L30.777 13zM32.5 8.667H8.667v34.666H45.5V20.944l-13-12.277z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.167 23.833v-13H32.5v13h-4.333z" fill="#000"/><path d="M21.667 19.5H26v4.333h-4.333V19.5zM15.167 21.667a2.167 2.167 0 114.333 0 2.167 2.167 0 01-4.333 0zM15.167 28.167a2.167 2.167 0 114.333 0 2.167 2.167 0 01-4.333 0zM21.667 26h15.166v4.333H21.667V26z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M43.333 23.833H28.167V19.5h15.166v4.333z" fill="#000"/></svg>'
			),
		}
	],
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
];

registerBlockType( 'matrix/text-box-lesson', {
	
	title: __( 'Text Box (lesson plans)', 'matrix' ),
	icon: ( <SVG width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><Path fill-rule="evenodd" clip-rule="evenodd" d="M14.205 6H6v12h13v-7.471L14.205 6zM15 4H4v16h17V9.667L15 4z" fill="#000"/><Path fill-rule="evenodd" clip-rule="evenodd" d="M13 11V5h2v6h-2z" fill="#000"/><Path d="M10 9h2v2h-2V9zM7 10a1 1 0 112 0 1 1 0 01-2 0zM7 13a1 1 0 112 0 1 1 0 01-2 0zM10 12h7v2h-7v-2z" fill="#000"/><Path fill-rule="evenodd" clip-rule="evenodd" d="M20 11h-7V9h7v2z" fill="#000"/></SVG> ),
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
