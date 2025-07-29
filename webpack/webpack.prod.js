/**
 * Webpack 生产环境配置
 * 包含生产环境特有配置：
 * 1. 代码压缩优化
 * 2. CSS提取
 * 3. 长效缓存
 */

const buildConfig = require('./webpack.common');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

/**
 * 生产环境配置
 */
module.exports = buildConfig({
  /**
   * 优化配置
   */
  optimization: {
    minimize: true, // 启用压缩
    minimizer: [
      new TerserPlugin({ // JS压缩
        parallel: true, // 启用多进程压缩
        extractComments: false, // 不提取注释到单独文件
      }),
      new CssMinimizerPlugin(), // CSS压缩
    ],
    splitChunks: {
      chunks: 'all', // 优化代码分割
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
      },
    },
  },
});
