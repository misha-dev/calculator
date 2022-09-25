import { CalcButtons } from "./CalcButtons/CalcButtons";
import cl from "./Calculator.module.scss";

export const Calculator = () => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.calculator}>
        <CalcButtons />
      </div>
    </div>
  );
};
