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

            const i18nModel = new ResourceModel({
                bundleName: 'learning.sap.ui5.i18n.i18n'
            });
            this.setModel(i18nModel, 'i18n');
        }
    })
});