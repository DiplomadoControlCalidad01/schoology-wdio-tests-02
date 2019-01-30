let defaultConfig = require('./wdio.conf.js').config;

const {browserstack} = require('./environment');

defaultConfig.user = browserstack.user;
defaultConfig.key = browserstack.key;

defaultConfig.services = ['browserstack'];

defaultConfig.capabilities = [{
    // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    // grid with only 5 firefox instances available you can make sure that not more than
    // 5 instances get started at a time.
    maxInstances: 1,
    //
    'os' : browserstack.os,
    'os_version' : browserstack.os_version,
    'browserName' : browserstack.browser,
    'browser_version' : browserstack.browser_version
}];

exports.config = defaultConfig;