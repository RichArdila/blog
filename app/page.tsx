import * as React from "react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";

const blogPosts = [
  {
    id: "1",
    title: "My Blog Post 1",
    content:
      "This is my first blog post. It contains more than fifty characters to demonstrate the preview feature.",
  },
  {
    id: "2",
    title: "My Blog Post 2",
    content:
      "This is my second blog post. It also contains more than fifty characters to demonstrate the preview feature.",
  },
  {
    id: "3",
    title: "My Blog Post 3",
    content:
      "This is my third blog post. It contains a lot of content to show how the read more feature works effectively.",
  },
];

function Home() {
  return (
    <div className="p-4">
      <div className="mb-4 flex justify-between">
        <h1 className="text-3xl font-bold">My Blog</h1>
        <Link
          href="/posts/create"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Create Post
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
