sap.ui.define(["sap/ui/test/Opa5","sap/ui/test/actions/Press"],(e,o)=>{"use strict";const t="learning.sap.ui5.view.HelloPanel";e.createPageObjects({onTheAppPage:{actions:{iPressTheSayHelloWithDialogButton(){return this.waitFor({id:"helloDialogbutton",viewName:t,actions:new o,errorMessage:"Did not find the 'Say Hello With Dialog' button on the HelloPanel view"})}},assertions:{iShouldSeeTheHelloDialog(){return this.waitFor({controlType:"sap.m.Dialog",success(){e.assert.ok(true,"The dialog is open")},errorMessage:"Did not find the dialog control"})}}}})});
//# sourceMappingURL=App.js.map