#!/bin/bash

# 提示用户输入项目名称
read -p "请输入新的项目名称 (例如: my-new-app): " NEW_PROJECT_NAME

# 提示用户输入项目描述
read -p "请输入新的项目描述: " NEW_PROJECT_DESCRIPTION

# 检查用户是否输入了项目名称
if [ -z "$NEW_PROJECT_NAME" ]; then
  echo "项目名称不能为空，脚本退出。"
  exit 1
fi

echo "正在更新项目信息..."

# 替换 package.json 中的 name
sed -i "s/\"name\": \"my-react-template-ts\"/\"name\": \"$NEW_PROJECT_NAME\"/" package.json

# 替换 package.json 中的 description
sed -i "s/\"description\": \"React + TypeScript项目模板，包含Webpack构建、Jest测试、ESLint代码规范等完整配置。脚本说明：start-开发服务器, build-生产构建, test-单元测试, lint-代码检查, format-代码格式化\"/\"description\": \"$NEW_PROJECT_DESCRIPTION\"/" package.json

# 替换 webpack/webpack.common.js 中的 HtmlWebpackPlugin 的 title
sed -i "s/title: 'TypeScript React App'/title: '$NEW_PROJECT_NAME'/" webpack/webpack.common.js

echo "项目信息更新完成！"

# (可选) 自我删除脚本
read -p "是否删除此初始化脚本 (init.sh)? (y/N): " DELETE_SCRIPT
if [[ "$DELETE_SCRIPT" =~ ^[Yy]$ ]]; then
  rm -- "$0"
  echo "init.sh 脚本已删除。"
fi

echo "请运行 'npm install' 重新安装依赖并更新 package-lock.json。"
