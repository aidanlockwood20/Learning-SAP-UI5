/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/ControlBehavior","sap/ui/core/Lib","sap/ui/core/Renderer","sap/ui/core/library","sap/ui/Device","sap/base/Log","./library","./ListItemBaseRenderer"],function(e,t,n,a,l,i,s,r){"use strict";var o=s.PopinDisplay;var d=a.VerticalAlign;var p=n.extend(r);p.apiVersion=2;p.render=function(e,t){var n=t.getTable();if(!n){return}r.render.apply(this,arguments);if(t.getVisible()&&n.hasPopin()){this.renderPopin(e,t,n)}};p.makeFocusable=function(e){if(l.system.desktop){e.attr("tabindex","-1");e.class("sapMTblCellFocusable")}};p.openStartGridCell=function(e,t,n,a,l){e.openStart(n,a);e.class(l);e.attr("role","gridcell");e.attr("aria-colindex",t.aAriaOwns.push(a));this.makeFocusable(e);if(t.isSelectable()){e.attr("aria-selected",t.getSelected())}return e};p.renderHighlight=function(e,t){e.openStart("td");e.class("sapMListTblHighlightCell");e.attr("role","presentation");e.openEnd();r.renderHighlight.apply(this,arguments);e.close("td")};p.renderNavigated=function(e,t){e.openStart("td");e.class("sapMListTblNavigatedCell");e.attr("role","presentation");e.openEnd();r.renderNavigated.apply(this,arguments);e.close("td")};p.renderType=function(e,t){var n=t.getTable();if(!n||!n.doItemsNeedTypeColumn()){return}this.openStartGridCell(e,t,"td",t.getId()+"-TypeCell","sapMListTblNavCol").openEnd();r.renderType.apply(this,arguments);e.close("td")};p.renderModeContent=function(e,t){this.openStartGridCell(e,t,"td",t.getId()+"-ModeCell","sapMListTblSelCol").openEnd();r.renderModeContent.apply(this,arguments);e.close("td")};p.renderCounter=function(e,t){};p.getAriaRole=function(e){return"row"};p.getAccessbilityPosition=function(e){var t=e.getTable();if(t){var n=t.getVisibleItems().indexOf(e)+t.hasHeaderRow()+1;return{rowindex:n}}};p.renderLIAttributes=function(e,t){e.class("sapMListTblRow");var n=t.getVAlign();if(n!=d.Inherit){e.class("sapMListTblRow"+n)}var a=t.getTable();if(a){if(a.getAlternateRowColors()){e.class("sapMListTblRowAlternate")}}};p.renderLIContentWrapper=function(t,n){var a=n.getTable();if(!a){return}var l=a.getColumns(true),s=n.getCells();n._destroyClonedHeaders();l.forEach(function(l,r){if(!l.getVisible()||l.isHidden()){return}var o=l.getStyleClass().split(" ").filter(Boolean),p=n.getId()+"-cell"+r,u=s[l.getInitialOrder()],c=l.getVAlign(),g=true;this.openStartGridCell(t,n,"td",p,"sapMListTblCell");t.attr("data-sap-ui-column",l.getId());t.style("text-align",l.getCssAlign());o.forEach(function(e){t.class(e)});if(c!=d.Inherit){t.style("vertical-align",c.toLowerCase())}if(u&&!a.hasPopin()&&l.getMergeDuplicates()){var b=l.getMergeFunctionName(),f=b.split("#"),C=f[1],h=f[0];if(typeof u[h]!="function"){i.warning("mergeFunctionName property is defined on "+l+" but this is not function of "+u)}else if(a._bRendering||!u.bOutput){var L=l.getLastValue(),y=u[h](C);if(L===y){g=e.isAccessibilityEnabled();u.addStyleClass("sapMListTblCellDupCnt");t.class("sapMListTblCellDup")}else{l.setLastValue(y)}}else if(u.hasStyleClass("sapMListTblCellDupCnt")){t.class("sapMListTblCellDup")}}t.openEnd();if(u&&g){this.applyAriaLabelledBy(l.getHeader(),u);t.renderControl(u)}t.close("td")},this)};p.renderDummyCell=function(e,t){e.openStart("td");e.class("sapMListTblDummyCell");e.attr("role","presentation");e.openEnd();e.close("td")};p.applyAriaLabelledBy=function(e,t){if(!e||!e.getText||!e.getVisible()||!t.getAriaLabelledBy){return}if(!t.getAriaLabelledBy().includes(e.getId())){t.addAriaLabelledBy(e)}};p.renderPopin=function(e,n,a){e.openStart("tr",n.getPopin());e.class("sapMListTblSubRow");e.attr("role","none");e.attr("tabindex","-1");e.attr("data-sap-ui-related",n.getId());e.openEnd();this.renderHighlight(e,n);e.openStart("td",n.getId()+"-subcell");e.class("sapMListTblSubRowCell");e.attr("role","none");e.attr("colspan",a.getColCount()-2);e.openEnd();this.openStartGridCell(e,n,"div",n.getId()+"-subcont","sapMListTblSubCnt");e.class("sapMListTblSubCnt"+a.getPopinLayout());e.openEnd();var l=n.getCells(),i=a.getColumns(true);i.forEach(function(i){if(!i.getVisible()||!i.isPopin()){return}var s=l[i.getInitialOrder()];var r=i.getHeader();if(!r&&!s){return}var d=i.getStyleClass().split(" ").filter(Boolean),p=i.getPopinDisplay(),u=r;e.openStart("div");e.class("sapMListTblSubCntRow");if(p==o.Inline){e.class("sapMListTblSubCntRowInline")}d.forEach(function(t){e.class(t)});e.openEnd();if(r&&p!=o.WithoutHeader){e.openStart("div").class("sapMListTblSubCntHdr").openEnd();if(a._aPopinHeaders.indexOf(r)===-1){a._aPopinHeaders.push(u)}r=r.clone();i.addDependent(r);n._addClonedHeader(r);e.renderControl(r);e.openStart("span").class("sapMListTblSubCntSpr");e.attr("data-popin-colon",t.getResourceBundleFor("sap.m").getText("TABLE_POPIN_LABEL_COLON"));e.openEnd().close("span");e.close("div")}if(s){e.openStart("div");e.class("sapMListTblSubCntVal");e.class("sapMListTblSubCntVal"+p);e.openEnd();this.applyAriaLabelledBy(u,s);e.renderControl(s);e.close("div")}e.close("div")},this);e.close("div");e.close("td");this.renderNavigated(e,n);e.close("tr")};p.addLegacyOutlineClass=function(e,t){var n=t.getTable();if(n){if(n.hasPopin()||n.shouldRenderDummyColumn()){e.class("sapMTableRowCustomFocus")}}};p.renderContentLatter=function(e,t){var n=t.getTable();if(n&&n.shouldRenderDummyColumn()){if(!n.hasPopin()){r.renderContentLatter.apply(this,arguments);p.renderDummyCell(e,n)}else{p.renderDummyCell(e,n);r.renderContentLatter.apply(this,arguments)}}else{r.renderContentLatter.apply(this,arguments)}};return p},true);
//# sourceMappingURL=ColumnListItemRenderer.js.map