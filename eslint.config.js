/**
 * ESLint 配置文件 (v9+ 新格式)
 * 用于统一代码规范，确保代码质量和一致性
 *
 * 配置说明：
 * - 使用TypeScript + React的最佳实践规则
 * - 支持无障碍访问(jsx-a11y)规则
 * - 包含React Hooks规则
 * - 针对现代React(17+)进行了优化
 */

const js = require('@eslint/js');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const globals = require('globals');

module.exports = [
  // 基础配置
  js.configs.recommended,

  // TypeScript配置
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    rules: {
      // ===== TypeScript规则 =====
      ...tsPlugin.configs.recommended.rules,

      // 未使用变量检查，允许以下划线开头的参数
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_'
      }],

      // 允许不指定函数返回类型（TypeScript会自动推断）
      '@typescript-eslint/explicit-function-return-type': 'off',

      // 允许不指定模块边界类型
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // 使用any类型时发出警告（不是错误）
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // React配置
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
    plugins: {
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      // ===== React 17+ 优化规则 =====
      // React 17+ 不需要在每个文件中导入React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // ===== React规则 =====
      // 关闭prop-types检查（使用TypeScript替代）
      'react/prop-types': 'off',

      // 允许JSX属性展开（...props）
      'react/jsx-props-no-spreading': 'off',

      // ===== React特定规则 =====
      // 强制组件名称使用PascalCase
      'react/jsx-pascal-case': 'error',

      // 强制使用自闭合标签（当没有子元素时）
      'react/self-closing-comp': 'error',

      // 强制key属性在数组中的使用
      'react/jsx-key': 'error',

      // React Hooks规则
      ...reactHooksPlugin.configs.recommended.rules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // 无障碍访问配置
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'jsx-a11y': jsxA11yPlugin,
    },
    rules: {
      ...jsxA11yPlugin.configs.recommended.rules,

      // ===== 无障碍访问规则 =====
      // 强制alt属性在img标签中的使用
      'jsx-a11y/alt-text': 'error',

      // 强制锚点标签有有效的href属性
      'jsx-a11y/anchor-is-valid': 'error',

      // 强制表单控件有标签
      'jsx-a11y/label-has-associated-control': 'error',
    },
  },

  // 通用代码质量规则
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // ===== 通用代码质量规则 =====
      // console.log使用警告
      'no-console': 'warn',

      // debugger使用警告
      'no-debugger': 'warn',

      // 强制使用const而不是let（当变量未被重新赋值时）
      'prefer-const': 'error',

      // 禁止使用var
      'no-var': 'error',

      // 强制使用===和!==而不是==和!=
      'eqeqeq': ['error', 'always'],

      // 禁止未使用的表达式
      'no-unused-expressions': 'error',

      // 强制使用模板字符串而不是字符串拼接
      'prefer-template': 'warn',
    },
  },

  // 忽略的文件和目录
  {
    ignores: [
      'dist/**',
      'build/**',
      'node_modules/**',
      '**/*.config.js',
      '**/*.config.ts',
      'webpack/**',
      'coverage/**',
    ],
  },
];
