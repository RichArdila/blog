"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function createPost(title: string, content: string) {
  const res = await prisma.post.create({
    data: { title, content },
  });
  revalidatePath("/");
  return res;
}

export async function getBlogPosts() {
  const res = await prisma.post.findMany();
  revalidatePath("/");
  return res;
}

export async function editPost(pid: number, title: string, content: string) {
  const res = await prisma.post.update({
    where: { id: Number(pid) },
    data: { title, content },
  });
  revalidatePath(`/posts/${pid}`);
  return res;
}

export async function getBlogPostsById(pid: number) {
  const res = await prisma.post.findUnique({
    where: { id: Number(pid) },
  });
  revalidatePath(`/posts/${pid}`);
  return res;
}

export async function deletePost(pid: number) {
  const res = await prisma.post.delete({
    where: { id: Number(pid) },
  });
  revalidatePath("/");
  return res;
}
