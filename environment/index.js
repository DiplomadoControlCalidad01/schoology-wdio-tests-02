const getEnvironmentConfiguration = (env) => require(`./env/${env}`);

const generalConfiguracion = {
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
const environmentConfiguration = getEnvironmentConfiguration(generalConfiguracion.environment)

module.exports = {...generalConfiguracion, ...environmentConfiguration};


