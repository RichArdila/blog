import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import BlogCard from "../components/BlogCard";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

// Mocking next/navigation useRouter
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

// Mocking useSession from next-auth
jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
}));

// Mocking deletePost function
jest.mock("@/lib/actions", () => ({
  deletePost: jest.fn(),
}));

describe("BlogCard Component", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    mockPush.mockClear();
    useRouter.mockReturnValue({ push: mockPush });
  });

  it("should not show delete button when the user is not logged in", () => {
    useSession.mockReturnValue({
      data: null,
      status: "unauthenticated",
    });

    render(
      <BlogCard
        id={1}
        title="Test Title"
        content="Test content for this blog post"
      />
    );

    const deleteButton = screen.queryByText(/delete/i);
    expect(deleteButton).not.toBeInTheDocument();
  });

  it("should show delete button when the user is logged in", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { name: "Test User", email: "test@example.com" } },
      status: "authenticated",
    });

    render(
      <BlogCard
        id={1}
        title="Test Title"
        content="Test content for this blog post"
      />
    );

    const deleteButton = screen.getByText(/delete/i);
    expect(deleteButton).toBeInTheDocument();
  });
});
