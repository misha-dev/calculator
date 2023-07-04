import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CalcContextProvider } from '../../../data';

import { ErrorEnum } from '../../../types';
import { CalculatorPage } from '../ui/CalculatorPage';


describe('Calculator', () => {
  test('should render', () => {
    render(
      <CalcContextProvider>
        <CalculatorPage />
      </CalcContextProvider>,
    );
    const button = screen.getByText('C');
    expect(button).toBeInTheDocument();
  });

  // not using innerText, cause innerText leans on the layout engine for guidance, and jsdom has no layout engine

  test('should enter expression using buttons', () => {
    render(
      <CalcContextProvider>
        <CalculatorPage />
      </CalcContextProvider>,
    );
    const buttonC = screen.getByText('C');
    const button1 = screen.getByText('1');
    const buttonPlus = screen.getByText('+');
    const button2 = screen.getByText('2');
    userEvent.click(button1);
    userEvent.click(buttonPlus);
    userEvent.click(button2);
    const expression = screen.getByText('1 + 2');
    expect(expression).toBeInTheDocument();
    userEvent.click(buttonC);
    expect(expression.innerHTML).toBe('');
  });

  test('should get proper answer', () => {
    render(
      <CalcContextProvider>
        <CalculatorPage />
      </CalcContextProvider>,
    );
    const button1 = screen.getByText('1');
    const buttonPlus = screen.getByText('+');
    const button2 = screen.getByText('2');
    const buttonEqualSign = screen.getByText('=');
    userEvent.click(button1);
    userEvent.click(buttonPlus);
    userEvent.click(button2);
    const expression = screen.getByText('1 + 2');
    expect(expression).toBeInTheDocument();
    userEvent.click(buttonEqualSign);
    const answer = screen.getByTestId('answer');
    expect(answer.innerHTML).toBe('3');
  });

  test('should handle error', () => {
    render(
      <CalcContextProvider>
        <CalculatorPage />
      </CalcContextProvider>,
    );
    const button1 = screen.getByText('1');
    const buttonPlus = screen.getByText('+');
    const button2 = screen.getByText('2');
    const buttonEqualSign = screen.getByText('=');
    userEvent.click(button1);
    userEvent.click(button2);
    userEvent.click(buttonPlus);
    userEvent.click(buttonEqualSign);
    const answer = screen.getByTestId('answer');
    expect(answer.innerHTML).toBe(ErrorEnum.ExpressionError);
  });
});
