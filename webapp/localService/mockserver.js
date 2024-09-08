sap.ui.define([
    'sap/ui/core/util/MockServer'
], (MockServer) => { 
    "use strict";

    return { 
        init() { 
            const oMockServer = new MockServer({ 
                rootUri: sap.ui.require.toUrl('learning.sap.ui5') + '/V2/Northwind/Northwind.svc/'
            });

            const oUrlParams = new URLSearchParams(window.location.search);

            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUrlParams.get('serverDelay') || 500
            });

            const sPath = sap.ui.require.toUrl('learning/sap/ui5/localService');
            oMockServer.simulate(sPath + '/metadata.xml', sPath + '/mockdata');

            oMockServer.start();
        }
    }
})