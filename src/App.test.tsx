import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders main app", async () => {
  render(<App />);
  const linkElement = await screen.findByText(/About Me/i);
  expect(linkElement).toBeInTheDocument();
}, 2000);
