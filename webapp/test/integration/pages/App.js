sap.ui.define([
    'sap/ui/test/Opa5',
    'sap/ui/test/actions/Press'
], (Opa5, Press) => {
    "use strict";

    const sViewName = 'learning.sap.ui5.view.HelloPanel';

    Opa5.createPageObjects({ 
        onTheAppPage: { 
            actions: { 
                iPressTheSayHelloWithDialogButton() { 
                    return this.waitFor({ 
                        id: 'helloDialogbutton',
                        viewName: sViewName,
                        actions: new Press(),
                        errorMessage: "Did not find the 'Say Hello With Dialog' button on the HelloPanel view"
                    });
                }
            },

            assertions: { 
                iShouldSeeTheHelloDialog() { 
                    return this.waitFor({
                        controlType: 'sap.m.Dialog',
                        success() { 
                            Opa5.assert.ok(true, "The dialog is open");
                        },
                        errorMessage: "Did not find the dialog control"
                    })
                }
            }
        }
    })

});
