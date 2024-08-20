"@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Page from "../app/importposts/create/page";
import { useRouter } from "next/navigation";
import { createPost } from "@/lib/actions";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/lib/actions", () => ({
  createPost: jest.fn(),
}));

describe("Create Post Page", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    mockPush.mockClear();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  it("should create a new blog post and navigate to the index page", async () => {
    (createPost as jest.Mock).mockResolvedValueOnce({});

    render(<Page />);

    // Simulates data entry in the form
    fireEvent.change(screen.getByLabelText(/title/i), {
      target: { value: "New Blog Post" },
    });
    fireEvent.change(screen.getByLabelText(/content/i), {
      target: { value: "This is the content of the new blog post." },
    });

    // Simulate form submission
    fireEvent.click(screen.getByText(/create/i));

    // Verify that the createPost function was called with the correct arguments
    expect(createPost).toHaveBeenCalledWith(
      "New Blog Post",
      "This is the content of the new blog post."
    );

    // Verify that the redirection to the index page occurs
    expect(mockPush).toHaveBeenCalledWith("/");
  });
});
