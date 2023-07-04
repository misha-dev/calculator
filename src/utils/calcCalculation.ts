import { ErrorEnum } from '../types';

import { calcCount } from './calcCount';
import { calcParser } from './calcParser';
import { isHandledError } from './typeGuardError';

export const calcCalculation = (expression: string) => {
  try {
    const [numberObjects, signs] = calcParser(expression);
    const evaluation = calcCount(numberObjects, signs);
    return evaluation;
  } catch (error) {
    if (isHandledError(error)) {
      return error.message;
    } else {
      return ErrorEnum.UnknownError;
    }
  }
};
