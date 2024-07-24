import * as React from "react";
import { useRouter } from "next/router";
import { getBlogPostById, updateBlogPost } from "@/lib/actions";

const EditPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    if (id) {
      getBlogPostById(id).then(setPost);
    }
  }, [id]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const { title, content } = event.target.elements;
    await updateBlogPost(id, { title: title.value, content: content.value });
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
};

export default EditPost;
