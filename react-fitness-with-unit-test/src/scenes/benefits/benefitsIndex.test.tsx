import { render, screen } from "@testing-library/react";
import Benefits from ".";
import userEvent from "@testing-library/user-event";
import { SelectedPage } from "../../shared/types";

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>, // Mock the motion.div component
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
  test("test si y'a les base necessaire pour Index Benefit", () => {
    const setSelectedPageMaock = jest.fn();
    render(<Benefits setSelectedPage={setSelectedPageMaock} />);
    const firstHeader = screen.getByRole("heading", {
      name: /more than just gym\./i,
    });
    const secondHeader = screen.getByRole("heading", {
      name: /million of happy members getting/i,
    });
    const firstText = screen.getByText(
      /we provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease\. we provide true care into each and every member\./i
    );
    const secondText = screen.getByText(
      /nascetur aenean massa auctor tincidunt\. iaculis potenti amet egestas ultrices consectetur adipiscing ultricies enim\. pulvinar fames vitae vitae quis\. quis amet vulputate tincidunt at in nulla nec\. consequat sed facilisis dui sit egestas ultrices tellus\. ullamcorper arcu id pretium sapien proin integer nisl\. felis orci diam odio\./i
    );
    const thirdText = screen.getByText(
      /Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc./i
    );
    const imgBenefit = screen.getByRole("img", {
      name: /benefits\-page\-graphic/i,
    });
    expect(firstHeader).toBeInTheDocument();
    expect(secondHeader).toBeInTheDocument();
    expect(firstText).toBeInTheDocument();
    expect(secondText).toBeInTheDocument();
    expect(thirdText).toBeInTheDocument();
    expect(imgBenefit).toBeInTheDocument();
  });

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
});

export {};
