import React from 'react';

export type CalcContextType = {
  expression: string;
  setExpression: React.Dispatch<React.SetStateAction<string>>;
  answer: boolean;
  setAnswer: React.Dispatch<React.SetStateAction<boolean>>;
};
