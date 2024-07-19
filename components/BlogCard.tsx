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

  return (
    <div className="flex flex-col rounded-lg border bg-white text-black shadow-sm">
      <div className="flex-1">
        <div className="flex flex-col space-y-1.5 p-8">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            {title}
          </h3>
        </div>
        <div className="p-6 pt-0">
          <p className="text-sm text-gray-600">{`${content.slice(
            0,
            400
          )}...`}</p>
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
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
