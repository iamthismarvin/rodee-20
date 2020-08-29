require('dotenv').config();
const Discord = require('discord.js');
const commands = require('./commands.js');

const client = new Discord.Client();
const prefix = '!';

client.on('message', (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const content = message.content.slice(prefix.length);

  switch (content) {
    case 'rodee20 -g':
      message.reply(commands.greeting());
      break;
    case 'rodee20 -h':
      message.reply(commands.help());
      break;
    case 'rd20':
      message.reply(commands.rd20());
      break;
    default: {
      // ! DEBUGGING ONLY
      // message.reply(`Unknown Command: \`${content}\``);
      break;
    }
  }
});

client.login(process.env.BOT_TOKEN);
