( function( wp ) {
    var registerPlugin = wp.plugins.registerPlugin;
    var PluginSidebar = wp.editPost.PluginSidebar;
    var el = wp.element.createElement;
    var Text = wp.components.TextControl;
 
    registerPlugin( 'matrix-block-sidebar', {
        render: function() {
            return el( PluginSidebar,
                {
                    name: 'matrix-block-sidebar',
                    icon: 'admin-post',
                    title: 'Matrix Block sidebar',
                },
                el( 'div',
                    { className: 'plugin-sidebar-content' },
                    el( Text, {
                        label: 'Meta Block Field',
                        value: 'Initial value',
                        onChange: function( content ) {
                            console.log( 'content changed to ', content );
                        },
                    } )
                )
            );
        }
    } );
} )( window.wp );