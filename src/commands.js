const utilities = require('./utilities.js');

const greeting = () => {
  return `Hello, I am Rodee-20! A friendly dice roll discord bot.`;
};

const help = () => {
  return `
  **List of Commands**
  \`!r1(d#)\`: Roll a dice once.
  \`!r1(d#)a\`: Roll a dice with advantage.
  \`!r1(d#)d\`: Roll a dice with disadvantage.
  \`!r1(d#)(+/-)(#)\`: Roll a dice with bonus.
  \`!r1(d#)a(+/-)(#)\`: Roll a dice with advantage and bonus.
  \`!r1(d#)d(+/-)(#)\`: Roll a dice with disadvantage and bonus.
  \`!r(x)(d#)\`: Roll a dice multiple times.
  \`!r(x)(d#)(+/-)(#)\`: Roll a dice multiple times with bonus.
  \`!rodee20 -h\`: Get list of commands available.
  \`!rodee20 -s\`: Roll four d6 and take the top three results.
  \`!rodee20 -ds\`: Roll a death saving throw. **(Future Release)**
  \`!rodee20 -dsc\`: Get death saving throw counter. **(Future Release)**
  \`!rodee20 -dsr\`: Resets death saving throw counter. **(Future Release)**
  `;
};

const stat = () => {
  const statRoll = [
    utilities.rollDice(6),
    utilities.rollDice(6),
    utilities.rollDice(6),
    utilities.rollDice(6),
  ];
  const statSort = [...statRoll].sort((a, b) => b - a).slice(0, 3);
  const result = utilities.addDice(statSort);
  return `rolled for stat. \n**Roll:** ${utilities.textDice(
    ...statRoll,
  )} \n**Result:** [**${result}**].`;
};

const singleRoll = (dice, advantage, bonus) => {
  const d = [utilities.rollDice(dice), utilities.rollDice(dice)];
  const result = { d1: d[0], d2: d[1] };
  if (bonus) {
    result.d1 += bonus;
    result.d2 += bonus;
  }
  if (advantage) {
    if (advantage === 'a') {
      return `rolled a d${dice} with advantage${
        bonus ? ` and ${bonus} bonus` : ''
      }.${
        bonus
          ? `\n**Before Bonus:** ${utilities.advantageTextDice(d[0], d[1])}`
          : ''
      } \n**Result:** ${utilities.advantageTextDice(result.d1, result.d2)}`;
    }
    if (advantage === 'd') {
      return `rolled a d${dice} with disadvantage${
        bonus ? ` and ${bonus} bonus` : ''
      }.${
        bonus
          ? `\n**Before Bonus:** ${utilities.advantageTextDice(d[0], d[1])}`
          : ''
      } \n**Result:** ${utilities.advantageTextDice(result.d1, result.d2)}`;
    }
  }
  return `rolled a d${dice}${bonus ? ` with ${bonus} bonus` : ''}.${
    bonus ? `\n**Before Bonus:** ${utilities.textDice(d[0])}` : ''
  } \n**Result:** ${utilities.textDice(result.d1)}`;
};

const multipleRoll = (quantity, dice, bonus) => {
  const d = [];
  let count = 0;
  while (count < quantity) {
    d.push(utilities.rollDice(dice));
    count += 1;
  }
  const result = [...d].map((i) => (bonus ? i + bonus : i));
  return `rolled ${quantity} d${dice}${bonus ? ` with ${bonus} bonus` : ''}.${
    bonus ? `\n**Before Bonus:** ${utilities.textDice(...d)}` : ''
  } \n**Result:** ${utilities.textDice(...result)}`;
};

module.exports = { greeting, help, stat, singleRoll, multipleRoll };
