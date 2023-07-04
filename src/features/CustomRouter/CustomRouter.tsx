import { Navigate, Route, Routes } from 'react-router-dom';


import { Layout } from '../Layout/Layout';
import { CalculatorPage } from '../../pages';

export const CustomRouter = () => {
  return (
    <Routes>
      <Route path="calculator" element={<Layout />}>
        <Route index element={<CalculatorPage />} />
      </Route>
      <Route path="*" element={<Navigate to={'/calculator'} />} />
    </Routes>
  );
};
