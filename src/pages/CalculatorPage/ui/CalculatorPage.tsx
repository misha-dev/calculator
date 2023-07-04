import { WhiteLine } from '../../../components';
import { CalcButtons, CalcExpression } from '../components';

import cl from './CalculatorPage.module.scss';

export const CalculatorPage = () => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.calculator}>
        <CalcExpression />
        <WhiteLine />
        <CalcButtons />
      </div>
    </div>
  );
};
