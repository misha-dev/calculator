import { useContext, useEffect } from 'react';

import { CalcContext } from '../data';

import { useButtonsClick } from './useButtonsClick';

// hook for managing typed values from the keyboard
export const useTyping = () => {
  const { answer } = useContext(CalcContext);
  const { onCalcButtonClick, onCalcButtonEqualSignClick, onCalcButtonEraseClick, onCalcBackspace } = useButtonsClick();
  useEffect(() => {
    const appropriateSigns = ['/', '%', '-', '+', ','];
    const onKeyUpHandler = (event: KeyboardEvent) => {
      const value = event.key;

      if (value === 'Enter') {
        onCalcButtonEqualSignClick();
      } else if (value === 'Escape') {
        onCalcButtonEraseClick();
      } else if (value === 'Backspace') {
        onCalcBackspace();
      } else if (!Number.isNaN(Number(value))) {
        onCalcButtonClick(value);
      } else if (appropriateSigns.includes(value)) {
        onCalcButtonClick(value);
      } else if (value === '*') {
        onCalcButtonClick('×');
      }
    };

    document.addEventListener('keydown', onKeyUpHandler);
    return () => {
      document.removeEventListener('keydown', onKeyUpHandler);
    };
  }, [answer]);
};
