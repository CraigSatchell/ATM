"use strict";

const prompt = require("prompt-sync")();

const _appName = 'TrustBANK';
var _signedOn = false;


// wait for user to press return to continue
function pressReturn(msg='Press RETURN...') {
   prompt(`\n\t\t${msg}`);
}

// display application banner
function appBanner(account) {
   console.log('\t\t' + '*'.repeat(35));
   console.log(`\t\t${_appName} - ATM`);
   console.log('\t\t' + '*'.repeat(35));
}

// prompt for standard data entry
function promptFor(label) {
   console.log('\n');
   return prompt(`\t\t${label}`);
}

// prompt for password entry
function promptPassword(label) {
   return prompt(`\t\t${label}`, { echo: '*' });
}


// module exports
module.exports._appName = _appName;
module.exports._signedOn = _signedOn;
module.exports.pressReturn = pressReturn;
module.exports.appBanner = appBanner;
module.exports.promptFor = promptFor;
module.exports.promptPassword = promptPassword;