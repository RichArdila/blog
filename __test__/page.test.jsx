import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/about/page";

describe("About Page", () => {
  it("should render the about page with the correct content", () => {
    render(<AboutPage />);

    expect(screen.getByText(/About Us/i)).toBeInTheDocument();

    expect(screen.getByText(/Welcome to May Decorations/i)).toBeInTheDocument();
  });
});
