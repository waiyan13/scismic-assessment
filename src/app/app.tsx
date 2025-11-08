import { lazy } from "react";

import { Route, Routes } from "react-router";

import "@/index.css";

const LoginPage = lazy(() => import("./pages/login"));
const LandingPage = lazy(() => import("./pages/landing"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
