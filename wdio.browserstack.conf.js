const { user, key, os, os_version, browserName, browser_version } = require('./environment').browserstack;

const { config } = require('./wdio.conf.js');
const configStack = {
    user,
    key,
    services: ['browserstack'],
    capabilities: [{
        maxInstances: 1,
        os,
        os_version,
        browserName,
        browser_version
    }]
}

exports.config = {...config, ...configStack};
