const greeting = () => {
  return `Hello, I am Rodee-20! A friendly dice roll discord bot.`;
};

const help = () => {
  return `
  **List of Commands**
  \`!rodee20 -h\`: Get list of commands available.
  \`!r(d#)\`: Roll a dice once.
  \`!r(x)(d#)\`: Roll a dice multiple times.
  \`!r(d#)a\`: Roll a dice with advantage.
  \`!r(d#)d\`: Roll a dice with disadvantage.
  \`!r(d#)(+/-)(#)\`: Roll a dice once and with bonus.
  \`!r(x)(d#)(+/-)(#)\`: Roll a dice multiple times with bonus.
  \`!r(d#)a(+/-)(#)\`: Roll a dice with advantage and bonus.
  \`!r(d#)d(+/-)(#)\`: Roll a dice with disadvantage and bonus.
  \`!rodee20 -s\`: Roll four d6 and take the top three results.
  \`!rodee20 -ds\`: Roll a death saving throw. **(Future Release)**
  \`!rodee20 -dsc\`: Get death saving throw counter. **(Future Release)**
  \`!rodee20 -dsr\`: Resets death saving throw counter. **(Future Release)**
  `;
};

const rd20 = () => {
  const result = Math.floor(Math.random() * (20 - 1) + 1);
  return `rolled a [**${result}**].`;
};

module.exports = { greeting, help, rd20 };
