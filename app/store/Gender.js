Ext.define('SenchaPro.store.Gender', {
    extend: 'Ext.data.Store',

    alias: 'store.genders',

    fields: [
        'label', 'value'
    ],

    data: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female'}
    ]

});
