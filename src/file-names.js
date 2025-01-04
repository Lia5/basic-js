const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  const usedNames = new Map();

  return names.map((name) => {
    if (!usedNames.has(name)) {
      usedNames.set(name, 1);
      return name;
    } else {
      let count = usedNames.get(name);
      while (usedNames.has(`${name}(${count})`)) {
        count += 1;
      }
      const newName = `${name}(${count})`;
      usedNames.set(name, count + 1);
      usedNames.set(newName, 1);
      return newName;
    }
  });
}

module.exports = {
  renameFiles
};
