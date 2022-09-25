import { WhiteLine } from "../WhiteLine/WhiteLine";
import { CalcButtons } from "./CalcButtons/CalcButtons";
import { CalcExpression } from "./CalcExpression/CalcExpression";
import cl from "./Calculator.module.scss";

export const Calculator = () => {
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
