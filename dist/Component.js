sap.ui.define(["sap/ui/core/UIComponent","sap/ui/model/json/JSONModel","sap/ui/Device"],(e,t,i)=>{"use strict";return e.extend("learning.sap.ui5.Component",{metadata:{interfaces:["sap.ui.core.IAsyncContentCreation"],manifest:"json"},init(){e.prototype.init.apply(this,arguments);const n={recipient:{name:"World"}};const s=new t(n);this.setModel(s);const o=new t(i);o.setDefaultBindingMode("OneWay");this.setModel(o,"device");this.getRouter().initialize()},getContentDensityClass(){return i.support.touch?"sapUiSizeCozy":"sapUiSizeCompact"}})});
//# sourceMappingURL=Component.js.map