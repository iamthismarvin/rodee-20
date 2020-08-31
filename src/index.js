require('dotenv').config();
const Discord = require('discord.js');
const parser = require('./parser.js');

const client = new Discord.Client();
const prefix = '!';

client.on('message', (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const content = message.content.slice(prefix.length);
  const roll = parser.parser(content);
  if (roll) {
    message.reply(roll);
  }
});

client.login(process.env.BOT_TOKEN);
