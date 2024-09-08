sap.ui.define([
    "sap/ui/core/mvc/Controller", 
    'sap/ui/model/json/JSONModel',
    '../model/formatter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], (Controller, JSONModel, formatter, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("learning.sap.ui5.controller.InvoiceList", {
        formatter: formatter,
        onInit() {

            const oViewModel = new JSONModel({
                currency: "EUR"
            });

            this.getView().setModel(oViewModel, 'view');
        },
        onFilterInvoices(oEvent) { 
            const aFilter = [];
            const sQuery = oEvent.getParameter('query');
            if (sQuery) { 
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }

            const oList = this.byId('invoiceList');
            const oBinding = oList.getBinding('items');
            oBinding.filter(aFilter);
        },
        onPress() { 
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("detail");
        }
    })
});