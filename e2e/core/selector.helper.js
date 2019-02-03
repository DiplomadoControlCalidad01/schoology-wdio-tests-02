const env = require('./../../environment');

/**
 * Gets a web element based on its selector
 * @param {String} selector - this is the web element locator string, css or XPath
 */
module.exports.selector = (selector) =>
  ($(selector).waitForVisible(env.constants.waitForVisible) ? $(selector) : null );

/**
 * Constants from environments configuratoin
 */
module.exports.constants = {...env.constants};

module.exports.env = {...env};
