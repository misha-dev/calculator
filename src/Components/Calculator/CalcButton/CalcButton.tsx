import { useButtonsClick } from "../../../hooks/useButtonsClick";
import { calcSymbolType } from "../../../types/calcSymbolType.types";
import cl from "./CalcButton.module.scss";

interface IButtonProps {
  calcSymbol: calcSymbolType;
}
export const CalcButton = ({ calcSymbol }: IButtonProps) => {
  const { onCalcButtonClick, onCalcButtonEqualSignClick, onCalcButtonEraseClick } = useButtonsClick(calcSymbol);
  return (
    <>
      {calcSymbol !== "=" ? (
        calcSymbol === "C" ? (
          <div className={cl.symbolWrapper} onClick={onCalcButtonEraseClick}>
            {calcSymbol}
          </div>
        ) : (
          <div className={cl.symbolWrapper} onClick={onCalcButtonClick}>
            {calcSymbol}
          </div>
        )
      ) : (
        <div style={{ backgroundColor: "#fff", color: "#406ABA" }} className={cl.symbolWrapper} onClick={onCalcButtonEqualSignClick}>
          {calcSymbol}
        </div>
      )}
    </>
  );
};
