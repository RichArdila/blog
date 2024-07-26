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
    <form onSubmit={handleUpdate}>
      <div>
        <label>Title</label>
        <input name="title" defaultValue={post.title} />
      </div>
      <div>
        <label>Content</label>
        <textarea name="content" defaultValue={post.content} />
      </div>
      <button type="submit">Update</button>
    </form>
  );
}
