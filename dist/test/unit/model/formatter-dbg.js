sap.ui.define([
    'learning/sap/ui5/model/formatter',
    'sap/ui/model/resource/ResourceModel'
], (formatter, ResourceModel) => { 
    QUnit.module("Formatting functions", {});

    QUnit.test("Should return the translated texts", (assert) => { 
        const oResourceModel = new ResourceModel({ 
            bundleUrl: sap.ui.require.toUrl('learning/sap/ui5/i18n/i18n.properties'),
            supportedLocales: [
                ""
            ],
            fallbackLocale: ""
        });

        const oControllerMock = { 
            getOwnerComponent() { 
                return { 
                    getModel() { 
                        return oResourceModel;
                    }
                };
            }
        };

        const fnIsolatedFormatter = formatter.statusText.bind(oControllerMock);

        assert.strictEqual(fnIsolatedFormatter("A"), "New", "The long text for Status A is correct");
        assert.strictEqual(fnIsolatedFormatter("B"), "New", "The long text for Status B is correct");
        assert.strictEqual(fnIsolatedFormatter("C"), "New", "The long text for Status C is correct");
        assert.strictEqual(fnIsolatedFormatter("Foo"), "New", "The long text for Status Foo is correct");
    });
})