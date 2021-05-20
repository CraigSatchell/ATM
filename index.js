"use strict";

const prompt = require("prompt-sync")();
const { getBalance, withdraw, deposit, validatePin, exitATM } = require('./atm')
const { pressReturn, appBanner } = require('./helper');
let { _signedOn } = require('./helper');
const { data } = require('./account');
const { wallet } = require('./wallet');


// initialize global variables
let _account = Object.assign(data);
let _wallet = Object.assign(wallet);

// console.log(data);
// console.log(_account);
// pressReturn();


// display main application menu
function mainMenu() {
   if (!_signedOn) {
      _signedOn = validatePin(_account);
      // console.log('signed on:', _signedOn);
   }

   let option = '';
   while (option !== 'X' && _signedOn) {
      console.clear();
      console.log(`\n\n\t\tHello ${_account.holder.split(' ')[0]}!`);
      appBanner(_account);
      console.log('\t\t1 - Check Balance');
      console.log('\t\t2 - Withdraw Cash');
      console.log('\t\t3 - Deposit Cash');
      console.log('\t\tX - Exit ATM');

      option = prompt('\t\tChoose One: ').toUpperCase();

      switch (option) {
         case '1':   // get account balance
            getBalance(_account, _wallet);
            pressReturn();
            break;

         case '2':   // make cash withdrawal
            withdraw(_account, _wallet);
            pressReturn();
            break;

         case '3':   // make cash deposit
            deposit(_account, _wallet);
            pressReturn();
            break;

         case 'X':   // exit ATM
            exitATM(_account);
            break;
      }
   }
}

// simulate ATM boot and startup
function bootATM() {
   console.clear();
   console.log('Booting...');
   console.log('ATM connecting to remote services...');
   setTimeout(function () {
      console.clear();
      runApp();
   }
      , 5000);
}


// run application
function runApp() {
   mainMenu();
}


// execute application
bootATM();


