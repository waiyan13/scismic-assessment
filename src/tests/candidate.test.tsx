import { screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { describe, it } from "vitest";

import CandidatesPage from "@/app/pages/candidates";
import { render } from "@/test-utils";

describe("Candidate page", () => {
  it("shows loading skeleton", async () => {
    render(
      <MemoryRouter initialEntries={["/candidates"]} initialIndex={0}>
        <Routes>
          <Route path="/candidates" element={<CandidatesPage />} />
        </Routes>
      </MemoryRouter>,
    );

    await screen.findByTestId("candidate-skeleton");
  });
});
