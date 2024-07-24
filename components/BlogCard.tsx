"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  content: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, content }) => {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/posts/${id}`);
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this post?")) {
      const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Post deleted successfully");
        router.refresh(); // Refresh the page or update the state to remove the deleted post from the list
      } else {
        alert("Failed to delete the post");
      }
    }
  };

  return (
    <div className="rounded-lg border bg-white text-black shadow-sm">
      <div className="flex flex-col space-y-1.5 p-8">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          {title}
        </h3>
      </div>
      <div className="p-6 pt-0">
        <p className="text-sm text-gray-600">{`${content.slice(0, 400)}...`}</p>
      </div>
      <div className="flex items-center justify-between p-6 pt-0">
        <button
          onClick={handleReadMore}
          className="text-blue-500 hover:underline"
        >
          Read More
        </button>
        <Link
          href={`/posts/edit/${id}`}
          className="text-blue-500 hover:underline"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="text-blue-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
