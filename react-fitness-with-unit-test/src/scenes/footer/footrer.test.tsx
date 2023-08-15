import { render, screen } from "@testing-library/react";
import Footer from "./index";

describe("FooterTest", () => {
  test("Test if the Logo Exist", () => {
    render(<Footer />);
  });
});

export {};
