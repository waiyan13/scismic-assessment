import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "@/app";

describe("Candidate page", () => {
  it("displays heading", () => {
    render(<App />);
    expect(screen.getByText("Candidates")).toBeInTheDocument();
  })
});
