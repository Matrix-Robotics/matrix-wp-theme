import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { SVG, Path } from '@wordpress/components';

const TEMPLATE = [
	[
		'core/html', {
			content: __(
				'<svg width="52" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.833 6.5h4.334v26h-4.334v-26z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.667 8.667h8.666V13H13v26h26V13h-4.333V8.667h8.666v34.666H8.667V8.667z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.801 25.365l3.064-3.064L26 29.436l7.135-7.135 3.064 3.064-9.492 9.492a1 1 0 01-1.414 0L15.8 25.365z" fill="#000"/></svg>'
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

registerBlockType( 'matrix/text-box-download', {
	
	title: __( 'Text Box (downloads)', 'matrix' ),
	icon: ( <SVG width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><Path d="M11 3h2v12h-2V3z" fill="#000"/><Path fill-rule="evenodd" clip-rule="evenodd" d="M4 4h4v2H6v12h12V6h-2V4h4v16H4V4z" fill="#000"/><Path fill-rule="evenodd" clip-rule="evenodd" d="M7.293 11.707l1.414-1.414L12 13.586l3.293-3.293 1.414 1.414-4 4a1 1 0 01-1.414 0l-4-4z" fill="#000"/></SVG> ),
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
