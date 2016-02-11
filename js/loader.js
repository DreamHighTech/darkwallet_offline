/**
 * configure RequireJS
 * prefer named modules to long paths
 */
'use strict';

requirejs.config({
  baseUrl: '../js',
  paths: {
    '_': 'filters/i18n',

  },
  
  /**
   * for libs that either do not support AMD out of the box
   */
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-animate': {
      deps: ['angular']
    },
    'angular-route': {
      deps: ['angular']
    },
    'mm.foundation': {
      deps: ['angular']
    },
    'angular-xeditable': {
      deps: ['angular']
    },
    'angular-translate': {
      deps: ['angular']
    },
    'angular-translate-loader-static-file': {
      deps: ['angular', 'angular-translate']
    },
    'ngProgress': {
      deps: ['angular']
    },
    'toaster': {
      deps: ['angular']
    },
    'angular-moment': {
      deps: ['moment', 'angular']
    },
    'qrcodejs': {
      exports: 'QRCode'
    },
    'crypto-js': {
      exports: 'CryptoJS'
    },
    'jsqrcode': {
      exports: 'qrcode'
    },
    'darkwallet': {
      exports: 'DarkWallet'
    },
    'identicon': {
      deps: ['pnglib'],
      exports: 'Identicon'
    },
    'pnglib': {
      exports: 'PNGlib'
    },
    'sjcl-real': {
      exports: 'sjcl'
    },
    'bitcoinjs-lib': {
      deps: ['bitcoinjs-lib-real', 'convert'],
      exports: 'Bitcoin'
    }
  }
});
