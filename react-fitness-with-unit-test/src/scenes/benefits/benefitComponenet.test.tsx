import { render, screen } from "@testing-library/react";
import Benefit from "./Benefit";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "../../shared/types";
import userEvent from "@testing-library/user-event";
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>, // Mock the motion.div component
    section: ({ children }: { children: React.ReactNode }) => (
      <section data-testid="home">{children}</section>
    ), // Mock the motion.section component
  },
}));

jest.mock("react-anchor-link-smooth-scroll", () => {
  return {
    __esModule: true,
    default: ({
      children,
      ...props
    }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a {...props}>{children}</a>
    ),
  };
});

describe("benefit component test", () => {
  test("test si y'a les base necessaire pour le composant Benefit", () => {
    const setSelectedPageMaock = jest.fn();
    const Element: React.FC = () => {
      return <div>Element for test</div>;
    };
    render(
      <Benefit
        icon={<Element />}
        title="title"
        description="description"
        setSelectedPage={setSelectedPageMaock}
      />
    );
    const iconElement = screen.getByText(/element for test/i);
    const titleElement = screen.getByText(/title/i);
    const idescriptionElement = screen.getByText(/description/i);
    expect(iconElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(idescriptionElement).toBeInTheDocument();
  });

  test("Test Learn More Link", () => {
    const setSelectedPageMock = jest.fn();
    const Element: React.FC = () => {
      return <div>Element for test</div>;
    };
    render(
      <Benefit
        icon={<Element />}
        title="title"
        description="description"
        setSelectedPage={setSelectedPageMock}
      />
    );
    const learMoreLink = screen.getByRole("link", { name: /learn more/i });
    expect(learMoreLink).toHaveAttribute("href", `#${SelectedPage.ContactUs}`);
    userEvent.click(learMoreLink);
    expect(setSelectedPageMock).toBeCalledTimes(1);
    expect(setSelectedPageMock).toHaveBeenCalledWith(SelectedPage.ContactUs);
  });
});

export {};
