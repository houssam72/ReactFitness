import { render, screen } from "@testing-library/react";
import Footer from "./index";

describe("FooterTest", () => {
  test("Test if the Logo Exist", () => {
    render(<Footer />);
    const logoImgExist = screen.getByRole("img", { name: /logo/i });
    expect(logoImgExist).toBeInTheDocument();
  });
});

export {};
