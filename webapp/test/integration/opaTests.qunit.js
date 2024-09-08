QUnit.config.autostart = false;

sap.ui.require(['sap/ui/core/Core'], async(Core) => { 
    "use strict";

    await Core.ready();

    sap.ui.require([
        'learning/sap/ui5/localService/mockserver',
        'learning/sap/ui5/test/integration/NavigationJourney'
    ], (mockserver) => { 
        mockserver.init();
        QUnit.start();
    })
})