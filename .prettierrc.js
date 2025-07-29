/**
 * Prettier 配置文件
 * 用于统一代码格式化风格
 * 
 * 配置原则：
 * - 与ESLint规则保持一致
 * - 采用社区最佳实践
 * - 减少团队代码风格争议
 */

module.exports = {
  // 使用单引号
  singleQuote: true,
  
  // 强制使用分号
  semi: true,
  
  // 使用2个空格缩进
  tabWidth: 2,
  
  // 使用空格而不是制表符
  useTabs: false,
  
  // 在对象或数组的最后一个元素后添加逗号
  trailingComma: 'es5',
  
  // 每行最大字符数
  printWidth: 80,
  
  // 在JSX中使用单引号
  jsxSingleQuote: true,
  
  // 箭头函数参数括号：当参数只有一个时省略括号
  arrowParens: 'avoid',
  
  // 对象大括号内的空格
  bracketSpacing: true,
  
  // JSX标签的尖括号不换行
  bracketSameLine: false,
  
  // 文件末尾添加换行符
  endOfLine: 'lf',
};
