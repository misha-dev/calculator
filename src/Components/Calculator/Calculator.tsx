import cl from "./Calculator.module.scss";
import { CalcButtons } from "./CalcButtons/CalcButtons";

export const Calculator = () => {
  
  return (
    <div className={cl.wrapper}>
      <div className={cl.calculator}>
        <CalcButtons />
      </div>
    </div>
  );
};
