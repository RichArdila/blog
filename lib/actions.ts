import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function getBlogPosts() {
  const res = await prisma.post.findMany();
  revalidatePath("/");
  return res;
}

export async function editPost() {
  const res = await prisma.post.findUnique({ where: { id: String(id) } });
  revalidatePath(`/posts/${id}`);
  return res;
}
