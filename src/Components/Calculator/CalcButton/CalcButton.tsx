import { useButtonsClick } from "../../../hooks/useButtonsClick";
import { CalcSymbolType } from "../../../types/calcSymbolType.types";
import cl from "./CalcButton.module.scss";

interface IButtonProps {
  calcSymbol: CalcSymbolType;
}
export const CalcButton = ({ calcSymbol }: IButtonProps) => {
  const { onCalcButtonClick, onCalcButtonEqualSignClick, onCalcButtonEraseClick } = useButtonsClick();
  return (
    <>
      {calcSymbol !== "=" ? (
        calcSymbol === "C" ? (
          <div className={cl.symbolWrapper} onClick={onCalcButtonEraseClick}>
            {calcSymbol}
          </div>
        ) : (
          <div
            className={cl.symbolWrapper}
            onClick={() => {
              onCalcButtonClick(calcSymbol);
            }}
          >
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
