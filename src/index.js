const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const { bot } = require("./bot");

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("ready", () => {
  console.log("Client is ready!");
});
client.on("message_create", async (message) => {
  console.log(message.body);
  const botRes = bot(message.body);
  let count = 0;
  let interval;
  try {
    if (botRes.text) {
      interval = setInterval(async () => {
        count++;
        await message.reply(botRes.text);
        if (count === botRes.number) {
          clearInterval(interval);
        }
      }, botRes.delay * 1000);
    }

    typeof botRes === "string" ? await message.reply(botRes) : null;
    botRes.letters
      ? botRes.letters.map(async (letter) => await message.reply(letter))
      : null;
  } catch (error) {
    console.log("error", error);
  }
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.initialize();
