sap.ui.define([
    "sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
    "use strict";
    
    new ComponentContainer( { 
        name : 'learning.sap.ui5', 
        settings : { 
            id : "learning.sap.ui5"
        },
        async : true
    }).placeAt("content");
});
