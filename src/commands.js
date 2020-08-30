const utilities = require('./utilities.js');

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

const stat = () => {
  const statRoll = [
    utilities.singleRoll(6),
    utilities.singleRoll(6),
    utilities.singleRoll(6),
    utilities.singleRoll(6),
  ];
  const statSort = [...statRoll].sort((a, b) => b - a).slice(0, 3);
  const result = utilities.addDice(statSort);
  return `Your stat roll is [**${statRoll[0]}**] [**${statRoll[1]}**] [**${statRoll[2]}**] [**${statRoll[3]}**] -> Result: [**${result}**].`;
};

const roll = (quantity, dice, ad, bonus) => {
  let result = utilities.singleRoll(dice);
  if (bonus) {
    result += bonus;
  }
  // if (ad) {
  //   switch (ad) {
  //     case 'a':
  //       return ``
  //   }
  // }
  return `rolled a [**${result}**].`;
};

module.exports = { greeting, help, roll, stat };
