Ext.define('SenchaPro.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    requires: [
        'Ext.data.proxy.Rest',
        'SenchaPro.model.User'
    ],

    model: 'SenchaPro.model.User',

    fields: [
        'id','username', 'password', 'firstName', 'lastName', 'gender',
        'dateOfBirth', 'email', 'address', 'phone', 'country'
    ],

    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/',
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    },

    autoLoad: true
});
