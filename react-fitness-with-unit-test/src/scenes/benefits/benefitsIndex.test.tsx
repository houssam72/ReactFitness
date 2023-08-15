import { fireEvent, render, screen } from "@testing-library/react";
import Benefits from ".";
import userEvent from "@testing-library/user-event";
import { SelectedPage } from "../../shared/types";

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>, // Mock the motion.div component
    section: ({
      children,
      onViewportEnter,
    }: {
      children: React.ReactNode;
      onViewportEnter: any;
    }) => (
      <section data-testid="benefits" onFocus={() => onViewportEnter()}>
        {children}
      </section>
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

describe("Test the Benifits index", () => {

  test("Test Button Join Now", () => {
    const setSelectedPageMock = jest.fn();
    render(<Benefits setSelectedPage={setSelectedPageMock} />);
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
  test("onViewPortEnter Test", () => {
    const setSelectedPageMock = jest.fn();
    render(<Benefits setSelectedPage={setSelectedPageMock} />);
    fireEvent.focus(screen.getByTestId("benefits"));
    expect(setSelectedPageMock).toBeCalledTimes(1);
    expect(setSelectedPageMock).toHaveBeenCalledWith(SelectedPage.Benefits);
  });
});

export {};
