const addDice = (diceArray) => {
  const sum = diceArray.reduce((a, b) => {
    return a + b;
  });
  return sum;
};

const singleRoll = (dice) => {
  const availableDice = [4, 6, 8, 10, 12, 20, 100];
  if (availableDice.includes(dice)) {
    return Math.floor(Math.random() * (dice - 1) + 1);
  }
  return null;
};

module.exports = { addDice, singleRoll };
