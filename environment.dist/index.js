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
  /**
   * Browserstack confirguration
   */
  browserstack: {
    user: "",
    key: "",
    os: "Windows",
    os_version: "10",
    browserName: "Edge",
    browser_version: "18.0"
  },
  /**
   * Docker configuration
   */
  docker: {
    "host": "127.0.0.1",
    "port": "4444"
  }
}
const environmentConfiguration = getEnvironmentConfiguration(generalConfiguracion.environment)

module.exports = { ...generalConfiguracion, ...environmentConfiguration };