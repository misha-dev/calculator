import { calcSymbolType } from "../../../types/calcSymbolType.types";
import cl from "./CalcButton.module.scss";

interface IButtonProps {
  calcSymbol: calcSymbolType;
}
export const CalcButton = ({ calcSymbol }: IButtonProps) => {
  return (
    <>
      {calcSymbol !== "=" ? (
        <div className={cl.symbolWrapper}>{calcSymbol}</div>
      ) : (
        <div style={{ backgroundColor: "#fff", color: "#406ABA" }} className={cl.symbolWrapper}>
          {calcSymbol}
        </div>
      )}
    </>
  );
};
