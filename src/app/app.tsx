import { lazy } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";

import "@/index.css";

const LoginPage = lazy(() => import("./pages/login"));
const LandingPage = lazy(() => import("./pages/landing"));
const CandidatesPage = lazy(() => import("./pages/candidates"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/candidates" element={<CandidatesPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
