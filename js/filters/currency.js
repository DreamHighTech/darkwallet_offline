'use strict';

define(['./module', 'dwutil/currencyformat', 'darkwallet', 'model/TLWalletUtils'], function (filters, CurrencyFormatting, DarkWallet, TLWalletUtils) {

// Filter like currencyFilter adding the + sign for positive amounts.
filters.filter('amountFilter', function() {
  return function(input) {
    var value = CurrencyFormatting.asBtc(input);

    var prefix = (value>=0) ? '+' : '-';
    return prefix + CurrencyFormatting.formatBtc(Math.abs(input), undefined, true);
  };
});

// Filter for presenting a satoshi amount into selected btc unit
filters.filter('formatBtc', function() {
  return function(input, hideSymbol) {
    return CurrencyFormatting.formatBtc(input, undefined, hideSymbol);
  };
});

filters.filter('formatFiat', function() {
  return function(input, hideSymbol) {
    return CurrencyFormatting.formatFiat(input, undefined, hideSymbol);
  };
});

// Filter for presenting a satoshi amount into selected btc unit with unit label
filters.filter('currencyPresenter', function() {
  return function(input) {
    return CurrencyFormatting.format(input);
  };
});

filters.filter('formatProperCurrency', function() {
  return function(input, amountType, hideSymbol) {
    var walletUtils = DarkWallet.getIdentity().appDelegate.walletUtils;
    if (amountType !== TLWalletUtils.TLAccountTxType.SEND) {
      return walletUtils.getProperAmount(input, hideSymbol);
    } else {
      return '-' + walletUtils.getProperAmount(input, hideSymbol);
    }
  };
});

filters.filter('formatProperBitcoin', function() {
  return function(input, hideSymbol) {
    var walletUtils = DarkWallet.getIdentity().appDelegate.walletUtils;
    if (walletUtils) {
      return walletUtils.coinToProperBitcoinAmountStringWithSymbol(input, hideSymbol);
    } else {
      return null;
    }
  };
});

filters.filter('formatProperFiat', function() {
  return function(input, hideSymbol) {
    var walletUtils = DarkWallet.getIdentity().appDelegate.walletUtils;
    if (walletUtils) {
      return walletUtils.coinToProperLocalCurrencyAmountStringWithSymbol(input, hideSymbol);
    } else {
      return null;
    }
  };
});

});
