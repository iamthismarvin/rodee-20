const parser = (command) => {
  const regexp = /^r([1-9][0-9]{0,1})d([0-9]{1,3})([a|d])?([+-]\d*)?$/;
  const match = regexp.exec(command);

  if (match) {
    const values = {
      r: match[1],
      d: match[2],
      ad: match[3],
      b: match[4],
    };
    return values;
  }
  return null;
};

module.exports = { parser };
