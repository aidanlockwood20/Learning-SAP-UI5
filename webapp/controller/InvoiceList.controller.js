sap.ui.define([
    "sap/ui/core/mvc/Controller", 
    'sap/ui/model/json/JSONModel',
    '../model/formatter'
], (Controller, JSONModel, formatter) => {
    "use strict";

    return Controller.extend("learning.sap.ui5.controller.InvoiceList", {
        formatter: formatter,
        onInit() {

            const oViewModel = new JSONModel({
                currency: "EUR"
            });

            this.getView().setModel(oViewModel, 'view');
        

        }
    })
});