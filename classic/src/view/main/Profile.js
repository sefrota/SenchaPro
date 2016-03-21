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
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox',
        'SenchaPro.store.Gender'
    ],
    reference: 'profile',
    layout:{type:'vbox',align: 'middle'},
    title: "Profile",
    scrollable: true,
    bodyPadding: '0 0 40 0',


    items: [
        {
            xtype:'image',
            height: 200,
            width:200,
            margin: 5,
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
                    fieldLabel: 'Username',
                    name: 'username'
                },{
                    fieldLabel: 'Password',
                    name: 'password',
                    inputType: 'password'
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
                    fieldLabel: 'First Name',
                    name: 'firstName'
                },{
                    fieldLabel: 'Last Name',
                    name: 'lastName'
                },{
                    fieldLabel: 'Gender',
                    name: 'gender',
                    xtype: 'combobox',
                    reference: 'genderCombo',
                    store: {type: 'genders'},
                    bind:{
                        value: '{genderComboValue}'
                    },
                    editable: false,
                    displayField: 'label',
                    valueField: 'value'
                },{
                    fieldLabel: 'Date of Birth',
                    name:'dateOfBirth',
                    xtype: 'datefield',
                    format: 'm-d-Y'
                },{
                    fieldLabel: 'E-mail',
                    name: 'email'
                },{
                    fieldLabel: 'Address',
                    name: 'address'
                },{
                    fieldLabel: 'Phone no.',
                    name: 'phone'
                },{
                    fieldLabel: 'Country',
                    name: 'country'
                }
            ]
        }, {
            xtype: 'panel',
            layout: {
                    type: 'hbox',
                    pack: 'left',
                    align: 'begin'
            },
            items:[{
                    xtype: 'button',
                    text: 'Update',
                    formBind: true,
                    margin: '5',
                    listeners:{
                        click: 'updateUser'
                    }
                }
            ]
        }
    ]
});