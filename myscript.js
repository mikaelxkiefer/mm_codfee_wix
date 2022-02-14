Ecwid.OnPageLoaded.add(function (page) {
    if (page.type == "CHECKOUT_PAYMENT_DETAILS") {
        //initialize extra fields
        ec = ec || {};
        ec.order = ec.order || {};
        ec.order.extraFields = ec.order.extraFields || {};

        //wait for changes in the DOM
        const targetNode = document.querySelector('.ec-cart-step--payment .ec-radiogroup__item');
        const observerOptions = {
            childList: true,
            subtree: true
        };

        let observer = new MutationObserver(callback);
        observer.observe(targetNode, observerOptions);

        //function to apply the fee
        function callback() {
            let payment = document.querySelector('.ec-radiogroup__item--checked .ec-radiogroup__title');
            if (payment.innerHTML === 'Cash on Delivery') {
                ec.order.extraFields.surcharge = {
                    'value': 'COD Fee',
                    "options": [
                        {
                            "title": "COD Fee",
                            "surcharge": 15
                        },
                    ],
                    "surchargeShortName": {
                        "name": "COD Fee",
                        "showSurchargePercentValue": false
                    },
                    'surchargeType': 'ABSOLUTE',
                }
                Ecwid.refreshConfig();
            } else {
                ec.order.extraFields.surcharge = {
                    'value': 'Fee',
                    "options": [
                        {
                            "title": "Fee",
                            "surcharge": 0
                        },
                    ],
                    "surchargeShortName": {
                        "name": "Fee",
                        "showSurchargePercentValue": false
                    },
                    'surchargeType': 'PERCENT',
                    'showZeroSurchargeInTotal': false
                }
                Ecwid.refreshConfig();
            }
        }
    }
});
