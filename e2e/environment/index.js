const getEnvironmentConfiguration = require('./env');

const configuracion = {
    environment: 'test',
    /**
     * Define constants
     */
    constants: {
        /**
         * Wait for element to be visible time in milliseconds
         */
        waitForVisible: 30000
    }
};

module.exports = Object.assign(configuracion, getEnvironmentConfiguration(configuracion.environment));
