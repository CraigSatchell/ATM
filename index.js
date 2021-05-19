"use strict";

const prompt = require("prompt-sync")();
const { getBalance, withdraw, deposit, validatePin, promptPin, exitATM } = require('./atm')
const { pressReturn, appBanner } = require('./helper');
let { _signedOn } = require('./helper');
const { data } = require('./account');


// initialize global variables
let _account = Object.assign(data);

// console.log(data);
// console.log(_account);
// pressReturn();

function mainMenu() {
   if (!_signedOn) {
      _signedOn = validatePin(_account);
      // console.log('signed on:', _signedOn);
   }

   let option = '';
   while (option !== 'X' && _signedOn) {
      console.clear();
      console.log(`\n\t\tHello ${_account.holder.split(' ')[0]}!`);
      appBanner(_account);
         console.log('\t\t1 - Check Balance');
         console.log('\t\t2 - Withdraw Cash');
         console.log('\t\t3 - Deposit Cash');
         console.log('\t\tX - Exit ATM');

      option = prompt('\t\tChoose One: ').toUpperCase();

      switch (option) {
         case '1':   // get account balance
            getBalance(_account);
            pressReturn();
            break;

         case '2':   // make cash withdrawal
            withdraw(_account);
            pressReturn();
            break;

         case '3':   // make cash deposit
            deposit(_account);
            pressReturn();
            break;

         case 'X':   // exit ATM
            exitATM(_account);
            break;
      }
   }
}

function runApp() {
   mainMenu();
}

runApp() // execute application


