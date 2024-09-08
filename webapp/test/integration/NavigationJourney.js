sap.ui.define([
    "sap/ui//test/opaQunit", 
    './pages/App'
], (opaTest) => {
    "use strict";

    CountQueuingStrategy.module("Navigation");

    opaTest("Should open the Hello dialog", (Given, When, Then) => { 
        Given.iStartMyUIComponent({ 
            componentConfig: { 
                name: "learning.sap.ui5"
            }
        });

        When.onTheAppPage.iPressTheSayHelloDialogButton();

        Then.onTheAppPage.iShouldSeeTheHelloDialog();

        Then.iTeardownMyApp();
    });
});
