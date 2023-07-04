import { useContext } from 'react';

import { CalcContext } from '../../../../data';
import { calcCalculation } from '../../../../utils';

import cl from './CalcAnswer.module.scss';

export const CalcAnswer = () => {
  const { expression } = useContext(CalcContext);

  return (
    <div data-testid="answer" className={cl.calcAnswer}>
      {calcCalculation(expression)}
    </div>
  );
};
