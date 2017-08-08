// razzle.config.js

module.exports = {
  modify: (config, {target, dev}, webpack) => {
    // do something to config
    // This doesn't actually do anything b/c semantic-ui doesn't require bundling
    const scssRule = {
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }],
    };
    config.module.rules.push(scssRule);
    return config
  }
}
