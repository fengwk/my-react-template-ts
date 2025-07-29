/**
 * Jest 配置文件
 * 用于配置React+TypeScript项目的单元测试环境
 */

module.exports = {
  /**
   * 测试环境
   * jsdom: 模拟浏览器环境，适合React组件测试
   */
  testEnvironment: 'jsdom',

  /**
   * 测试文件匹配模式
   * - 匹配__tests__目录下的.test.js/.test.ts等文件
   * - 匹配任意位置的文件名包含.test/spec的测试文件
   */
  testMatch: [
    '**/__tests__/**/*.test.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],

  /**
   * 模块文件扩展名
   * 指定Jest可以识别的文件扩展名
   */
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],

  /**
   * 模块路径别名映射
   * - @/ 映射到src目录
   * - 样式文件使用identity-obj-proxy模拟
   */
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      '^~/(.*)$': '<rootDir>/node_modules/$1',
      '\\.(css|less|scss)$': 'identity-obj-proxy'
    },

  /**
   * 文件转换配置
   * 测试环境下禁用Babel转换，直接使用TypeScript编译器
   */
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      babelConfig: false // 禁用Babel转换
    }]
  },

  /**
   * 测试覆盖率配置
   * - collectCoverage: 是否收集覆盖率
   * - collectCoverageFrom: 指定收集覆盖率的文件范围
   */
  collectCoverage: false, // 默认关闭，可通过--coverage参数开启
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', // 收集src下所有js/ts文件
    '!src/**/*.d.ts', // 排除类型声明文件
    '!src/index.tsx', // 排除入口文件
    '!src/**/__tests__/**' // 排除测试目录
  ],

  /**
   * 测试前执行的脚本
   * 用于配置测试环境，如引入jest-dom扩展断言
   */
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}
