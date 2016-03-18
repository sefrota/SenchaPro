/**
 * This view is an example list of people.
 */
Ext.define('SenchaPro.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'SenchaPro.store.Personnel'
    ],

    title: 'Personnel',

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
