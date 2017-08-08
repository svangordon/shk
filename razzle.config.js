// razzle.config.js

module.exports = {
  modify: (config, {target, dev}, webpack) => {
    // do something to config
    // console.log("========= We're here! =========", config.module.rules[3])
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
