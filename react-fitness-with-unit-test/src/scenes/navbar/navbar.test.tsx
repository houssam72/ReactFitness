import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import Navbar from ".";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";

jest.mock("react-anchor-link-smooth-scroll", () => ({
  __esModule: true,
  default: ({
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props}>{children}</a>
  ),
}));

const getMinWidthFromMediaQuery = (query: string) => {
  const minWidthMatch = query.match(/\(\min-width:\s*(\d+)px\)/);
  return minWidthMatch ? parseInt(minWidthMatch[1]) : -1;
};

describe("navBarTest", () => {
  test("Test si je suis en haut de la page", () => {
    // Mock window.matchMedia
    let matchMediaMock = jest.fn((query: string) => ({
      matches:
        getMinWidthFromMediaQuery(query) <= global.innerWidth ? true : false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
    window.matchMedia = matchMediaMock as any;

    const setSelectedPageMock = jest.fn();

    render(
      <Navbar
        setSelectedPage={setSelectedPageMock}
        selectedPage={SelectedPage.Home}
        isTopOfPage={true}
      />
    );

    expect(screen.getByTestId("navBar")).toHaveAttribute(
      "class",
      expect.not.stringMatching(/bg-primary-100 drop-shadow\b/)
    );
  });

  test("Test si je ne suis  pas en haut de la page", () => {
    // Mock window.matchMedia
    let matchMediaMock = jest.fn((query: string) => ({
      matches:
        getMinWidthFromMediaQuery(query) <= global.innerWidth ? true : false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
    window.matchMedia = matchMediaMock as any;

    const setSelectedPageMock = jest.fn();

    render(
      <Navbar
        setSelectedPage={setSelectedPageMock}
        selectedPage={SelectedPage.Home}
        isTopOfPage={false}
      />
    );

    expect(screen.getByTestId("navBar")).toHaveAttribute(
      "class",
      expect.stringMatching(/bg-primary-100 drop-shadow\b/)
    );
  });

  describe("isAboveMediumScreens is true and all scenarios", () => {
    test("Test si SignIn s'affiche", async () => {
      // Mock window.matchMedia
      let matchMediaMock = jest.fn((query: string) => ({
        matches: getMinWidthFromMediaQuery(query) <= 2000 ? true : false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      }));
      window.matchMedia = matchMediaMock as any;

      const setSelectedPageMock = jest.fn();
      render(
        <Navbar
          setSelectedPage={setSelectedPageMock}
          selectedPage={SelectedPage.Home}
          isTopOfPage={true}
        />
      );

      act(() => {
        global.dispatchEvent(new Event("resize"));
      });

      expect(screen.getByText(/sign in/i)).toBeInTheDocument();
      await act(async () => {
        fireEvent.click(
          screen.getByRole("link", {
            name: /benefits/i,
          })
        );
      });

      expect(setSelectedPageMock).toHaveBeenCalledWith(SelectedPage.Benefits);
    });
  });

  describe("isAboveMediumScreens is false and all scenarios", () => {
    test("test si le boutton Bar3icons s'affiche", () => {
      // Mock window.matchMedia
      let matchMediaMock = jest.fn((query: string) => ({
        matches:
          getMinWidthFromMediaQuery(query) <= global.innerWidth ? true : false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      }));
      window.matchMedia = matchMediaMock as any;

      const setSelectedPageMock = jest.fn();
      render(
        <Navbar
          setSelectedPage={setSelectedPageMock}
          selectedPage={SelectedPage.Home}
          isTopOfPage={true}
        />
      );
      expect(screen.getByTestId("Bars3Icon")).toBeInTheDocument();
    });

    test("l'affichage du menu toogle en small screen && click sur Benefits link", async () => {
      // Mock window.matchMedia
      let matchMediaMock = jest.fn((query: string) => ({
        matches:
          getMinWidthFromMediaQuery(query) <= global.innerWidth ? true : false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      }));
      window.matchMedia = matchMediaMock as any;

      const setSelectedPageMock = jest.fn();
      render(
        <Navbar
          setSelectedPage={setSelectedPageMock}
          selectedPage={SelectedPage.Home}
          isTopOfPage={true}
        />
      );
      expect(screen.getByTestId("Bars3Icon")).toBeInTheDocument();

      await act(async () => {
        fireEvent.click(screen.getByTestId("Bars3Icon"));
      });

      expect(screen.getAllByRole("link")).toHaveLength(4);

      await act(async () => {
        fireEvent.click(
          screen.getByRole("link", {
            name: /benefits/i,
          })
        );
      });

      expect(setSelectedPageMock).toHaveBeenCalledWith(SelectedPage.Benefits);

      await act(async () => {
        fireEvent.click(screen.getByTestId("XMarkIcon"));
      });
      expect(screen.queryAllByRole("link")).toHaveLength(0);
    });
  });
});

export {};
