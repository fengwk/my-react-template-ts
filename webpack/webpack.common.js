/**
 * Webpack 基础配置文件 (公共配置)
 * 包含开发和生产环境共享的配置
 *
 * 主要功能：
 * 1. 处理TypeScript/React代码
 * 2. 处理样式(CSS/Less) - 支持模块化
 * 3. 处理静态资源(图片/字体/SVG)
 * 4. 生成HTML入口文件
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

// 开发环境使用style-loader支持热加载
const cssExtractLoader = process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader';

/**
 * PostCSS配置
 * 用途：自动添加浏览器前缀，处理CSS兼容性
 * 插件：autoprefixer - 根据browserslist配置自动添加前缀
 * 配置说明：支持全球使用率>1%的浏览器的最后两个版本
 */
const postcssLoader = {
  loader: 'postcss-loader', // 使用postcss-loader处理CSS
    options: {
      postcssOptions: {
        plugins: [
          'autoprefixer' // 使用.browserslistrc配置
        ]
      }
    }
};

/**
 * CSS模块Loader配置
 * 用途：处理CSS模块化的统一loader配置
 * 使用场景：CSS模块和Less模块共享此配置
 */
const cssModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      localIdentName: '[local]__[hash:base64:5]', // 生成的类名格式
      namedExport: false, // 使用默认导出而不是命名导出
      exportLocalsConvention: 'camelCase' // 类名格式转换
    }
  }
};

/**
 * Webpack基础配置对象
 */
module.exports = function (config) {
  return merge({
    mode: process.env.NODE_ENV || 'development',

    /**
     * 入口配置
     * 说明：指定应用的主入口文件
     * 路径：src/index.tsx (TypeScript React入口)
     */
    entry: path.resolve(__dirname, '../src/index.tsx'),

    /**
     * 输出配置
     * 说明：控制打包后文件的输出方式
     * 特性：
     * - 输出到dist目录
     * - 使用[name].[contenthash].js命名，实现长效缓存
     */
    output: {
      path: path.resolve(__dirname, '../dist'), // 输出目录
      filename: '[name].[contenthash].js', // 使用内容hash命名
    },

    /**
     * 模块解析配置
     * 说明：控制如何解析模块
     * 特性：
     * - 自动解析.ts/.tsx/.js/.jsx扩展名
     * - 允许省略文件扩展名(如import './App')
     * - 配置路径别名，与Jest配置保持一致
     */
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'], // 自动解析的扩展名
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '~': path.resolve(__dirname, '../node_modules')
    }
    },

    /**
     * 模块处理规则
     * 说明：定义各种文件类型的处理方式
     * 结构：test匹配文件类型，use指定处理loader
     */
    module: {
      rules: [
        // TypeScript文件处理 - 使用Babel转换TypeScript
        {
          test: /\.(ts|tsx)$/, // 匹配.ts和.tsx文件
          exclude: /node_modules/, // 排除node_modules目录
          use: 'babel-loader', // 使用babel-loader配合@babel/preset-typescript处理
        },

        // 普通CSS文件处理 - 非模块化CSS
        {
          test: /\.css$/, // 匹配.css文件
          exclude: /\.module\.css$/, // 排除模块化CSS文件
          use: [
            cssExtractLoader, // 将CSS注入到DOM中
            'css-loader', // 解析CSS中的@import和url()
            postcssLoader // 处理CSS后处理(如autoprefixer)
          ].filter(Boolean),
          sideEffects: true // 标记CSS文件有副作用(避免被tree-shaking误删)
        },
        // CSS模块处理 - 支持CSS Modules
        {
          test: /\.module\.css$/, // 匹配.module.css文件
          use: [
            cssExtractLoader, // 将CSS注入到DOM中
            cssModuleLoader, // 使用统一的CSS模块loader配置
            postcssLoader // CSS后处理
          ].filter(Boolean),
          // 在package.json中如果错误设置sideEffects为false，webpack在打包时会认为整个项目都是无副作用的
          // 部分三方库会错误设置sideEffects参数，此时如果引入其中的css文件import xxx/xxx.css会出现问题
          // 由于没有在js代码中使用引入的css文件，webpack会认为这个模块的引入是可以忽略的（因为该库被声明为无副作用）
          // 这样就会导致css文件不会被打包，从而导致样式丢失
          // See https://github.com/webpack/webpack/issues/6571
          sideEffects: true // 标记有副作用
        },
        // 普通Less文件处理 - 非模块化Less
        {
          test: /\.less$/, // 匹配.less文件
          exclude: /\.module\.less$/, // 排除模块化Less文件
          use: [
            cssExtractLoader, // 注入样式
            'css-loader', // 解析CSS
            postcssLoader, // 自动前缀
            'less-loader' // 编译Less为CSS
          ].filter(Boolean),
          sideEffects: true // 标记有副作用
        },
        // Less模块处理 - 支持Less Modules
        {
          test: /\.module\.less$/, // 匹配.module.less文件
          use: [
            cssExtractLoader, // 注入样式
            cssModuleLoader, // 使用统一的CSS模块loader配置
            postcssLoader, // 自动前缀
            'less-loader' // 编译Less为CSS
          ].filter(Boolean),
          sideEffects: true // 标记有副作用
        },
        // SVG文件处理 - 使用@svgr转换为React组件
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, // 匹配.svg文件(可带版本号)
          use: [
            'babel-loader', // 用Babel处理转换后的组件
            {
              loader: '@svgr/webpack', // 将SVG转换为React组件
              options: {
                babel: false, // 不使用Babel配置
                icon: true // 优化为图标使用
              }
            }
          ]
        },
        // 图片资源处理 - png/jpg/gif
        {
          test: /\.(png|jpg|gif)$/, // 匹配图片文件
          type: 'asset/resource', // 作为静态资源处理
          generator: {
            // 输出到images目录，使用hash命名
            filename: 'images/[hash][ext][query]'
          }
        },
        // 字体文件处理 - woff/woff2等
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/, // 匹配字体文件
          type: 'asset/resource', // 作为静态资源处理
          generator: {
            // 输出到fonts目录，使用hash命名
            filename: 'fonts/[hash][ext][query]'
          }
        }
      ],
    },

    /**
     * 插件配置
     * 说明：扩展webpack功能的工具
     * 包含插件：
     * 1. CleanWebpackPlugin - 每次构建前清理dist目录
     * 2. HtmlWebpackPlugin - 根据模板生成HTML文件，自动注入打包后的资源
     */
    plugins: [
      new CleanWebpackPlugin(), // 构建前清理dist目录
      process.env.NODE_ENV === 'production' && new MiniCssExtractPlugin({ // 提取css到文件中
        // filename: '[contenthash:8].css' // 使用hash命名css文件名称
        // 使用hash值会导致热更新失效，生产环境再使用hash值
        // https://blog.csdn.net/weixin_42349568/article/details/124287361
        filename: config.mode == 'development' && '[name].css' || '[contenthash:8].css',
        chunkFilename: config.mode == 'development' && '[name].chunk.css' || 'css/[name].[contenthash:8].chunk.css'
      }),
      new HtmlWebpackPlugin({ // 生成HTML文件
        template: path.resolve(__dirname, '../src/index.html'), // 使用自定义模板
        title: 'TypeScript React App', // 设置HTML标题
        filename: 'index.html', // 输出文件名
        inject: 'body', // 注入位置
        minify: process.env.NODE_ENV === 'production' // 生产环境压缩HTML
      }),
    ].filter(Boolean),
  }, config);
}
