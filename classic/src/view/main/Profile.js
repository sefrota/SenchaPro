/**
 * Created by sletras on 16/03/2016.
 */
Ext.define('SenchaPro.view.main.Profile', {
    extend: 'Ext.FormPanel',
    xtype:'profile',

    requires: [
        'Ext.button.Button',
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.layout.container.VBox',
        'SenchaPro.store.Gender'
    ],

    layout:{type:'vbox',align: 'middle'},
    items: [
        {
            xtype:'image',
            height: 200,
            width:200,
            //TODO: dinamically encapsulate this path
            bind: {
                src: '/resources/{genderComboValue}-profile.png'
            }
        }, {
            xtype: 'fieldset',
            defaultType: 'textfield',
            margin: '0 0 0 10',
            title: 'Account details',
            items:[
                {
                    fieldLabel: 'Username'
                },{
                    fieldLabel: 'Password'
                },{
                    fieldLabel: 'Confirm Password'
                }
            ]
        }, {
            xtype: 'fieldset',
            defaultType: 'textfield',
            margin: '0 0 0 10',
            title: 'Personal details',
            items:[
                {
                    fieldLabel: 'First Name'
                },{
                    fieldLabel: 'Last Name'
                },{
                    fieldLabel: 'Gender',
                    xtype: 'combobox',
                    reference: 'genderCombo',
                    store: {type: 'genders'},
                    bind:{
                        value: '{genderComboValue}',
                    },
                    editable: false,
                    displayField: 'label',
                    valueField: 'value'
                },{
                    fieldLabel: 'Date of Birth',
                    xtype: 'datefield',
                    format: 'm-d-Y'
                },{
                    fieldLabel: 'E-mail'
                },{
                    fieldLabel: 'Address'
                },{
                    fieldLabel: 'Phone no.'
                },{
                    fieldLabel: 'Country'
                }
            ]
        },{
            xtype: 'button',
            text:'Save',
            formBind: true,
            margin: '5 0 0 0',
        }
    ]
});