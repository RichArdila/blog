import { useRouter } from "next/router";

const posts = [
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

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold">{post.title}</h1>
      <p className="mt-4">{post.content}</p>
    </div>
  );
};

export default Post;
