/**
 * 示例测试文件
 * 演示如何使用Jest和React测试库测试React组件
 * 注意：测试文件不需要React Refresh功能
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// 简单示例组件
const ExampleComponent = () => (
  <div data-testid='example'>
    <h1>测试示例</h1>
    <p>这是一个测试组件</p>
  </div>
);

describe('示例组件测试', () => {
  it('渲染正确的内容', () => {
    render(<ExampleComponent />);

    expect(screen.getByRole('heading')).toHaveTextContent('测试示例');
    expect(screen.getByText('这是一个测试组件')).toBeInTheDocument();
    expect(screen.getByTestId('example')).toBeInTheDocument();
  });
});
