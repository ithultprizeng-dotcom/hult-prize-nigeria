"use client";
import Image from "next/image";
import UseGetBlogPostByParam from "@/src/hooks/UseGetBlogPostByParam";
import { turnMarkedUpTextIntoStructuredHTML } from "@/src/lib/constants";
import { notFound } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Blog() {
  const sectionRef = useRef<HTMLElement>(null);
  const blogPost = UseGetBlogPostByParam();
  useEffect(() => {
    if (sectionRef.current && blogPost?.contentFullText)
      sectionRef.current.innerHTML = turnMarkedUpTextIntoStructuredHTML(
        blogPost?.contentFullText
      );
  }, [blogPost]);
  if (!blogPost) return notFound();
  return (
    <main className="flex flex-col gap-10 px-12 py-20">
      <h2 className="text-main-heading text-aloe font-figtree font-bold capitalize max-w-[30ch] text-balance leading-[1.4]">
        {blogPost.title.toLowerCase()}
      </h2>
      <Image
        src={blogPost.imageSrc}
        alt={blogPost.title}
        width={1440}
        height={800}
        className="w-full object-contain rounded-2xl"
      />
      <section
        ref={sectionRef}
        className="blog-content flex flex-col gap-4"
      ></section>
    </main>
  );
}
