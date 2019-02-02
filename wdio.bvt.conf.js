const { config } = require('./wdio.conf.js');

Object.assign(config.mochaOpts, { grep: '#BVT'});

exports.config = config