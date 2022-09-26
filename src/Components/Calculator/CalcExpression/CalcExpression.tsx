import { useContext } from "react";
import { CalcContext } from "../../../context/CalcContext";
import { CalcAnswer } from "../CalcAnswer/CalcAnswer";
import cl from "./CalcExpression.module.scss";

export const CalcExpression = () => {
  const { expression, answer } = useContext(CalcContext);

  return (
    <div className={cl.calcExpression}>
      <div className={`${answer ? cl.calcExpressionAnswer : ""}`}>{expression}</div>
      {answer ? <CalcAnswer /> : null}
    </div>
  );
};
