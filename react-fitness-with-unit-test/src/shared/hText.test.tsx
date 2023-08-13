import { render, screen } from "@testing-library/react";
import HText from "./HText";

test("Test Htext Component", () => {
  render(<HText children="Children Text" />);
  const childrenText = screen.getByRole("heading", {
    name: /Children Text/i,
  });
  expect(childrenText).toBeInTheDocument();
});

export {};
