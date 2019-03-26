const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV settings gonna be here
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // historyApiFallback: true,
    // noInfo: true,
    contentBase: baseWebpackConfig.externals.paths.dist,
    host: '192.x.x.x',
    port: 8081,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
  ]
})
// export devWebpackConfig
module.exports = new Promise((resolve, reject) => {
 resolve(devWebpackConfig)
})
