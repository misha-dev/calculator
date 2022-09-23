import { Navigate, Route, Routes } from "react-router-dom";
import { Calculator } from "../Calculator/Calculator";
import { Layout } from "../Layout/Layout";

export const Router = () => {
  return (
    <Routes>
      <Route path="calculator" element={<Layout />}>
        <Route index element={<Calculator />} />
      </Route>
      <Route path="*" element={<Navigate to={"/calculator"} />} />
    </Routes>
  );
};
