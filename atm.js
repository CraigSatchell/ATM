"use strict";

const prompt = require("prompt-sync")();
const { _appName, promptFor } = require('./helper');


// get account balance
function getBalance(account) {
   const holder = account.holder.split(' ')[0];
   console.log(`\n\t\t${holder}, your current balance is $${account.balance}`);
}

// make cash withdrawal
function withdraw(account) {
   let amt = promptFor("Enter Withdrawal $ ");
   amt = Number(amt);
   if (amt > 0) {
      if (account.balance - amt >= 0) {
         console.log(`\n\t\tYou withdrew: $${amt}`);
      } else {
         console.log('\n\t\tYour request exceeds*** your available balance.')
      }
   } else {
      console.log('\n\t\tYour entry was invalid. Try Again.');
   }

}

// deposit cash
function deposit(account) {
   let amt = promptFor("Enter Deposit $ ");
   amt = Number(amt);
   if (amt > 0) {
      console.log(`\n\t\tYou deposited: $${amt}`);
   } else {
      console.log('\n\t\tYour entry was invalid. Try Again.');
   }

}


// validate ATM pin
function validatePin(account) {
   let attempts = 0;
   while (attempts < 3) {
      let pin = promptPin();
      if (pin === '') {
         if (pin === account.pin) { // check valid
            return true // set _signedOn = true
         } else {
            console.log('Invalid PIN...')
         }
      }
      attempts++;
   }
   console.log('\n\t\tToo many attempts...');
   return false; // set _signedOn = false
}


// prompt user for pin
function promptPin() {
   console.log('\n');
   return promptPassword('\t\tPIN: ');
}

function exitATM() {
   console.log(`\n\t\tThanks for choosing ${_appName}...\n\n`)
}


// module exports
module.exports.getBalance = getBalance;
module.exports.deposit = deposit;
module.exports.promptPin = promptPin;
module.exports.validatePin = validatePin;
module.exports.withdraw = withdraw;
module.exports.exitATM = exitATM;