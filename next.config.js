const {
  i18n
} = require('./i18n.config')

module.exports = {
  reactStrictMode: true,
  i18n,
  async rewrites() {
    return [{
      source: '/',
      destination: '/vi'
    }]
  }
};