import { ErrorEnum } from '../../types';
import { calcCalculation } from '../calcCalculation';

const mockData: { [key: string]: number | string } = {
  '1 + 2 + 3 + 4': 10,
  '1 - 2': -1,
  '10 - 3 / 10': 9.7,
  '13 - 4 × 10': -27,
  '√9': 3,
  '2√9': 6,
  '10 + 30%': 13,
  '3,,3': ErrorEnum.ExpressionError,
  '3,3 - 5,2 + 33,3 - 10 / 30': 31.06667,
};

describe('Calculation test', () => {
  for (const [key, value] of Object.entries(mockData)) {
    it(`should ${key} = ${value}`, () => {
      expect(calcCalculation(key)).toBe(value);
    });
  }
});
