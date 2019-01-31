const { config } = require('./wdio.conf.js');

Obejct.assign(config.mochaOpts, { grep: '#BVT'});

exports.config = config