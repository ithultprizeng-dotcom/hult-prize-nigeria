"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchSingleBlogPost } from "../lib/services";
import { BlogAPIResponseData } from "../lib/types";

export default function UseGetBlogPostByParam() {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState<BlogAPIResponseData | null>(null);
  useEffect(() => {
    async function getSingleBlogPost() {
      if (!id) return;
      const singleBlogPost = await fetchSingleBlogPost(id?.toString());
      setBlogPost(singleBlogPost);
    }
    getSingleBlogPost();
  }, []);
  return blogPost;
}
