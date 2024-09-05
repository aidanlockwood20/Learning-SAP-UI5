sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("learning.sap.ui5.controller.App", {
        onInit() { 
            const oDatat = { 
                recipient : { 
                    name : "World"
                }
            };

            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onShowHello() { 
            MessageToast.show("Hello World");
        }
    })
});