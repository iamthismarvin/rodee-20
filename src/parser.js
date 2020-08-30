const commands = require('./commands.js');

const parser = (command) => {
  const regexp = /^r([1-9][0-9]{0,1})d([0-9]{1,3})([a|d])?([+-]\d*)?$/;
  const match = regexp.exec(command);
  const regexp2 = /^rodee20\s[-]([a-z])$/;
  const match2 = regexp2.exec(command);

  if (match) {
    const values = {
      r: parseInt(match[1], 10),
      d: parseInt(match[2], 10),
      ad: match[3],
      b: parseInt(match[4], 10),
    };
    return commands.roll(values);
  }
  if (match2) {
    const value = match2[1];

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
