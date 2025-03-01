import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home/Homepage";
import NoPage from "../Pages/NoPage";

export const Router = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};