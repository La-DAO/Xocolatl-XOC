/**
 * Converts an amount to its equivalent value in wei.
 * @param {number} amount - The amount to convert.
 * @param {number} decimals - The number of decimals used for conversion.
 * @returns {BigInt} - The equivalent value in wei.
 */
export function toWeiConverter(amount: number, decimals: number): bigint {
  return BigInt(Math.round(amount * Math.pow(10, decimals)));
}
