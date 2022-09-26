import { useContext } from "react";
import { CalcContext } from "../../../context/CalcContext";
import { calcParser } from "../../../utils/calcParser";
import cl from "./CalcAnswer.module.scss";

export const CalcAnswer = () => {
  const { expression } = useContext(CalcContext);
  const val = calcParser(expression);

  return <div className={cl.calcAnswer}>{typeof val === "string" ? val : JSON.stringify(val)}</div>;
};
