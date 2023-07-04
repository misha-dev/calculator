import { useContext } from 'react';

import { CalcContext } from '../../../../data';
import { CalcAnswer } from '../CalcAnswer/CalcAnswer';

import cl from './CalcExpression.module.scss';

export const CalcExpression = () => {
  const { expression, answer, setAnswer } = useContext(CalcContext);

  return (
    <div className={cl.calcExpression}>
      <div
        onClick={() => {
          setAnswer(false);
        }}
        className={`${answer ? cl.calcExpressionAnswer : ''}`}
      >
        {expression}
      </div>
      {answer ? <CalcAnswer /> : null}
    </div>
  );
};
