import { __ } from '@wordpress/i18n';
import { registerBlockVariation } from '@wordpress/blocks';


registerBlockVariation( 'core/buttons', [{
	name: 'matrix-btn',
	title: __( 'Button', 'matrix' ),
	icon: 'button',
	category: 'matrix-block',
	description: __( 'Customized button for Matrix site' ),
	attributes: {  
		className: 'is-matrix-btn' 
		},
}] );
