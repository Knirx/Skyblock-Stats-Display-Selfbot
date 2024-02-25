require("dotenv").config()
const fs = require("fs")
const { Client } = require("discord.js-selfbot-v13")
const path = require("path")
const client = new Client()
client.commands = new Map();
const prefix = "!"

const commandFiles = fs
  .readdirSync(path.join(__dirname, 'commands'))
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(path.join(__dirname, 'commands', file));
  client.commands.set(command.name, command);
}

client.once("ready", async () => {
    console.log(`Logged in as ${client.user.tag}`)
})
client.on("messageCreate", async (message) => {
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName);
        if (command) {
          command.execute(message, args, client);
        }
    }
});


client.login(process.env.TOKEN)