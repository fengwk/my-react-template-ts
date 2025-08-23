/**
 * Webpack 开发环境配置
 * 包含开发环境特有配置：
 * 1. 热模块替换(HMR)
 * 2. 开发服务器配置
 * 3. 快速构建优化
 */

require('dotenv').config(); // 加载.env文件
const path = require('path');
const buildConfig = require('./webpack.common');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

/**
 * 开发环境配置
 */
module.exports = buildConfig({
  /**
   * 开发服务器配置
   * 完整文档：https://webpack.js.org/configuration/dev-server/
   *
   * 主要功能：
   * 1. 静态文件服务
   * 2. API代理
   * 3. 热模块替换(HMR)
   * 4. 自动刷新
   */
  devServer: {
    // 静态文件配置
    static: {
      directory: path.join(__dirname, '../dist'), // 静态文件目录
      watch: false, // 禁用静态文件监听，避免不必要的全局刷新
      /**
       * 注意事项：
       * 1. 所有资源(图片/字体等)应通过webpack处理(import/require)
       * 2. 直接修改public/目录下的文件需要手动刷新浏览器
       * 3. 如需自动刷新静态文件，可设为true并接受全局刷新
       */
    },

    // 热更新配置
    hot: true, // 启用热模块替换(HMR) - 局部更新，保持应用状态
    /*
    liveReload: true, // 文件变化时全页面刷新(与HMR冲突时使用)
    */

    // 开发服务器设置
    port: process.env.SERVER_PORT || 9000, // 端口号
    open: false, // 自动打开浏览器
    compress: false, // 启用gzip压缩

    // 代理配置
    proxy: [
      {
        context: ['/api'],// 代理以/api开头的请求
        target: 'http://localhost:8080', // 目标服务器地址
        changeOrigin: true, // 修改请求头中的host为目标地址
        // secure: false // 如果目标使用https需要配置
        // pathRewrite: { '^/api': '' }, // 重写路径(去掉/api前缀)
      }
    ],

    // 其他常用配置
    client: {
      overlay: { // 编译错误时在浏览器显示遮罩层
        errors: true,
        warnings: false,
      },
      progress: true, // 在浏览器显示编译进度
    },

    historyApiFallback: true, // 支持HTML5 History API
  },

  /**
   * 开发工具配置
   */
  devtool: 'cheap-module-source-map', // 快速source map

  /**
   * 插件配置
   */
  plugins: [
    // React组件热更新插件
    new ReactRefreshWebpackPlugin(),
  ],
});
