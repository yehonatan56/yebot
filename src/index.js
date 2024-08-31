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
  botRes && (await message.reply(botRes));
  return;
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.initialize();
