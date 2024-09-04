const word = require("./reapet/word");
const wordDelay = require("./reapet/wordDelay");
module.exports.bot = (msg) => {
  console.log("bot is running");
  return word(msg) || wordDelay(msg);
};
