"use client";

import { editPost, getBlogPostsById } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const router = useRouter();
  const [post, setPost] = useState(null);
  const id = params.id;

  console.log(post);

  useEffect(() => {
    async function fetchData() {
      const res = await getBlogPostsById(id);
      console.log("resp", res);

      setPost(res);
    }

    fetchData();
  }, [id]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const { title, content } = event.target.elements;
    await editPost(id, title.value, content.value);
    router.push("/");
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Edit Post</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              name="title"
              defaultValue={post.title}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="content"
            >
              Content
            </label>
            <textarea
              name="content"
              defaultValue={post.content}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
