import { render, screen } from "@testing-library/react";
import Class from "./Class";

describe("Test class component", () => {
  test("The first test", () => {
    render(<Class name="name" description="description" image="image" />);
    const nameText = screen.getByText(/name/i);
    const descriptionText = screen.getByText(/description/i);
    const img = screen.getByRole("img", { name: /image/i });

    expect(nameText).toBeInTheDocument();
    expect(descriptionText).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});

export {};
