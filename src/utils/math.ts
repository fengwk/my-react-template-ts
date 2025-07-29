/**
 * 数学工具函数
 * 提供基本的数学运算功能
 */

/**
 * 加法函数
 * @param a 第一个加数
 * @param b 第二个加数
 * @returns 两数之和
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * 减法函数
 * @param a 被减数
 * @param b 减数
 * @returns 两数之差
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * 乘法函数
 * @param a 第一个乘数
 * @param b 第二个乘数
 * @returns 两数之积
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * 除法函数
 * @param a 被除数
 * @param b 除数
 * @returns 两数之商
 * @throws 当除数为0时抛出错误
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('除数不能为0');
  }
  return a / b;
}
