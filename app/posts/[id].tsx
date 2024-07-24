"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function EditPostPage({ postId }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      // Cargar datos del post
    }
  }, [session]);

  if (!session) {
    return null; // o algún mensaje de carga
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Implementar lógica de edición de post
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
