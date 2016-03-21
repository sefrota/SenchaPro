/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SenchaPro.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        var me = this;
        var profilePanel = me.lookupReference('profile');
        profilePanel.getForm().loadRecord(record);
    },

    /**
     * @param {Ext.button.Button} component
     * @param {Event} e
     */
    removeUser: function (component, e) {
        var me = this;
        var mainList = me.lookupReference('mainlist');
        var usersStore = mainList.getStore();
        var selectedRows = mainList.getSelectionModel().getSelection();
        if(selectedRows.length){
            usersStore.remove(selectedRows);
        }else{
            alert("You should select a user first!");
        }
    },

    /**
     * @param {Ext.button.Button} component
     * @param {Event} e
     */
    addUser: function (component, e) {
        var me = this;
        var mainList = me.lookupReference('mainlist');
        var userStore = mainList.getStore();

        var user = Ext.create('SenchaPro.model.User');
        user.set("username", "Username");
        user.set("password", "Password");
        user.set("firstName", "First");
        user.set("lastName", "Last");
        user.set("gender", "male");
        user.set("dateOfBirth", "12-05-1987");
        user.set("email", "email@newmail.pt");
        user.set("address", "Rua do Picapau");
        user.set("phone", "342432422");
        user.set("country", "Portugal");

        userStore.add(user);
    },

    /**
     * @param {Ext.button.Button} component
     * @param {Event} e
     */
    revertChanges: function (component, e) {
        var me = this;
        var mainList = me.lookupReference('mainlist');
        var userStore = mainList.getStore();

        userStore.rejectChanges();
    },

    /**
     * @param {Ext.button.Button} component
     * @param {Event} e
     */
    updateUser: function (component, e) {
        var me = this;
        var mainList = me.lookupReference('mainlist');
        var userStore = mainList.getStore();
        var profilePanel = me.lookupReference('profile');
        var userForm = profilePanel.getForm();
        var user = userForm.getRecord();
        user.set(userForm.getValues());
        userStore.update(user);

    },

    //onConfirm: function (choice) {
    //    if (choice === 'yes') {
    //        //
    //    }
    //}
});
