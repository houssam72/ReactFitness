import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("Test the button", () => {
  render(<Button title="Test" />);
  const btnElement =screen.getByRole("button")
  expect(btnElement).toBeInTheDocument();
});
