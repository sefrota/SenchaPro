/**
 * This view is an example list of people.
 */
Ext.define('SenchaPro.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    reference: 'mainlist',
    requires: [
        'SenchaPro.store.Personnel'
    ],

    title: 'Personnel',
    header: {
        items: [
            {
                xtype: 'button',
                text: 'New',
                formBind: true,
                margin: '5',
                listeners:{
                    click: 'addUser'
                }
            },{
                xtype: 'button',
                text: 'Delete',
                formBind: true,
                margin: '5',
                listeners: {
                    click: 'removeUser'
                }
            },{
                xtype: 'button',
                text: 'Revert',
                formBind: true,
                margin: '5',
                listeners: {
                    click: 'revertChanges'
                }
            },{
                xtype: 'button',
                text: 'Submit',
                formBind: true,
                margin: '5',
                listeners: {
                    click: 'submitOperations'
                }
            }
        ]
    },

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'First Name',  dataIndex: 'firstName', flex:1},
        { text: 'Last Name',  dataIndex: 'lastName', flex:1},
        { text: 'Email', dataIndex: 'email', flex:1},
        { text: 'Phone', dataIndex: 'phone', flex:1}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
