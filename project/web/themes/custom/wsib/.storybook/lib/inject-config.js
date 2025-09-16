/**
 * Check if the string has the config import and inject it if not.
 * Also, if the string has a @use, inject the config import after it.
 *
 * @param fileContents
 * @returns {*|string}
 */
const injectConfigOnContent = (fileContents) => {
  const configString = '@import "config";';
  if (fileContents.indexOf(configString) > -1) {
    return fileContents;
  }

  const lastIndexOf = fileContents.lastIndexOf('@use');
  if (lastIndexOf > -1) {
    const semiColon = fileContents.indexOf(';', lastIndexOf);
    const start = fileContents.substring(0, semiColon + 1);
    const end = fileContents.substring(semiColon + 1);
    return `${start}${configString}${end}`;
  }

  return `${configString}${fileContents}`;
};

export default injectConfigOnContent;
