import { CalcButton } from "../CalcButton/CalcButton";
import cl from "./CalcButtons.module.scss";

export const CalcButtons = () => {
  return (
    <div className={cl.mainWrapper}>
      <CalcButton calcSymbol="C" />
      <CalcButton calcSymbol="√" />
      <CalcButton calcSymbol="%" />
      <CalcButton calcSymbol="/" />

      <CalcButton calcSymbol="7" />
      <CalcButton calcSymbol="8" />
      <CalcButton calcSymbol="9" />
      <CalcButton calcSymbol="×" />

      <CalcButton calcSymbol="4" />
      <CalcButton calcSymbol="5" />
      <CalcButton calcSymbol="6" />
      <CalcButton calcSymbol="-" />

      <CalcButton calcSymbol="1" />
      <CalcButton calcSymbol="2" />
      <CalcButton calcSymbol="3" />
      <CalcButton calcSymbol="+" />

      <CalcButton calcSymbol="00" />
      <CalcButton calcSymbol="0" />
      <CalcButton calcSymbol="," />
      <CalcButton calcSymbol="=" />
    </div>
  );
};
