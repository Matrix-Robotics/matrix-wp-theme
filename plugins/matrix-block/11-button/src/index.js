import { __ } from '@wordpress/i18n';
import { registerBlockVariation, registerBlockStyle, unregisterBlockStyle } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

registerBlockVariation( 'core/buttons', [
	{
	name: 'matrix-btns',
	title: __( 'Buttons', 'matrix' ),
	icon: 'button',
	category: 'matrix-block',
	description: __( 'Customized button for Matrix site' ),
	attributes: {  
		className: 'is-matrix-btns' 
		},
	}] 
);

domReady( () => {
	unregisterBlockStyle( 'core/button', 'fill' );
	unregisterBlockStyle( 'core/button', 'outline' );

	registerBlockStyle( 'core/button', [
		{
			name: 'action-btn',
			label: 'Action',
			isDefault: true
		},
		{
			name: 'textbox-btn',
			label: 'Text Box link',
		},
		{
			name: 'option-btn',
			label: 'Option'
		},
		{
			name: 'option-outline-btn',
			label: 'Option (outline)'
		},
		{
			name: 'danger-btn',
			label: 'Danger'
		}]
	);
	
} );

