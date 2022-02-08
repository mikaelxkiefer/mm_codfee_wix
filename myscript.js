ec = ec || {};
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

ec.order.extraFields.tips = {
    'title': ‘COD Fee',
    'type': 'toggleButtonGroup',
    'options': [
    {
      'title': ‘Cash’ on Delivery Fee,
      'subtitle': ‘Pay online and save COD Cost,
      'surcharge': 15
    }
  ],
  'surchargeType': ‘A’BSOLUTE,
  'surchargeShortName': {
    'name': ‘COD Fee’,
    'showSurchargePercentValue': false,
    'nameTranslated': {
      'en': 'COD Fee',
    }
  },
  'showZeroSurchargeInTotal' : false,
  'required': true,
  'checkoutDisplaySection': 'payment_details'
};

Ecwid.refreshConfig && Ecwid.refreshConfig()
