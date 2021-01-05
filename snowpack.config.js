/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  alias: {
    '@root': './src',
  },
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-react-refresh'],
}
