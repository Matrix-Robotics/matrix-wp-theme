import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

const TEMPLATE = [
    [ 'core/columns', {}, [
		[ 'core/column', {}, [
			[ 'core/heading', { placeholder: 'Title' } ],
			[ 'core/paragraph', { placeholder: 'Add paragraph' } ],
			[ 'core/buttons', {}, [
				[ 'core/button', { placeholder: 'Button'} ]
			]],
		] ],
		[ 'core/column', {}, [
			[ 'core/image', {} ],
		] ],
	] ],
];

registerBlockType( 'matrix/banner-block', {
	
	title: __( 'Banner', 'matrix' ),
	icon: 'align-wide',
	category: 'matrix-block',
	styles: [
		{
			name: 'regular-banner',
			label: __( 'Regular' ),
			isDefault: true
		},
		{
			name: 'hero-banner',
			label: __( 'Hero (homepage)' )
		},
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
