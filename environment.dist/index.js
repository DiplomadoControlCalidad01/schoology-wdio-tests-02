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
    },
    browserstack: {
        user: "",
        key: "",
        os: "Windows",
        os_version: "10",
        browserName: "Edge",
        browser_version: "18.0"
    },
    docker: {
      
    }
};
const environmentConfiguration = getEnvironmentConfiguration(generalConfiguracion.environment)

module.exports = {...generalConfiguracion, ...environmentConfiguration};


