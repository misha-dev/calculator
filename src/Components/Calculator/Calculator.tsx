import { useContext } from "react";
import { CalcContext } from "../../context/CalcContext";
import { WhiteLine } from "../WhiteLine/WhiteLine";
import { CalcButtons } from "./CalcButtons/CalcButtons";
import cl from "./Calculator.module.scss";

export const Calculator = () => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.calculator}>
        <WhiteLine />
        <CalcButtons />
      </div>
    </div>
  );
};
