import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders main app", async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Coding Assignment 14/i);
  expect(linkElement).toBeInTheDocument();
}, 2000);
