module.exports = (msg) => {
  if (msg.slice(0, 3) !== "rew") return;
  let output = "";
  let { number, text } = extractNumbers(msg);
  for (let i = 0; i < number; i++) {
    output += text + " ";
  }
  return output;
};
function extractNumbers(str) {
  let match = str.match(/\d+/); // This regex matches one or more digits
  return {
    number: match ? parseInt(match[0]) : 1,
    text: str.split(match[0])[1].trim(),
  };
}
