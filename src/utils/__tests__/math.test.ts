/**
 * 数学工具函数测试
 * 演示纯TypeScript代码的单元测试
 */

import { add, subtract, multiply, divide } from '../math';

describe('数学工具函数', () => {
  test('加法测试', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('减法测试', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(10, -5)).toBe(15);
    expect(subtract(0.3, 0.1)).toBeCloseTo(0.2);
  });

  test('乘法测试', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, 5)).toBe(-5);
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
  });

  test('除法测试', () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(10, 2)).toBe(5);
    expect(divide(0.6, 0.2)).toBeCloseTo(3);
    expect(() => divide(1, 0)).toThrow('除数不能为0');
  });
});
