'use strict';

exports.Defaults = {
  region: 'eu',
  key: null,
  secret: null,
  token: null,
};

exports.ErrorTexts = {
  noKey: 'Options must be have \'key\' property!',
  noSecret: 'Options must be have \'secret\' property!',
  noToken: 'Options must be have \'token\' property!',
};

exports.DeprecatedTexts = {
  rmSoon: 'This method removing next version of CyberPoints! Please see documentation.',
};

exports.SuccessTexts = {
  options: 'All options are valid!',
};
