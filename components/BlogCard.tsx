import * as React from "react";
import { useRouter } from "next/navigation";

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
    <div className="rounded-lg border bg-white text-black shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          {title}
        </h3>
      </div>
      <div className="p-6 pt-0">
        <p className="text-sm text-gray-600">{`${content.slice(0, 50)}...`}</p>
      </div>
      <div className="flex items-center p-6 pt-0">
        <button
          onClick={handleReadMore}
          className="text-blue-500 hover:underline"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
