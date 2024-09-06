module.exports = (msg) => {
  if (!msg.startsWith("rec")) return;
  const word = msg.split(" ")[1];
  return {
    letters: word.split(""),
  };
};
