const prompt = require("prompt-sync")();

function pressReturn() {
   prompt('\n\t\tPress RETURN to continue... ');
}


module.exports.pressReturn = pressReturn;