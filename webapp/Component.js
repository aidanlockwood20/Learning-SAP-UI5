sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel'
], (UIComponent, JSONModel, ResourceModel) => {
    'use strict';

    return UIComponent.extend('learning.sap.ui5.Component', {
        metadata : { 
            interfaces : ['sap.ui.core.IAsyncContentCreation'],
            manifest : "json"
        },

        init() {
            UIComponent.prototype.init.apply(this, arguments);
            const oData = { 
                recipient : { 
                    name : "World"
                }
            };

            const oModel = new JSONModel(oData);
            this.setModel(oModel);

			this.getRouter().initialize();
        }
    })
});