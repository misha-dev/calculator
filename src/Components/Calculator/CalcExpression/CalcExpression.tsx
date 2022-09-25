import { useContext } from "react";
import { CalcContext } from "../../../context/CalcContext";
import cl from "./CalcExpression.module.scss";

export const CalcExpression = () => {
  const { expression } = useContext(CalcContext);

  return <div className={cl.calcExpression}>{expression}</div>;
};
