/**
 * Created by sletras on 16/03/2016.
 */
Ext.define('SenchaPro.view.main.MainContainer', {
    extend: 'Ext.Container',
    layout: 'border',
    xtype: 'maincontainer',
    listeners: {
        render: function() {
            var me = this;
            me.setHeight(window.innerHeight);
        }
    },

    /*
    Uncomment to give this component an xtype
    xtype: 'maincontainer',
    */

    items: [
        /* include child components here */
    ]
});