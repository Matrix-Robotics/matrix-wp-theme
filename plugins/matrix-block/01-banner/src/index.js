import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

const TEMPLATE = [
    [ 'core/columns', {}, [
		[ 'core/column', {}, [
			[ 'core/heading', { placeholder: 'Explore your creativity' } ],
			[ 'core/paragraph', { placeholder: 'Build, code, & learn with MATRIX ' } ],
			[ 'core/buttons', {}, [
				[ 'core/button', { placeholder: 'Learn more'} ]
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
