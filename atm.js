const prompt = require("prompt-sync")();

// get account balance
function getBalance(account) {
   const holder = account.holder.split(' ')[0];
   console.log(`\n\t\t${holder}, your current balance is $${account.balance}`);
}

// make cash withdrawal
function withdraw(amt=0, account) {
   console.log(`\n\t\tYou withdrew: $${amt}`);
}

// deposit cash
function deposit(amt=0, account) {
   console.log(`\n\t\tYou deposited: $${amt}`);

}


// validate pin
function validatePin(pin, account) {
   let valid = false;
   return valid
}


// prompt user for pin
function getPin() {
   return prompt('Enter PIN: ');
}

function exitATM() {
   console.log('\n\t\tThanks for choosing TrueCASH...\n\n')
}


// module exports
module.exports.getBalance = getBalance;
module.exports.deposit = deposit;
module.exports.getPin = getPin;
module.exports.validatePin = validatePin;
module.exports.withdraw = withdraw;
module.exports.exitATM = exitATM;