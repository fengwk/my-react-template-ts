/**
 * Jest全局测试配置文件
 * 
 * 此文件会在每个测试文件执行前自动运行，用于：
 * 1. 配置全局测试环境
 * 2. 引入必要的测试库扩展
 * 3. 设置React测试库的全局选项
 */

// 设置测试环境变量
process.env.NODE_ENV = 'test';

/**
 * 引入jest-dom扩展断言库
 * 提供React组件测试的扩展断言方法，如：
 * - toBeInTheDocument()
 * - toHaveClass()
 * - toHaveTextContent()
 */
import '@testing-library/jest-dom';

/**
 * 配置测试环境变量
 * - NODE_ENV: 设置为test环境
 * - PUBLIC_URL: 清空公共路径
 */
process.env = Object.assign(process.env, {
  NODE_ENV: 'test',
  PUBLIC_URL: ''
});

/**
 * React测试库全局配置
 * - testIdAttribute: 定义测试ID属性，默认为'data-testid'
 *   可以通过getByTestId查询元素
 */
const config = {
  testIdAttribute: 'data-testid'
};

export default config;
