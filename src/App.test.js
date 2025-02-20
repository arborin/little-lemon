import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Ensure Jest DOM matchers are available
import App from "./App";

test("Displays 'Online Menu' button", async () => {
    render(<App />);

    // Debugging
    console.log(screen.debug());

    const linkBtn = await screen.findByTestId("online-menu");

    expect(linkBtn).toHaveTextContent("Online Menu"); // Corrected assertion
});

