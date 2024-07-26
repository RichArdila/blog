"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getBlogPostsById } from "@/lib/actions";

const PostPage = ({ params }) => {
  const router = useRouter();
  const [post, setPost] = useState(null);
  const id = params.id;

  useEffect(() => {
    async function fetchData() {
      const res = await getBlogPostsById(id);
      console.log("resp", res);

      setPost(res);
    }

    fetchData();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-pink-100 p-6 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-800 leading-relaxed">{post.content}</div>
      </div>
    </div>
  );
};

export default PostPage;
