sap.ui.define([
    'sap/ui/core/Control',
    'sap/m/RatingIndicator', 
    'sap/m/Label', 
    'sap/m/Button'
], (Control, RatingIndicator, Label, Button) => {
    "use strict";


    return Control.extend('learning.sap.ui5.control.ProductRating', {
        metadata : {
            properties : { 
                value : { 
                    type: 'float',
                    defaultValue: 0
                }
            },
            aggregations : { 
                _rating : {
                    type: 'sap.m.RatingIndicator',
                    multiple: false,
                    visibility : 'hidden'
                },
                _label : { 
                    type: 'sap.m.Label', 
                    multiple: false,
                    visibility: 'hidden'
                },
                _button : { 
                    type: 'sap.m.Button', 
                    multiple: false,
                    visibility: 'hidden'
                }
            },
            events : { 
                change : { 
                    parameters : { 
                        value : { 
                            type : 'int'
                        }
                    }
                }
            }
        },
        init() { 
            this.setAggregation('_rating', new RatingIndicator({ 
                value: this.getValue(),
                iconSize: '2rem',
                visualMode: 'Half', 
                liveChange: this._onRate.bind(this)
            }));
            this.setAggregation('_label', new Label({ 
                text: "{i18n>productRatingLabelInitial}"
            }).addStyleClass('sapUiSmallMargin'));
            this.setAggregation('_button', new Button({ 
                text: '{i18n>productRatingButton}',
                press: this._onSubmit.bind(this)
            }).addStyleClass('sapUiTinyMarginTopBottom'));
        },

        setValue(fValue) { 
            this.setProperty('value', fValue, true);
            this.getAggregation('_rating').setValue(fValue);

            return this;
        },

        reset() { 
            const oResourceBundle = this.getModel('i18n').getResourceBundle();

            this.setValue(0);
            this.getAggregation('_label').setDesign('Standard');
            this.getAggregation('_rating').setEnabled(true);
            this.getAggregation('_label').setText(oResourceBundle.getText('productRatingLabelInitial'));
            this.getAggregation('_button').setEnabled(true);
        },

        _onRate(oEvent) { 
            const oResourceBundle = this.getModel('i18n').getResourceBundle();
            const fValue = oEvent.getParameter('value');
            
            this.setProperty('value', fValue, true);

            this.getAggregation('_label').setText(oResourceBundle.getText('productRatingLabelIndicator', [fValue, oEvent.getSource().getMaxValue()]));
            this.getAggregation('_label').setDesign('Bold');
        },

        _onSubmit(oEvent) { 
            const oResourceBundle = this.getModel('i18n').getResourceBundle();

            this.getAggregation('_rating').setEnabled(false);
            this.getAggregation('_label').setText(oResourceBundle.getText('productRatingLabelFinal'));
            this.getAggregation('_button').setEnabled(false);
            this.fireEvent('change', { 
                value: this.getValue()
            })
        },

        renderer(oRM, oControl) {
            oRM.openStart('div', oControl);
            oRM.class('myAppDemoWTProductRating');
            oRM.openEnd();
            oRM.renderControl(oControl.getAggregation('_rating'));
            oRM.renderControl(oControl.getAggregation('_label'));
            oRM.renderControl(oControl.getAggregation('_button'));
            oRM.close('div')
        }
    })}
);
