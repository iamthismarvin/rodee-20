const commands = require('./commands.js');

const parser = (command) => {
  const regexpSingle = /^r1d([0-9]{1,3})([a|d])?([+-]\d*)?$/;
  const regexpMultiple = /^r([1-9][0-9]{0,1})d([0-9]{1,3})([+-]\d*)?$/;
  const regexpCommand = /^rodee20\s[-]([a-z])$/;
  const matchSingle = regexpSingle.exec(command);
  const matchMultiple = regexpMultiple.exec(command);
  const matchCommand = regexpCommand.exec(command);
  if (matchSingle) {
    const values = {
      d: parseInt(matchSingle[1], 10),
      ad: matchSingle[2],
      b: parseInt(matchSingle[3], 10),
    };
    return commands.singleRoll(values.d, values.ad, values.b);
  }
  if (matchMultiple) {
    const values = {
      r: parseInt(matchMultiple[1], 10),
      d: parseInt(matchMultiple[2], 10),
      b: parseInt(matchMultiple[3], 10),
    };
    if (matchMultiple !== 1) {
      return commands.roll(values.r, values.d, values.b);
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
