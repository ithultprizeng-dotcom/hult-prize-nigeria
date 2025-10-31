"use client";
import { useParams } from "next/navigation";
import { BlogPosts } from "../lib/constants";

export default function UseGetBlogPostByParam() {
  const { id } = useParams();
    return BlogPosts.find((eachPost) => eachPost.id === id);
}
