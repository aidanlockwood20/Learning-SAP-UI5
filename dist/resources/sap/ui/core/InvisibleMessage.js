/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","./Core","sap/ui/base/ManagedObject","sap/base/Log","sap/ui/core/StaticArea"],function(e,t,s,i,n){"use strict";var a;var r=e.InvisibleMessageMode;var o=s.extend("sap.ui.core.InvisibleMessage",{constructor:function(){s.apply(this,arguments);if(a){i.warning("This is a singleton, therefore you are not able to create another instance of this class.");return a}a=this}});o.getInstance=function(){if(!a){a=new o("__invisiblemessage",{})}return a};o.prototype.init=function(){var e=n.getDomRef();if(!e){t.ready(()=>{this._insertInstances()})}else{this._insertInstances()}};o.prototype.announce=function(e,t){var s=n.getDomRef(),a=s.querySelector(".sapUiInvisibleMessagePolite"),o=s.querySelector(".sapUiInvisibleMessageAssertive");if(!a||!o){return}var l=t===r.Assertive?o:a;l.textContent="";l.textContent=e;if(t!==r.Assertive&&t!==r.Polite){i.info("You have entered an invalid mode. Valid values are: "+'"Polite" '+'and "Assertive".'+' The framework will automatically set the mode to "Polite".')}setTimeout(function(){if(l.textContent===e){l.textContent=""}},3e3)};o.prototype.getPoliteInstance=function(){var e=this.getId();return'<span id="'+e+"-polite"+'" data-sap-ui="'+e+"-polite"+'" class="sapUiInvisibleMessagePolite" role="status" aria-live="polite">'+"</span>"};o.prototype.getAssertiveInstance=function(){var e=this.getId();return'<span id="'+e+"-assertive"+'" data-sap-ui="'+e+"-assertive"+'" class="sapUiInvisibleMessageAssertive" role="status" aria-live="assertive">'+"</span>"};o.prototype._insertInstances=function(){var e=n.getDomRef();e.insertAdjacentHTML("beforeend",this.getPoliteInstance());e.insertAdjacentHTML("beforeend",this.getAssertiveInstance())};return o});
//# sourceMappingURL=InvisibleMessage.js.map