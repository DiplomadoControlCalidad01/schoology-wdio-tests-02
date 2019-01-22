const { constants } = require('./../environment');
module.exports = (selector) => ($(selector).waitForVisible(constants.waitForVisible) ? $(selector) : null );
