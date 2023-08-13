import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactUs from "./index";

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>, // Mock the motion.div component
    section: ({ children }: { children: React.ReactNode }) => (
      <section data-testid="home">{children}</section>
    ), // Mock the motion.section component
  },
}));

describe("ContactUs Test", () => {
  test("Les tests BAsic", () => {
    const setSelectedPageMock = jest.fn();
    render(<ContactUs setSelectedPage={setSelectedPageMock} />);
    const firstHeading = screen.getByRole("heading", {
      name: /join now to get in shape/i,
    });
    const firstText = screen.getByText(
      /congue adipiscing risus commodo placerat\. tellus et in feugiat nisl sapien vel rhoncus\. placerat at in enim pellentesque\. nulla adipiscing leo egestas nisi elit risus sit\. nunc cursus sagittis\./i
    );
    const img = screen.getByRole("img", {
      name: /contact\-us\-page\-graphic/i,
    });

    expect(firstHeading).toBeInTheDocument();
    expect(firstText).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  test("Test formulaire en remplir tous les input", async () => {
    const setSelectedPageMock = jest.fn();

    render(<ContactUs setSelectedPage={setSelectedPageMock} />);
    const nameInput = screen.getByPlaceholderText("NAME");
    const emailInput = screen.getByPlaceholderText("EMAIL");
    const messageInput = screen.getByPlaceholderText("MESSAGE");
    const submitButton = screen.getByText("SUBMIT");

    await act(async () => {
      // Simulate user input
      fireEvent.change(nameInput, { target: { value: "John Doe" } });
      fireEvent.change(emailInput, { target: { value: "john@example.com" } });
      fireEvent.change(messageInput, { target: { value: "Hello, world!" } });
    });

    // Mock the trigger function to always return true for validation

    // Submit the form
    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(screen.queryAllByText("This field is required")).toStrictEqual([]);
  });

  test("Affichage du message [This field is required] pour l'input name", async () => {
    const setSelectedPageMock = jest.fn();

    render(<ContactUs setSelectedPage={setSelectedPageMock} />);

    const emailInput = screen.getByPlaceholderText("EMAIL");
    const messageInput = screen.getByPlaceholderText("MESSAGE");
    const submitButton = screen.getByText("SUBMIT");

    await act(async () => {
      // Simulate user input
      fireEvent.change(emailInput, { target: { value: "john@example.com" } });
      fireEvent.change(messageInput, { target: { value: "Hello, world!" } });
    });

    // Submit the form
    await act(async () => {
      userEvent.click(submitButton);
    });

    expect(screen.queryAllByText(/This field is required/i)).toHaveLength(1);
  });

  test("Affichage du meesage [Max length is 100 char] pour l'input name", async () => {
    const setSelectedPageMock = jest.fn();

    render(<ContactUs setSelectedPage={setSelectedPageMock} />);

    const nameInput = screen.getByPlaceholderText("NAME");
    const emailInput = screen.getByPlaceholderText("EMAIL");
    const messageInput = screen.getByPlaceholderText("MESSAGE");
    const submitButton = screen.getByText("SUBMIT");

    await act(async () => {
      // Simulate user input
      const longValue = Array(101).fill("a").join("");
      fireEvent.change(nameInput, { target: { value: longValue } });
      fireEvent.change(emailInput, { target: { value: "john@example.com" } });
      fireEvent.change(messageInput, { target: { value: "Hello, world!" } });
    });

    // Submit the form
    await act(async () => {
      userEvent.click(submitButton);
    });

    expect(screen.queryByText(/Max length is 100 char/i)).toBeInTheDocument();
  });

  test("Affichage du message [This field is required] pour l'input Email", async () => {
    const setSelectedPageMock = jest.fn();

    render(<ContactUs setSelectedPage={setSelectedPageMock} />);

    const nameInput = screen.getByPlaceholderText("NAME");
    const messageInput = screen.getByPlaceholderText("MESSAGE");
    const submitButton = screen.getByText("SUBMIT");

    await act(async () => {
      // Simulate user input
      fireEvent.change(nameInput, { target: { value: "Jhon" } });
      fireEvent.change(messageInput, { target: { value: "Hello, world!" } });
    });

    // Submit the form
    await act(async () => {
      userEvent.click(submitButton);
    });

    expect(screen.queryAllByText(/This field is required/i)).toHaveLength(1);
  });

  test("Affichage du message [Invalid email adress] pour l'input Email", async () => {
    const setSelectedPageMock = jest.fn();

    render(<ContactUs setSelectedPage={setSelectedPageMock} />);
    const nameInput = screen.getByPlaceholderText("NAME");
    const emailInput = screen.getByPlaceholderText("EMAIL");
    const messageInput = screen.getByPlaceholderText("MESSAGE");
    const submitButton = screen.getByText("SUBMIT");

    await act(async () => {
      // Simulate user input
      fireEvent.change(nameInput, { target: { value: "John Doe" } });
      fireEvent.change(emailInput, { target: { value: "john" } });
      fireEvent.change(messageInput, { target: { value: "Hello, world!" } });
    });

    // Mock the trigger function to always return true for validation

    // Submit the form
    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(screen.queryByText("Invalid email adress")).toBeInTheDocument();
  });

  test("Affichage du message [This field is required] pour l'input Message", async () => {
    const setSelectedPageMock = jest.fn();

    render(<ContactUs setSelectedPage={setSelectedPageMock} />);

    const nameInput = screen.getByPlaceholderText("NAME");
    const emailInput = screen.getByPlaceholderText("EMAIL");
    const submitButton = screen.getByText("SUBMIT");

    await act(async () => {
      // Simulate user input
      fireEvent.change(nameInput, { target: { value: "jhon" } });
      fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    });

    // Submit the form
    await act(async () => {
      userEvent.click(submitButton);
    });

    expect(screen.queryAllByText(/This field is required/i)).toHaveLength(1);
  });

  test("Affichage du meesage [Max length is 100 char] pour l'input name", async () => {
    const setSelectedPageMock = jest.fn();

    render(<ContactUs setSelectedPage={setSelectedPageMock} />);

    const nameInput = screen.getByPlaceholderText("NAME");
    const emailInput = screen.getByPlaceholderText("EMAIL");
    const messageInput = screen.getByPlaceholderText("MESSAGE");
    const submitButton = screen.getByText("SUBMIT");

    await act(async () => {
      // Simulate user input
      const longValue = Array(2001).fill("a").join("");
      fireEvent.change(nameInput, { target: { value: "Jhon" } });
      fireEvent.change(emailInput, { target: { value: "john@example.com" } });
      fireEvent.change(messageInput, { target: { value: longValue } });
    });

    // Submit the form
    await act(async () => {
      userEvent.click(submitButton);
    });

    expect(screen.queryByText(/Max length is 2000 char/i)).toBeInTheDocument();
  });
});

export {};
