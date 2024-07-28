"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function getBlogPosts() {
  const res = await prisma.post.findMany();
  revalidatePath("/");
  return res;
}

export async function editPost(pid, title, content) {
  const res = await prisma.post.update({
    where: { id: Number(pid) },
    data: { title, content },
  });
  revalidatePath(`/posts/${pid}`);
  return res;
}

export async function getBlogPostsById(pid) {
  const res = await prisma.post.findUnique({
    where: { id: Number(pid) },
  });
  revalidatePath(`/posts/${pid}`);
  return res;
}

export async function deletePost(pid) {
  const res = await prisma.post.delete({
    where: { id: Number(pid) },
  });
  revalidatePath("/");
  return res;
}
