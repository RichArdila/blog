// app/page.tsx
import * as React from "react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getBlogPosts } from "@/lib/actions";

export default async function Page() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="p-20">
      <div className="mb-4 flex justify-between ">
        <h1 className="text-blue-400 text-4xl font-bold text-center">
          My Decoration Blog!
        </h1>
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
