require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();
const prefix = '!';

client.on('message', (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'rodee20') {
    message.reply(`Hello, I am Rodee-20! A friendly dice roll discord bot.`);
  }
});

client.login(process.env.BOT_TOKEN);
