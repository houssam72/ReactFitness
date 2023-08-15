import { render, screen } from "@testing-library/react";
import Link from "./Link";
import { SelectedPage } from "../../shared/types";
import { Children } from "react";
import userEvent from "@testing-library/user-event";

jest.mock("react-anchor-link-smooth-scroll", () => ({
  __esModule: true,
  default: ({
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props}>{children}</a>
  ),
}));

describe("test the link component", () => {
  test("test generale avec le click sur le link", () => {
    const setSelectedPageMock = jest.fn();
    render(
      <Link
        setSelectedPage={setSelectedPageMock}
        page="Home"
        selectedPage={SelectedPage.Home}
      />
    );
    const link = screen.getByRole("link", { name: "Home" });
    expect(link).toHaveAttribute("href", "#home");
    userEvent.click(link);
    expect(setSelectedPageMock).toHaveBeenCalledWith("home");
  });

  test("Affichage du text-primary-500 pour le css ", () => {
    const setSelectedPageMock = jest.fn();
    render(
      <Link
        setSelectedPage={setSelectedPageMock}
        page="Home"
        selectedPage={SelectedPage.Home}
      />
    );
    const link = screen.getByRole("link", { name: "Home" });
    expect(link).toHaveAttribute(
      "class",
      expect.stringMatching(/text-primary-500\b/)
    );
  });

  test("Non sffichage du text-primary-500 pour le css ", () => {
    const setSelectedPageMock = jest.fn();
    render(
      <Link
        setSelectedPage={setSelectedPageMock}
        page="Home"
        selectedPage={SelectedPage.ContactUs}
      />
    );
    const link = screen.getByRole("link", { name: "Home" });
    expect(link).toHaveAttribute(
      "class",
      expect.not.stringMatching(/text-primary-500\b/)
    );
  });
});

export {};
