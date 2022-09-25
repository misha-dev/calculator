import { createContext, ReactNode, useState } from "react";
import { CalcContextType } from "../types/CalcContextType.types";

export const CalcContext = createContext<CalcContextType>(null!);
interface ContextProps {
  children?: ReactNode;
  [key: string]: any;
}

export const CalcContextProvider = ({ children }: ContextProps) => {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState(false);
  return <CalcContext.Provider value={{ expression, setExpression, answer, setAnswer }}>{children}</CalcContext.Provider>;
};
