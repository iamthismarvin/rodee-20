const addDice = (diceArray) => {
  const sum = diceArray.reduce((a, b) => {
    return a + b;
  });
  return sum;
};

const rollDice = (dice) => {
  if (dice === 10) {
    const result = Math.floor(Math.random() * 10 + 1);
    return result === 10 ? 0 : result;
  }
  if (dice === '10t') {
    const result = Math.floor(Math.random() * 10 + 1) * 10;
    return result === 100 ? 0 : result;
  }
  return Math.floor(Math.random() * dice + 1);
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
