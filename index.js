const prompt = require("prompt-sync")();
const { getBalance, withdraw, deposit, validatePin, getPin, exitATM } = require('./atm')
const { pressReturn } = require('./helper');
const { data } = require('./account');

// initialize global variables
let _signedOn = true;
let _account = Object.assign(data);

function mainMenu() {
   let option = '';
   while (option !== 'X') {
      console.clear();
      if (_signedOn) {
         console.log('\n\n\t\t' + '*'.repeat(40));
         console.log('\t\tTrueCASH - ATM BANKING');
         console.log('\t\t' + '*'.repeat(40));
         console.log('\t\t1 - Check Balance');
         console.log('\t\t2 - Withdraw Cash');
         console.log('\t\t3 - Deposit Cash');
         console.log('\t\tX - Exit ATM');
      } else {
         _signedOn = getPin();
      }
      option = prompt('\t\tChoose One: ').toUpperCase();
      
      switch (option) {
         case '1':
            getBalance(_account);
            pressReturn();
            break;
         case '2':
            break;
         case '3':
            break;
         case 'X':
            exitATM();
            break;
      }
   }
}

function runApp() {
   mainMenu();
}

runApp() // execute application