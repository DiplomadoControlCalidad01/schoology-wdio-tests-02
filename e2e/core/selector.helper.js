const { constants } = require('./../../environment');

/**
 * Gets a web element based on its selector
 * @param {String} selector - this is the web element locator string, css or XPath
 * @returns {}
 */
module.exports.selector = (selector) =>
  ($(selector).waitForVisible(constants.waitForVisible) ? $(selector) : null );

module.exports.constants = constants;
