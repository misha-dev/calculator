import { useEffect } from "react";
import { useButtonsClick } from "./useButtonsClick";

export const useTyping = () => {
  const { onCalcButtonClick, onCalcButtonEqualSignClick, onCalcButtonEraseClick } = useButtonsClick();
  useEffect(() => {
    const appropriateSymbols = ["/", "%", "-", "+", ","];
    const onKeyUpHandler = (event: KeyboardEvent) => {
      const value = event.key;

      if (value === "Enter") {
        onCalcButtonEqualSignClick();
      } else if (value === "Escape") {
        onCalcButtonEraseClick();
      } else if (!Number.isNaN(Number.parseFloat(value))) {
        onCalcButtonClick(value);
      } else if (appropriateSymbols.includes(value)) {
        onCalcButtonClick(value);
      } else if (value === "*") {
        onCalcButtonClick("×");
      }
    };

    document.addEventListener("keyup", onKeyUpHandler);
    return () => {
      document.removeEventListener("keyup", onKeyUpHandler);
    };
  }, []);
};
