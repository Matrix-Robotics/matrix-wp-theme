import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { SVG, Path } from '@wordpress/components';

const TEMPLATE = [
	[
		'core/html', {
			content: __(
				'<svg width="52" height="51" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.875 31.875H13.25v6.375h25.5v-25.5h-6.375v10.625h-8.5v8.5zm4.25-12.75h-8.5v8.5H9V42.5h34v-34H28.125v10.625z" fill="#000"/></svg>'
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

registerBlockType( 'matrix/text-box-started', {
	
	title: __( 'Text Box (started)', 'matrix' ),
	icon: ( <SVG width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><Path fill-rule="evenodd" clip-rule="evenodd" d="M11 15H6v3h12V6h-3v5h-4v4zm2-6H9v4H4v7h16V4h-7v5z" fill="#000"/></SVG> ),
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
