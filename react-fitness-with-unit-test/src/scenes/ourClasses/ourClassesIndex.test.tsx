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
  test("onviewPortEnter", () => {
    const setSelectedPageMock = jest.fn();
    render(<OurClasses setSelectedPage={setSelectedPageMock} />);
    fireEvent.focus(screen.getByTestId("ourClasses"));
    expect(setSelectedPageMock).toBeCalledTimes(1);
    expect(setSelectedPageMock).toHaveBeenCalledWith(SelectedPage.OurClasses);
  });
});

export {};
