sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";


    return Controller.extend('learning.sap.ui5.controller.HelloPanel', {
        onShowHello() { 
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);

            MessageToast.show(sMsg);
        },

        async onOpenDialog() { 
            this.oDialog ??= await this.loadFragment({
                name: 'learning.sap.ui5.view.HelloDialog'
            });

            this.oDialog.open();
        },

        onCloseDialog() { 
            this.byId("helloDialog").close();
        }
    })
});
