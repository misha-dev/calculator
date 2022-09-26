import { useContext } from "react";
import { CalcContext } from "../../../context/CalcContext";
import { CalcAnswer } from "../CalcAnswer/CalcAnswer";
import cl from "./CalcExpression.module.scss";

export const CalcExpression = () => {
  const { expression, answer, setAnswer } = useContext(CalcContext);

  return (
    <div
      onClick={() => {
        setAnswer(false);
      }}
      className={cl.calcExpression}
    >
      <div className={`${answer ? cl.calcExpressionAnswer : ""}`}>{expression}</div>
      {answer ? <CalcAnswer /> : null}
    </div>
  );
};
