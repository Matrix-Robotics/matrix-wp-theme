import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { SVG, Path } from '@wordpress/components';

const TEMPLATE = [
	[
		'core/html', {
			content: __(
				'<svg width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.667 12.458A4.333 4.333 0 0113 8.125h26a4.333 4.333 0 014.333 4.333v20.584A4.333 4.333 0 0139 37.375h-1.09c.087.666.264 1.35.581 1.908.397.698 1.067 1.342 2.692 1.342h2.166v5.417h-9.248c-3.603 0-7.046-1.665-8.483-3.802-1.074-1.598-1.565-3.399-1.724-4.865H13a4.333 4.333 0 01-4.333-4.333V12.458zm30.333 0H13v20.584h15.167v3.25c0 .945.281 2.391 1.047 3.53.688 1.024 2.825 1.886 4.887 1.886h.793a7.587 7.587 0 01-.17-.283c-1.043-1.835-1.216-3.904-1.216-5.133v-3.25H39V12.458z" fill="#000"/><path d="M23.833 21.667h4.334v8.666h-4.334v-8.666zM23.833 15.167h4.333V19.5h-4.333z" fill="#000"/></svg>'
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

registerBlockType( 'matrix/text-box-support', {
	
	title: __( 'Text Box (support)', 'matrix' ),
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
