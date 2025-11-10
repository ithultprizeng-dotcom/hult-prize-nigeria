"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchBlogs } from "@/src/lib/services";
import { BlogAPIResponseData } from "@/src/lib/types";
import BlogCard from "@/src/components/ui/BlogCard";

export default function Team() {
  const [blogData, setBlogData] = useState<BlogAPIResponseData[] | null>(null);
    useEffect(() => {
      async function getBlogPosts() {
        const blogPostsData = await fetchBlogs();
        if (blogPostsData) setBlogData(() => blogPostsData.data);
      }
      getBlogPosts();
    }, []);

  return (
    <main className="px-8 py-20 flex flex-col gap-20 items-center">
      <div>
        <h1 className="font-figtree font-semibold text-aloe text-sub-heading leading-[1.3] max-w-[30ch]">
          Insights, Stories, and Innovation!
        </h1>
        <p className="mt-5 font-body font-normal text-[#808080] text-body leading-[1.5] max-w-prose text-balance ">
          Dive into the journeys of our finalists, learn best practices for
          social entrepreneurship in Nigeria, and get expert advice on
          developing your for-profit, for-people, and for-planet venture.
        </p>
      </div>

      <section className="flex flex-col gap-30 items-center">
        <div className="flex flex-col gap-10 items-center">
          <div className="flex flex-wrap items-stretch gap-12 justify-center">
            {blogData?.map((each_blog_data) => (
                <BlogCard
                id={each_blog_data.id}
                key={each_blog_data.id}
                imageSrc={each_blog_data.image_url}
                title={each_blog_data.title.replaceAll("\\", "")}
                author={each_blog_data.authour}
                />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
