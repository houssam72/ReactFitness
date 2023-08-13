import { fireEvent, render, screen } from "@testing-library/react";
import ActionButton from "./ActionButton";
import { SelectedPage } from "./types";
import userEvent from "@testing-library/user-event";

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
describe("Test the Action Buttom", () => {
  test("test if the button exist", () => {
    const setSelectedPageMock = jest.fn();
    render(
      <ActionButton setSelectedPage={setSelectedPageMock}>
        actionButton
      </ActionButton>
    );
    const actionButtonText = screen.getByRole("link", {
      name: /actionbutton/i,
    });
    expect(actionButtonText).toHaveAttribute(
      "href",
      `#${SelectedPage.ContactUs}`
    );
    userEvent.click(actionButtonText);
    expect(setSelectedPageMock).toHaveBeenCalledTimes(1);
    expect(setSelectedPageMock).toHaveBeenCalledWith(SelectedPage.ContactUs);
  });
});

export {};
