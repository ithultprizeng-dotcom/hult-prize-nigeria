"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BlogAPIResponseData } from "@/src/lib/types";

export default function BlogContent({ initialPost }: { initialPost: BlogAPIResponseData }) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    if (initialPost) {
      const cleaned = initialPost.content
        .replace(/\\r\\n/g, "")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replaceAll("\\", "");
      setHtml(cleaned);
    }
  }, [initialPost]);

  return (
    <main className="flex flex-col gap-10 px-12 py-20">
      <h2 className="text-main-heading text-aloe font-figtree font-bold capitalize max-w-[30ch] text-balance leading-[1.4]">
        {initialPost.title.toLowerCase().replaceAll("\\", "")}
      </h2>
      <Image
        src={initialPost.image_url}
        alt={initialPost.title}
        width={1440}
        height={800}
        className="w-full object-contain rounded-2xl"
      />
      <section
        className="blog-content flex flex-col gap-4 max-w-[80ch] leading-[1.5]"
        dangerouslySetInnerHTML={{ __html: html }}
      ></section>
    </main>
  );
}