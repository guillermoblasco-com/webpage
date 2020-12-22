module.exports = {
  webpack: function (config, { dev }) {
    config.module.rules.push(
      {
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      },
    )
    return config;
  }
}
