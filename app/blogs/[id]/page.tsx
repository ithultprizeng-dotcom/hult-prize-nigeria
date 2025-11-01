"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BlogAPIResponseData } from "@/src/lib/types";
import { fetchSingleBlogPost } from "@/src/lib/services";

export default function Blog() {
  const { id } = useParams();
  const sectionRef = useRef<HTMLElement>(null);
  const [blogPost, setBlogPost] = useState<BlogAPIResponseData | null>(null);
  const [html, sethtml] = useState("");

  useEffect(() => {
    async function getSingleBlogPost() {
      if (!id) return;
      const singleBlogPost = await fetchSingleBlogPost(id?.toString());
      setBlogPost(singleBlogPost);
      const blogContent = singleBlogPost.content;

      const cleanedBlogContent = blogContent
        .replace(/\\r\\n/g, "")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/&#39;/g, "'")
        .replace(/&quot;/g, '"')
        .replaceAll("\\", "");
      sethtml(cleanedBlogContent);
    }
    getSingleBlogPost();
  }, [blogPost]);

  return blogPost ? (
    <main className="flex flex-col gap-10 px-12 py-20">
      <h2 className="text-main-heading text-aloe font-figtree font-bold capitalize max-w-[30ch] text-balance leading-[1.4]">
        {blogPost?.title.toLowerCase().replaceAll("\\", "")}
      </h2>
      <Image
        src={blogPost ? blogPost.image_url : ""}
        alt={blogPost ? blogPost.title : ""}
        width={1440}
        height={800}
        className="w-full object-contain rounded-2xl"
      />
      <section
        ref={sectionRef}
        className="blog-content flex flex-col gap-4"
        dangerouslySetInnerHTML={{ __html: html }}
      ></section>
    </main>
  ) : (
    <div className="min-h-dvh text-black text-body-lg font-body font-bold py-20 px-8">
      Fetching blog. Please wait...
    </div>
  );
}
