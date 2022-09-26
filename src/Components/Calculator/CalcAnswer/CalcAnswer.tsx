import { useContext } from "react";
import { CalcContext } from "../../../context/CalcContext";
import { calcFunction } from "../../../utils/calcFunction";
import cl from "./CalcAnswer.module.scss";

export const CalcAnswer = () => {
  const { expression } = useContext(CalcContext);
  const val = calcFunction(expression);

  return <div className={cl.calcAnswer}>{JSON.stringify(val)}</div>;
};
