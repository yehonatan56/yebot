const word = require("./reapet/word");
module.exports.bot = (msg) => {
  console.log("bot is running");
  return word(msg);
};
