const { merge } = require('webpack-merge');

const webpack = require('webpack');

const common = require('./webpack.common.js');
const { SERVER_HOST, SERVER_PORT } = require('../constant');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  optimization: {
    minimize: false,
    minimizer: [],
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
  },
  devServer: {
    host: SERVER_HOST, // 指定 host，不设置的话默认是 localhost
    port: SERVER_PORT, // 指定端口，默认是8080
    // stats: 'errors-only', // 终端仅打印 error
    // clientLogLevel: 'error', // 日志等级
    compress: true, // 是否启用 gzip 压缩
    open: false, // 打开默认浏览器
    hot: true, // 热更新
    historyApiFallback: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
