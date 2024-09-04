const word = require("./reapet/word");
const wordDelay = require("./reapet/wordDelay");
const char = require("./reapet/char");
module.exports.bot = (msg) => {
  console.log("bot is running");
  return word(msg) || wordDelay(msg) || char(msg);
};
