import { render, screen } from "@testing-library/react";
import React from "react";
import ChartPie from "../ChartPie";

describe("RegisterForm component", () => {
  test("can fill out the form and submit", async () => {
    render(<ChartPie />);

    expect(screen.getByText("Year")).toBeInTheDocument()
  })
});