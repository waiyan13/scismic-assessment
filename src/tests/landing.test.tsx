import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { describe, expect, it } from "vitest";

import LandingPage from "@/app/pages/landing";

describe("Landing page", () => {
  it("displays heading", () => {
    render(
      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByText("Hire the right")).toBeInTheDocument();
  });
});
