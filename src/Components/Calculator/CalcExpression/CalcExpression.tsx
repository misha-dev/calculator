import { useContext } from "react";
import { CalcContext } from "../../../context/CalcContext";
import cl from "./CalcExpression.module.scss";

export const CalcExpression = () => {
  const { expression, answer } = useContext(CalcContext);

  return (
    <div className={cl.calcExpression}>
      {expression} {JSON.stringify(answer)}
    </div>
  );
};
