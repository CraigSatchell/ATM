"use strict";

const prompt = require("prompt-sync")();
const {getBalance, withdraw, deposit, validatePin, promptPin, exitATM } = require('./atm')
const { _signedOn, pressReturn, appBanner } = require('./helper');
const { data } = require('./account');


// initialize global variables
let _account = Object.assign(data);

function mainMenu() {
   let option = '';
   while (option !== 'X') {
      console.clear();
      appBanner();
      if (_signedOn) {
         console.log('\t\t1 - Check Balance');
         console.log('\t\t2 - Withdraw Cash');
         console.log('\t\t3 - Deposit Cash');
         console.log('\t\tX - Exit ATM');
      } else {
         _signedOn = getPin();
      }
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
            exitATM();
            break;
      }
   }
}

function runApp() {
   mainMenu();
}

runApp() // execute application


