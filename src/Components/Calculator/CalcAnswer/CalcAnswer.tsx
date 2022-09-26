import { useContext } from "react";
import { CalcContext } from "../../../context/CalcContext";
import cl from "./CalcAnswer.module.scss";

export const CalcAnswer = () => {
  const { answer } = useContext(CalcContext);

  return <div className={cl.calcAnswer}>{JSON.stringify(answer)}</div>;
};
