sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("learning.sap.ui5.controller.App", {
        onShowHello() { 
            alert("Hello World");
        }
    })
});