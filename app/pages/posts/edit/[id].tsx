import * as React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const posts = [
  { id: "1", title: "My Blog Post 1", content: "This is my first blog post." },
  { id: "2", title: "My Blog Post 2", content: "This is my second blog post." },
  { id: "3", title: "My Blog Post 3", content: "This is my third blog post." },
];

const EditPost: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const post = posts.find((post) => post.id === id);
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para actualizar la publicación en tu base de datos
    console.log("Post updated:", { id, title, content });
    router.push("/"); // Redirigir a la página principal después de editar la publicación
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditPost;
