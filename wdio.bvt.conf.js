const { config } = require('./wdio.conf.js');

Object.assign(config.mochaOpts, { grep: '#BVT|#Acceptance'});

exports.config = config