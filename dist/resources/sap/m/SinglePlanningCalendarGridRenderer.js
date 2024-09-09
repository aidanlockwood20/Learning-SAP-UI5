/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/Localization","sap/ui/core/Element","sap/ui/unified/calendar/CalendarDate","sap/ui/unified/calendar/CalendarUtils","sap/ui/core/date/UniversalDate","sap/ui/core/IconPool","sap/ui/core/InvisibleText","./PlanningCalendarLegend","sap/ui/unified/library","sap/ui/unified/calendar/RecurrenceUtils","sap/ui/core/date/UI5Date"],function(e,t,a,l,n,r,s,o,i,d,p){"use strict";var c=.125;var g=.125;var u=.0625;var S=i.CalendarDayType;var f={apiVersion:2};f.render=function(e,t){e.openStart("div",t);e.class("sapMSinglePCGrid");e.openEnd();e.renderControl(t.getAggregation("_columnHeaders"));this.renderBlockersContainer(e,t);e.openStart("div");e.class("sapMSinglePCGridContent");e.openEnd();this.renderRowHeaders(e,t);this.renderNowMarker(e,t);this.renderColumns(e,t);e.close("div");e.close("div")};f.renderBlockersContainer=function(e,n){var r=n._getColumns(),i=n._getBlockersToRender().iMaxlevel,d=n.getStartDate(),p=(i+1)*n._getBlockerRowHeight()+.1875,c=n._getDateFormatter(),g=n._getSpecialDates(),u=a.fromLocalJSDate(d),S=n._getColumnHeaders()._getDateTypes(u),f,C;e.openStart("div");e.attr("role","grid");e.class("sapMSinglePCBlockersRow");e.openEnd();e.openStart("div");e.attr("role","row");e.class("sapMSinglePCBlockersColumns");if(g&&n._getColumns()===1){if(S&&S[0]){f=S[0];e.class("sapUiCalItem"+f.type);C=o.findLegendItemForItem(t.getElementById(n._sLegendId),f)}e.class("sapMSpecialDaysInDayView")}e.style("height",p+"rem");e.openEnd();this.renderDndPlaceholders(e,n,n.getAggregation("_blockersPlaceholders"));for(var v=0;v<r;v++){var m=new a(d.getFullYear(),d.getMonth(),d.getDate()+v);e.openStart("div");e.attr("role","gridcell");e.attr("data-sap-start-date",c.format(m.toLocalJSDate()));e.attr("data-sap-end-date",c.format(m.toLocalJSDate()));e.attr("aria-labelledby",s.getStaticId("sap.m","SPC_BLOCKERS")+" "+"fullDay-"+c.format(m.toLocalJSDate())+"-Descr");e.class("sapMSinglePCBlockersColumn");e.attr("tabindex",-1);if(n._checkDateSelected(m)&&r>1){this.renderSelectedRowBorders(e,n,v,m,r,"Blocker")}if(m.isSame(new a)){e.class("sapMSinglePCBlockersColumnToday")}if(l._isWeekend(m,n._getCoreLocaleData())){e.class("sapMSinglePCBlockersColumnWeekend")}e.openEnd();e.openStart("span","fullDay-"+c.format(m.toLocalJSDate())+"-Descr");e.class("sapUiInvisibleText");e.openEnd();e.text(n._getCellStartEndInfo(m.toLocalJSDate()));if(n._sLegendId&&C){e.text(C)}if(n._doesContainBlockers(m)){e.text(n._getCellDescription())}e.close("span");e.close("div")}this.renderBlockers(e,n);e.close("div");e.close("div")};f.renderSelectedRowBorders=function(e,t,l,n,r,s){var o=new a(n.toLocalJSDate().getFullYear(),n.toLocalJSDate().getMonth(),n.toLocalJSDate().getDate()-1);var i=new a(n.toLocalJSDate().getFullYear(),n.toLocalJSDate().getMonth(),n.toLocalJSDate().getDate()+1);e.class("sapUiCalColumnSelected");if(l==0&&t._checkDateSelected(i)){e.class("sapUiCalColumnSelectedStart"+s)}else if(l==0&&!t._checkDateSelected(i)){e.class("sapUiCalColumnSingleSelect"+s)}else if(l===r-1&&t._checkDateSelected(o)){e.class("sapUiCalColumnSelectedEnd"+s)}else if(l===r-1&&!t._checkDateSelected(o)){e.class("sapUiCalColumnSingleSelect"+s)}else if(t._checkDateSelected(o)&&t._checkDateSelected(i)){e.class("sapUiCalColumnSelectedBetween"+s)}else if(t._checkDateSelected(o)){e.class("sapUiCalColumnSelectedEnd"+s)}else if(t._checkDateSelected(i)){e.class("sapUiCalColumnSelectedStart"+s)}else{e.class("sapUiCalColumnSingleSelect"+s)}};f.renderBlockers=function(e,t){var a=this,l=t._getBlockersToRender().oBlockersList;e.openStart("div");e.attr("role","gridcell");e.openEnd();e.openStart("div");e.attr("role","list");e.attr("aria-labelledby",s.getStaticId("sap.m","SPC_BLOCKERS"));e.class("sapMSinglePCBlockers");e.class("sapUiCalendarRowVisFilled");e.openEnd();l.getIterator().forEach(function(l){a.renderBlockerAppointment(e,t,l)});e.close("div");e.close("div")};f.renderBlockerAppointment=function(t,n,r){var o=a.fromLocalJSDate(n.getStartDate()),i=r.getData(),d=a.fromLocalJSDate(i.getStartDate()),p=a.fromLocalJSDate(i.getEndDate()),c=l._daysBetween(d,o),g=l._daysBetween(p,o),u=n._getColumns(),f=n._getBlockerRowHeight(),C=r.level,v=r.width,m=i.getTooltip_AsString(),b=i.getType(),D=i.getColor(),_=i.getTitle(),A=i.getText(),h=i.getIcon(),E=i.getId(),M={role:"listitem",labelledby:{value:s.getStaticId("sap.ui.unified","CALENDAR_ALL_DAY_PREFIX"),append:true},selected:null},y=n.getAriaLabelledBy(),P=c*(100/u),T=(u-g-1)*(100/u),w=e.getRTL(),I;if(y.length>0){M["labelledby"].value=M["labelledby"].value+" "+y.join(" ")}if(_){M["labelledby"].value=M["labelledby"].value+" "+E+"-Title"}M["labelledby"].value=M["labelledby"].value+" "+E+"-Descr";if(A){M["labelledby"].value=M["labelledby"].value+" "+E+"-Text"}if(i.getTentative()){M["labelledby"].value=M["labelledby"].value+" "+s.getStaticId("sap.ui.unified","APPOINTMENT_TENTATIVE")}if(i.getSelected()){M["describedby"]={value:s.getStaticId("sap.ui.unified","APPOINTMENT_SELECTED"),append:true}}t.openStart("div",i);t.attr("data-sap-level",C);t.attr("data-sap-width",v);t.attr("tabindex",0);if(m){t.attr("title",m)}t.accessibilityState(i,M);t.class("sapMSinglePCAppointmentWrap");t.class("sapUiCalendarRowApps");if(!D&&b!==S.None){t.class("sapUiCalendarApp"+b)}if(D){if(e.getRTL()){t.style("border-right-color",D)}else{t.style("border-left-color",D)}}t.style("top",f*C+.0625+"rem");t.style(w?"right":"left",Math.max(P,0)+"%");t.style(w?"left":"right",Math.max(T,0)+"%");t.openEnd();t.openStart("div");t.class("sapUiCalendarApp");if(i.getSelected()){t.class("sapUiCalendarAppSel")}if(i.getTentative()){t.class("sapUiCalendarAppTent")}if(h){t.class("sapUiCalendarAppWithIcon")}t.openEnd();t.openStart("div");t.class("sapUiCalendarAppCont");if(D&&!i.getSelected()){t.style("background-color",i._getCSSColorForBackground(D))}t.openEnd();if(P<0){I=["sapUiCalendarAppArrowIconLeft","sapUiCalendarAppArrowIcon"];t.icon("sap-icon://arrow-left",I,{title:null,role:"img"})}if(h){I=["sapUiCalendarAppIcon"];var k={};k["id"]=E+"-Icon";k["title"]=null;k["role"]="img";t.icon(h,I,k)}if(_){t.openStart("span",E+"-Title");t.class("sapUiCalendarAppTitle");t.openEnd();t.text(_,true);t.close("span")}if(T<0){I=["sapUiCalendarAppArrowIconRight","sapUiCalendarAppArrowIcon"];t.icon("sap-icon://arrow-right",I,{title:null,role:"img"})}t.openStart("span",E+"-Descr");t.class("sapUiInvisibleText");t.openEnd();t.text(n._getAppointmentAnnouncementInfo(i));t.close("span");t.close("div");t.close("div");t.close("div")};f.renderRowHeaders=function(e,t){var a=t._getVisibleStartHour(),l=t._getVisibleEndHour(),n=p.getInstance(),r=t._getHoursFormat(),s=t._getAMPMFormat();e.openStart("div");e.class("sapMSinglePCRowHeaders");e.openEnd();for(var o=a;o<=l;o++){n.setHours(o);e.openStart("span");e.class("sapMSinglePCRowHeader");e.class("sapMSinglePCRowHeader"+o);if(t._shouldHideRowHeader(o)){e.class("sapMSinglePCRowHeaderHidden")}e.openEnd();e.text(r.format(n));if(t._hasAMPM()){e.openStart("span");e.class("sapMSinglePCRowHeaderAMPM");e.openEnd();e.text(" "+s.format(n));e.close("span")}e.close("span")}e.close("div")};f.renderColumns=function(e,t){var l=t._getColumns(),n=t.getStartDate(),r=t._getAppointmentsToRender();e.openStart("div");e.attr("role","grid");e.attr("aria-labelledby",s.getStaticId("sap.m","SPC_APPOINTMENTS"));e.class("sapMSinglePCColumns");e.openEnd();for(var o=0;o<l;o++){var i=new a(n.getFullYear(),n.getMonth(),n.getDate()+o),d=t._getDateFormatter(),p=d.format(i.toLocalJSDate());e.openStart("div");e.attr("role","row");e.attr("data-sap-day",p);e.class("sapMSinglePCColumn");if(t._checkDateSelected(i)&&l>1){this.renderSelectedRowBorders(e,t,o,i,l,"Column")}if(i.isSame(new a)){e.class("sapMSinglePCColumnToday")}if(t._isNonWorkingDay(i)){e.class("sapMSinglePCColumnWeekend")}e.openEnd();this.renderDndPlaceholders(e,t,t._dndPlaceholdersMap[i]);this.renderRows(e,t,p,i);this.renderAppointments(e,t,r[p],i,o);e.close("div")}e.close("div")};f.renderDndPlaceholders=function(e,t,a){e.openStart("div");e.class("sapMSinglePCOverlay");e.openEnd();a.forEach(e.renderControl,e);e.close("div")};f.renderRows=function(e,t,a,l){const n=t._getVisibleStartHour();const r=t._getVisibleEndHour();const s=t._getDateFormatter();const o=t._parseDateStringAndHours(a,0);const i=t._isNonWorkingDay(l)?[]:t.getNonWorkingPeriods().filter(e=>{if(!e.isRecurring()){return e.getStartDate()>=o&&e.getEndDate()<=o}const t=d.hasOccurrenceOnDate.bind(e);return t(o)}).sort((e,t)=>e.getStartDate().getMinutes()-t.getStartDate().getMinutes()||e.getEndDate().getMinutes()-t.getEndDate().getMinutes());for(let l=n;l<=r;l++){const n=t._parseDateStringAndHours(a,l);const r=p.getInstance(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours()+1);const o=i.filter(e=>e.hasNonWorkingAtHour(n));e.openStart("div");e.attr("role","gridcell");e.class("sapMSinglePCRow");if(!t._isVisibleHour(l)){e.class("sapMSinglePCNonWorkingRow")}e.attr("data-sap-hour",l);e.attr("data-sap-start-date",s.format(n));e.attr("data-sap-end-date",s.format(r));e.attr("aria-labelledby",s.format(n)+"-Descr");e.attr("tabindex",-1);e.openEnd();e.openStart("span",s.format(n)+"-Descr");e.class("sapUiInvisibleText");e.openEnd();e.text(t._getCellStartEndInfo(n,r));if(t._doesContainAppointments(n,r)){e.text(t._getCellDescription())}e.close("span");if(!o?.length){e.close("div");continue}d.getWorkingAndNonWorkingSegments(n,o).forEach(t=>{if(t.type==="working"){this.renderWorkingParts(e,t.duration)}else{this.renderNonWorkingParts(e,t.duration)}});e.close("div")}};f.renderAppointments=function(e,t,a,l,n){var r=this,s=0;if(a){e.openStart("div");e.attr("role","gridcell");e.openEnd();e.openStart("div");e.attr("role","list");e.class("sapMSinglePCAppointments");e.class("sapUiCalendarRowVisFilled");e.openEnd();a.oAppointmentsList.getIterator().forEach(function(o){var i=a.iMaxLevel,d=o.level,p=o.width,c=o.getData();r.renderAppointment(e,t,i,d,p,c,l,n,s);s++});e.close("div");e.close("div")}};f.renderAppointment=function(t,r,o,i,d,p,f,C,v){var m=a.fromLocalJSDate(r.getStartDate()),b=new a(m),D=r._getRowHeight(),_=new n(f.getYear(),f.getMonth(),f.getDate(),r._getVisibleStartHour()),A=new n(f.getYear(),f.getMonth(),f.getDate(),r._getVisibleEndHour(),59,59),h=p.getStartDate(),E=p.getEndDate(),M=a.fromLocalJSDate(h),y=a.fromLocalJSDate(E),P=p.getTooltip_AsString(),T=p.getType(),w=p.getColor(),I=p.getTitle(),k=p.getText(),U=p.getIcon(),L=p.getId(),R=p.getCustomContent(),B=!!R.length,x=this._getLineClamp(h,E),H={role:"listitem",labelledby:{value:s.getStaticId("sap.ui.unified","APPOINTMENT"),append:true},selected:null},N=r.getAriaLabelledBy(),W=_.getTime()>h.getTime(),J=A.getTime()<E.getTime(),F=W?0:r._calculateTopPosition(h),V=J?0:r._calculateBottomPosition(E),O=100/(o+1),Y=p.getParent().getEnableAppointmentsDragAndDrop(),z=r.getProperty("scaleFactor"),j=2*z,G,K,$,X,q;b.setDate(b.getDate()+r._getColumns()-1);G=l._daysBetween(M,m);K=l._daysBetween(b,y);$=f.isSame(m);X=f.isSame(b);if(N.length>0){H["labelledby"].value=H["labelledby"].value+" "+N.join(" ")}if(!B&&I){H["labelledby"].value=H["labelledby"].value+" "+L+"-"+C+"_"+v+"-Title"}H["labelledby"].value=H["labelledby"].value+" "+L+"-"+C+"_"+v+"-Descr";if(!B&&k){H["labelledby"].value=H["labelledby"].value+" "+L+"-"+C+"_"+v+"-Text"}if(p.getTentative()){H["labelledby"].value=H["labelledby"].value+" "+s.getStaticId("sap.ui.unified","APPOINTMENT_TENTATIVE")}if(p.getSelected()){H["describedby"]={value:s.getStaticId("sap.ui.unified","APPOINTMENT_SELECTED"),append:true}}t.openStart("div",p.getId()+"-"+C+"_"+v);t.attr("draggable",Y);t.attr("data-sap-ui-draggable",Y);t.attr("data-sap-ui-related",p.getId());t.attr("data-sap-level",i);t.attr("data-sap-width",d);t.attr("tabindex",0);if(P){t.attr("title",P)}t.accessibilityState(p,H);t.class("sapMSinglePCAppointmentWrap");t.class("sapUiCalendarRowApps");if(!w&&T!==S.None){t.class("sapUiCalendarApp"+T)}if(w){if(e.getRTL()){t.style("border-right-color",w)}else{t.style("border-left-color",w)}}t.style("top",F+"rem");t.style("bottom",V+"rem");t.style(e.getRTL()?"right":"left",O*i+"%");t.style("width",O*d+"%");t.openEnd();t.openStart("div");t.class("sapUiCalendarApp");t.style("min-height",(D-(c+g+u)*z)/j+"rem");if(p.getSelected()){t.class("sapUiCalendarAppSel")}if(p.getTentative()){t.class("sapUiCalendarAppTent")}if(!B&&U){t.class("sapUiCalendarAppWithIcon")}t.openEnd();t.openStart("div");t.class("sapUiCalendarAppCont");if(w&&!p.getSelected()){t.style("background-color",p._getCSSColorForBackground(w))}t.openEnd();if($&&G<0){q=["sapUiCalendarAppArrowIconLeft","sapUiCalendarAppArrowIcon"];t.icon("sap-icon://arrow-left",q,{title:null,role:"img"})}if(!B&&U){q=["sapUiCalendarAppIcon"];var Q={};Q["id"]=L+"-Icon";Q["title"]=null;Q["role"]="img";t.icon(U,q,Q)}t.openStart("div");t.class("sapUiCalendarAppTitleWrapper");t.class("sapUiSPCAppLineClamp"+x);t.openEnd();if(!B&&I){t.openStart("span",L+"-"+C+"_"+v+"-Title");t.class("sapUiCalendarAppTitle");t.openEnd();t.text(I,true);t.close("span")}if(!B&&k){t.openStart("span",L+"-"+C+"_"+v+"-Text");t.class("sapUiCalendarAppText");t.openEnd();t.text(k,true);t.close("span")}if(B){R.forEach(function(e){t.renderControl(e)})}t.close("div");if(X&&K<0){q=["sapUiCalendarAppArrowIconRight","sapUiCalendarAppArrowIcon"];t.icon("sap-icon://arrow-right",q,{title:null,role:"img"})}t.openStart("span",L+"-"+C+"_"+v+"-Descr");t.class("sapUiInvisibleText");t.openEnd();t.text(r._getAppointmentAnnouncementInfo(p));t.close("span");t.close("div");if(r.getEnableAppointmentsResize()){this.renderResizeHandles(t,!W,!J)}t.close("div");t.close("div")};f.renderNowMarker=function(e,t){var a=p.getInstance();e.openStart("div",t.getId()+"-nowMarker");e.style("top",t._calculateTopPosition(a)+"rem");e.class("sapMSinglePCNowMarker");if(!t._isVisibleHour(a.getHours())){e.class("sapMSinglePCNowMarkerHidden")}e.openEnd();e.openStart("span",t.getId()+"-nowMarkerText");e.class("sapMSinglePCNowMarkerText");e.openEnd();e.text(t._formatTimeAsString(a));if(t._hasAMPM()){e.openStart("span",t.getId()+"-nowMarkerAMPM");e.class("sapMSinglePCNowMarkerAMPM");e.openEnd();e.text(t._addAMPM(a));e.close("span")}e.close("span");e.close("div")};f.renderResizeHandles=function(e,t,a){if(a){e.openStart("span");e.class("sapMSinglePCAppResizeHandleBottom");e.openEnd();e.close("span")}if(t){e.openStart("span");e.class("sapMSinglePCAppResizeHandleTop");e.openEnd();e.close("span")}};f._getLineClamp=function(e,t){var a=l._minutesBetween(e,t);if(a>=51&&a<69){return"2"}else if(a>=69&&a<90){return"3"}else if(a>=90&&a<110){return"4"}else if(a>=110&&a<130){return"5"}else if(a>=130&&a<150){return"6"}else if(a>=150&&a<170){return"7"}else if(a>=170&&a<190){return"8"}else if(a>=190){return"9"}else{return"1"}};f.renderWorkingParts=function(e,t){const a=t/60*100;e.openStart("div");e.style("height",`${a}%`);e.openEnd();e.close("div")};f.renderNonWorkingParts=function(e,t){const a=t/60*100;e.openStart("div");e.class("sapMSinglePCNonWorkingPeriod");e.style("height",`${a}%`);e.openEnd();e.close("div")};return f},true);
//# sourceMappingURL=SinglePlanningCalendarGridRenderer.js.map