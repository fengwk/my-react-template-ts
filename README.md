# my-react-template-ts

一个现代化的React + TypeScript项目模板，包含完整的开发环境配置和最佳实践。

## 🚀 主要特性

- ⚛️ **React 19** - 最新的React版本  
- ⚡ **TypeScript** - 类型安全的JavaScript超集
- 🔄 **React Router** - 客户端路由管理
- 🎨 **CSS Modules** - 模块化CSS样式
- 📦 **Webpack 5** - 现代化的模块打包工具
- 🧪 **Jest** - 单元测试框架
- 📏 **ESLint** - 代码规范检查
- 💅 **Prettier** - 代码格式化
- 🎯 **EditorConfig** - 编辑器配置统一

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0 (推荐LTS版本)
- npm >= 9.0.0 或 pnpm/yarn

### 安装依赖

```bash
npm install
```
### 初始化项目

首次克隆项目后，运行以下脚本来设置项目名称和描述：

```bash
./init.sh
```

脚本会提示你输入新的项目名称和描述，并自动更新 `package.json` 和 `webpack/webpack.common.js` 中的相关信息。

### 开发模式

```bash
npm start
# 或
npm run start
```

应用将在 [http://localhost:9000](http://localhost:9000) 启动。

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist/` 目录。

### 运行测试

```bash
# 运行所有测试
npm test

# 监听模式
npm run test:watch

# 生成测试覆盖率报告
npm run test:coverage
```

## 🏗️ 项目结构

```
├── src/
│   ├── components/         # 可复用组件
│   ├── pages/              # 页面组件
│   ├── router/             # 路由配置
│   ├── types/              # TypeScript类型定义
│   ├── utils/              # 工具函数
│   ├── App.tsx             # 根组件
│   ├── index.tsx           # 应用入口
│   └── index.html          # HTML模板
├── webpack/                # Webpack配置
├── .babelrc                # Babel配置
├── .eslintrc.js            # ESLint配置
├── .prettierrc.js          # Prettier配置
├── tsconfig.json           # TypeScript配置
└── jest.config.js          # Jest配置
```

## 🛠️ 详细配置说明

### 配置文件详解

#### 1. `package.json`
- **作用**：项目核心配置文件，定义项目元数据、依赖和脚本命令
- **关键配置**：
  ```json
  "scripts": {
    "start": "启动开发服务器",
    "build": "构建生产版本",
    "test": "运行单元测试",
    "lint": "代码规范检查",
    "format": "代码格式化"
  },
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  }
  ```

#### 2. `tsconfig.json`
- **作用**：TypeScript编译配置
- **关键选项**：
  ```json
  {
    "compilerOptions": {
      "target": "ESNext", // 编译目标ES版本
      "module": "ESNext", // 模块系统
      "jsx": "react-jsx", // JSX处理方式
      "strict": true, // 启用所有严格类型检查
      "baseUrl": "./src", // 基础路径
      "paths": {
        "@/*": ["*"] // 路径别名配置
      }
    }
  }
  ```

#### 3. `webpack/` 目录
- **webpack.common.js**：基础配置
- **webpack.dev.js**：开发环境配置（热更新等）
- **webpack.prod.js**：生产环境配置（代码压缩等）

#### 4. `eslint.config.js`
- **作用**：代码规范检查配置
- **包含规则**：
  - React最佳实践
  - TypeScript类型检查
  - 无障碍访问规范

#### 5. `.prettierrc.js`
- **作用**：代码格式化配置
- **常用选项**：
  ```js
  module.exports = {
    semi: true, // 使用分号
    singleQuote: true, // 使用单引号
    printWidth: 100 // 行宽限制
  }
  ```

### 命令详解

#### 开发命令
```bash
npm start
```
- **功能**：启动开发服务器
- **特点**：
  - 支持热模块替换(HMR)
  - 自动打开浏览器
  - 错误提示覆盖层

#### 安装钩子命令
```bash
npm run prepare
```
- **功能**：安装Git钩子(Husky)
- **触发时机**：
  - `npm install`后自动执行
  - 首次克隆仓库后需要手动执行
- **作用**：确保Git提交前自动运行代码检查和格式化

#### 构建命令
```bash
npm run build
```
- **输出**：生成优化后的`dist/`目录
- **优化项**：
  - 代码压缩
  - 资源哈希
  - 代码分割

#### 测试命令
```bash
npm test
```
- **测试框架**：Jest + React Testing Library
- **覆盖率报告**：生成`coverage/`目录

### 使用模板构建React应用

#### 1. 创建新组件
```tsx
// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};
```

#### 2. 添加样式 (CSS Modules)
```less
// src/components/Button.module.less
.button {
  padding: 8px 16px;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  
  &:hover {
    background: #40a9ff;
  }
}
```

#### 3. 编写单元测试
```tsx
// src/components/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

#### 4. 添加路由
```tsx
// src/router/Routes.tsx
import { Route, Routes } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
);
```

#### 5. 状态管理建议
```tsx
// 推荐使用React Context或Zustand
// 创建store/useCounterStore.ts
import { create } from 'zustand';

interface CounterStore {
  count: number;
  increment: () => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

### 开发工作流

1. **初始化项目**
   ```bash
   npm install  # 自动执行prepare脚本安装Git钩子
   ```

2. **创建功能分支**
   ```bash
   git checkout -b feature/new-component
   ```

3. **开发新功能**
   - 编写组件
   - 添加样式
   - 编写测试

4. **提交代码**
   ```bash
   git add .
   git commit -m "feat: add new Button component"  # 提交前自动触发lint-staged
   ```

5. **创建Pull Request**
   - 确保所有测试通过
   - 更新文档(如有必要)

### 新成员注意事项
1. 首次克隆仓库后需手动运行：
   ```bash
   npm run prepare  # 安装Git钩子
   ```
2. 如果修改了husky配置，需要重新运行：
   ```bash
   npm run prepare
   ```

### 最佳实践建议

1. **组件设计**
   - 保持组件小型化、单一职责
   - 使用TypeScript定义清晰的props接口
   - 优先使用函数组件和Hooks

2. **样式管理**
   - 使用CSS Modules避免样式冲突
   - 定义全局变量在`src/App.module.less`中

3. **性能优化**
   - 使用`React.memo`优化组件
   - 按需加载路由组件
   - 使用Webpack代码分割

## 🛠️ 开发指南

### 运行测试

```bash
# 运行所有测试
npm test

# 监听模式
npm run test:watch

# 生成测试覆盖率报告
npm run test:coverage
```

### 代码质量检查

```bash
# 检查代码规范
npm run lint

# 自动修复代码规范问题
npm run lint:fix

# 格式化代码
npm run format

# TypeScript类型检查
npm run type-check
```

## 📋 所有可用命令

| 命令 | 描述 | 示例 |
|------|------|------|
| `npm start` | 启动开发服务器 | `npm start` |
| `npm run build` | 构建生产版本 | `npm run build` |
| `npm run prepare` | 安装Git钩子 | `npm run prepare` |
| `npm test` | 运行所有测试 | `npm test` |
| `npm run test:watch` | 监听模式运行测试 | `npm run test:watch` |
| `npm run test:coverage` | 生成测试覆盖率报告 | `npm run test:coverage` |
| `npm run lint` | ESLint代码规范检查 | `npm run lint` |
| `npm run lint:fix` | 自动修复ESLint问题 | `npm run lint:fix` |
| `npm run format` | Prettier代码格式化 | `npm run format` |
| `npm run type-check` | TypeScript类型检查 | `npm run type-check` |

## 🛠️ 开发工作流

### 推荐的开发流程

1. **启动开发服务器**
   ```bash
   npm start
   ```

2. **在另一个终端运行测试**
   ```bash
   npm run test:watch
   ```

3. **代码提交前检查**
   ```bash
   npm run lint
   npm run type-check
   npm test
   ```

### 代码提交规范

建议在提交代码前运行以下命令确保代码质量：

```bash
# 格式化代码
npm run format

# 检查代码规范
npm run lint

# 类型检查
npm run type-check

# 运行测试
npm test
```

### 环境变量配置

#### 基本使用
1. 复制 `.env.example` 为 `.env` 并配置：
```bash
cp .env.example .env
```

2. 在代码中访问环境变量：
```typescript
const apiUrl = process.env.API_BASE_URL;
```

#### 环境变量类型
- `.env` - 本地开发环境
- `.env.production` - 生产环境
- `.env.test` - 测试环境

#### 安全注意事项
- 永远不要提交包含敏感信息的`.env`文件
- 将`.env`添加到`.gitignore`
- 生产环境变量应通过部署平台配置

#### 常用环境变量
```ini
# 应用配置
APP_ENV=development
APP_DEBUG=true

# API配置
API_BASE_URL=http://localhost:3000
API_TIMEOUT=5000

# 功能开关
FEATURE_ANALYTICS=false
```

### 路径别名配置

项目配置了以下路径别名：

1. `@` 别名指向 `src` 目录：
```typescript
import { Button } from '@/components/Button';
```

2. `~` 别名指向 `node_modules` 目录：
```typescript
import lodash from '~/lodash';
```

配置位置：
- Webpack: `webpack/webpack.common.js` 中的 `resolve.alias`
- Jest: `jest.config.js` 中的 `moduleNameMapper`

使用路径别名可以：
- 避免复杂的相对路径
- 提高代码可读性
- 方便项目结构调整

## 🎨 样式开发

### CSS Modules

使用 `.module.css` 或 `.module.less` 文件启用CSS Modules：

```typescript
// Button.module.css
.button {
  background: blue;
  color: white;
}

// Button.tsx
import styles from './Button.module.css';

const Button = () => (
  <button className={styles.button}>Click me</button>
);
```

### Less支持

项目支持Less预处理器：

```less
// styles.module.less
.container {
  padding: 16px;
  
  .title {
    font-size: 24px;
    color: #333;
  }
}
```

## 🧪 测试

### 编写测试

使用Jest和React Testing Library：

```typescript
// Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

### 测试文件命名

- `*.test.ts` - 工具函数测试
- `*.test.tsx` - React组件测试
- `__tests__/` 目录 - 测试文件目录

## 📦 构建优化

### 代码分割

Webpack自动进行代码分割：

- 第三方库打包到 `vendors` chunk
- 动态导入的模块单独打包

### 缓存优化

- 使用内容哈希命名文件
- 长效缓存策略

## 🔧 配置说明

### 浏览器兼容性

项目使用 `.browserslistrc` 配置浏览器兼容性：

- 生产环境：支持使用率 > 0.25% 的浏览器
- 开发环境：使用最新版Chrome、Firefox、Safari

### 开发工具

- **VS Code** 推荐插件：
  - ESLint
  - Prettier
  - TypeScript Importer
  - Auto Rename Tag

## 🚢 部署

### 静态部署

构建后的 `dist/` 目录可以部署到任何静态文件服务器：

```bash
# 构建生产版本
npm run build

# 部署到服务器
# 将 dist/ 目录内容上传到服务器
```

### Docker部署

```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 📄 许可证

MIT License
