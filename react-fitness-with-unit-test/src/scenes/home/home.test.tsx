import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./index";
import { SelectedPage } from "../../shared/types";
import userEvent from "@testing-library/user-event";

// il faut continuer les test sur "test onViewportEnter when we are in home"

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>, // Mock the motion.div component
    section: ({ children }: { children: React.ReactNode }) => (
      <section data-testid="home">{children}</section>
    ), // Mock the motion.section component
  },
}));

jest.mock("../../hooks/useMediaQuery", () => ({
  __esModule: true,
  default: jest.fn(),
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

describe("HomeTest", () => {
  const useMediaQuery = require("../../hooks/useMediaQuery").default;

  test("test si y'a les base necessaire pour le composant Home", () => {
    const setSelectedPage = jest.fn();
    render(<Home setSelectedPage={setSelectedPage} />);
    const Text = screen.getByText(
      /unrivaled gym\. unparalleled training fitness classes\. world class studios to get the body shapes that you dream of\.\. get your dream body now\./i
    );
    const homePageImgText = screen.getByRole("img", {
      name: /home\-page\-text/i,
    });
    const homePageImgGraphics = screen.getByRole("img", {
      name: /home\-pagegraphic/i,
    });
    const btnJoinNow = screen.getByRole("link", { name: /join now/i });
    const learMore = screen.getByRole("link", { name: /learn more/i });
    expect(Text).toBeInTheDocument();
    expect(homePageImgText).toBeInTheDocument();
    expect(homePageImgGraphics).toBeInTheDocument();
    expect(btnJoinNow).toHaveAttribute("href", "#contactus");
    expect(learMore).toHaveAttribute("href", "#contactus");
  });

  test("test onViewportEnter when we are in home", () => {
    const setSelectedPageMock = jest.fn();
    render(<Home setSelectedPage={setSelectedPageMock} />);
    const homeSection = screen.getByTestId("home");
    expect(homeSection).toBeInTheDocument();
    // const mockOnViewportEnter = homeSection.getAttribute("onViewportEnter");
    // if (mockOnViewportEnter) {
    //   const mockFunction = jest.fn();
    //   eval(mockOnViewportEnter); // Evaluate the mock function
    //   mockFunction(); // Call the mock function
    // }
    // fireEvent.mouseEnter(homeSection );
    // expect(setSelectedPageMock).toHaveBeenCalledWith(SelectedPage.Home);
  });

  test("test Learn More Link", () => {
    const setSelectedPageMock = jest.fn();
    render(<Home setSelectedPage={setSelectedPageMock} />);
    const learMoreLink = screen.getByRole("link", { name: /learn more/i });
    expect(learMoreLink).toHaveAttribute("href", `#${SelectedPage.ContactUs}`);
    userEvent.click(learMoreLink);
    expect(setSelectedPageMock).toBeCalledTimes(1);
    expect(setSelectedPageMock).toHaveBeenCalledWith(SelectedPage.ContactUs);
  });

  test("test join now button", () => {
    const setSelectedPageMock = jest.fn();
    render(<Home setSelectedPage={setSelectedPageMock} />);
    const actionButtonText = screen.getByRole("link", {
      name: /join now/i,
    });
    expect(actionButtonText).toHaveAttribute(
      "href",
      `#${SelectedPage.ContactUs}`
    );
    userEvent.click(actionButtonText);
    expect(setSelectedPageMock).toHaveBeenCalledTimes(1);
    expect(setSelectedPageMock).toHaveBeenCalledWith(SelectedPage.ContactUs);
  });

  test("Test la partie d'affichage des sponseur", () => {
    // Mock the return value of useMediaQuery for this test
    useMediaQuery.mockReturnValue(true);
    const setSelectedPage = jest.fn();
    render(<Home setSelectedPage={setSelectedPage} />);
    const imgRedBull = screen.queryByRole("img", {
      name: /redbull\-sponsor/i,
    });
    const imgForbes = screen.getByRole("img", {
      name: /forbes\-sponsor/i,
    });
    const imgFortune = screen.getByRole("img", {
      name: /fortune\-sponsor/i,
    });
    expect(imgRedBull).toBeInTheDocument();
    expect(imgForbes).toBeInTheDocument();
    expect(imgFortune).toBeInTheDocument();
  });

  test("Test qu'on le sponor c'affiche pas", () => {
    // Mock the return value of useMediaQuery for this test
    useMediaQuery.mockReturnValue(false);
    const setSelectedPage = jest.fn();
    render(<Home setSelectedPage={setSelectedPage} />);
    const imgRedBull = screen.queryByRole("img", {
      name: /redbull\-sponsor/i,
    });
    const imgForbes = screen.queryByRole("img", {
      name: /forbes\-sponsor/i,
    });
    const imgFortune = screen.queryByRole("img", {
      name: /fortune\-sponsor/i,
    });
    expect(imgRedBull).not.toBeInTheDocument();
    expect(imgForbes).not.toBeInTheDocument();
    expect(imgFortune).not.toBeInTheDocument();
  });
});

export {};
