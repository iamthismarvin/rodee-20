const commands = require('./commands.js');

const parser = (command) => {
  const regexpSingle = /^r1d([0-9]{1,3}[t]?)([a|d])?([+-]\d*)?$/;
  const regexpMultiple = /^r([1-9][0-9]{0,1})d([0-9]{1,3}[t]?)([+-]\d*)?$/;
  const regexpCommand = /^rodee20\s[-]([a-z])$/;
  const matchSingle = regexpSingle.exec(command);
  const matchMultiple = regexpMultiple.exec(command);
  const matchCommand = regexpCommand.exec(command);
  const availableDice = [4, 6, 8, 10, '10t', 12, 20, 100];
  if (matchSingle) {
    const values = {
      d: matchSingle[1] === '10t' ? '10t' : parseInt(matchSingle[1], 10),
      ad: matchSingle[2],
      b: parseInt(matchSingle[3], 10),
    };
    if (availableDice.includes(values.d)) {
      return commands.singleRoll(values.d, values.ad, values.b);
    }
  }
  if (matchMultiple) {
    const values = {
      r: parseInt(matchMultiple[1], 10),
      d: matchMultiple[2] === '10t' ? '10t' : parseInt(matchMultiple[2], 10),
      b: parseInt(matchMultiple[3], 10),
    };
    if (availableDice.includes(values.d)) {
      return commands.multipleRoll(values.r, values.d, values.b);
    }
  }
  if (matchCommand) {
    const value = matchCommand[1];
    switch (value) {
      case 'g':
        return commands.greeting();
      case 'h':
        return commands.help();
      case 's':
        return commands.stat();
      default: {
        break;
      }
    }
  }
  return null;
};

module.exports = { parser };
