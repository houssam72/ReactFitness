import { render, screen } from "@testing-library/react";
import OurClasses from ".";
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>, // Mock the motion.div component
    section: ({ children }: { children: React.ReactNode }) => (
      <section data-testid="home">{children}</section>
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
});

export {};
