const addDice = (diceArray) => {
  const sum = diceArray.reduce((a, b) => {
    return a + b;
  });
  return sum;
};

const rollDice = (dice) => {
  const availableDice = [4, 6, 8, 10, 12, 20, 100];
  if (availableDice.includes(dice)) {
    return Math.floor(Math.random() * (dice - 1) + 1);
  }
  return null;
};

const textDice = (...rolls) => {
  let text = '';
  rolls.forEach((roll) => {
    text = text.concat(`[**${roll}**]`);
  });
  return text;
};

const advantageTextDice = (d1, d2) => {
  if (d1 > d2) {
    return `[**${d1}**]~~[**${d2}**]~~`;
  }
  if (d1 < d2) {
    return `~~[**${d1}**]~~[**${d2}**]`;
  }
  return `[**${d1}**][**${d2}**]`;
};

module.exports = { addDice, rollDice, textDice, advantageTextDice };
