const { constants } = require('./../environment');
module.exports.selector = (selector) => ($(selector).waitForVisible(constants.waitForVisible) ? $(selector) : null );
module.exports.constants = constants;
