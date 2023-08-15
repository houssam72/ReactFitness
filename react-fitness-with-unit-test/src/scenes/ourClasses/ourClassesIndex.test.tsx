import { fireEvent, render, screen } from "@testing-library/react";
import OurClasses from ".";
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
      <section data-testid="ourClasses" onFocus={() => onViewportEnter()}>
        {children}
      </section>
    ), // Mock the motion.section component
  },
}));

describe("Our classes", () => {
  test("essential test", () => {
    const setSelectedPageMock = jest.fn();
    render(<OurClasses setSelectedPage={setSelectedPageMock} />);
    const firstHeading = screen.getByRole("heading", {
      name: /our classes/i,
    });
    const firstText = screen.getByText(
      /Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc./i
    );
    expect(firstHeading).toBeInTheDocument();
    expect(firstText).toBeInTheDocument();
  });

  test("onviewPortEnter", () => {
    const setSelectedPageMock = jest.fn();
    render(<OurClasses setSelectedPage={setSelectedPageMock} />);
    fireEvent.focus(screen.getByTestId("ourClasses"));
    expect(setSelectedPageMock).toBeCalledTimes(1);
    expect(setSelectedPageMock).toHaveBeenCalledWith(SelectedPage.OurClasses);
  });
});

export {};
