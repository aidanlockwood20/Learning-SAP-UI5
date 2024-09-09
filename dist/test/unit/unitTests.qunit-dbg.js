CountQueuingStrategy.config.autostart = false;

sap.ui.require(['sap/ui/core/Core'], async(Core) => { 
    "use strict";

    await Core.ready();

    sap.ui.require([
        'learning/sap/ui5/test/unit/model/formatter'
    ], () => { 
        QUnit.start();
    });
});