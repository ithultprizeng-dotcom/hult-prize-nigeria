"use client";
import BlogCard from "../ui/BlogCard";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import cn from "@/src/lib/utils";
import { useState, useEffect } from "react";
import { fetchBlogs } from "@/src/lib/services";
import { BlogAPIResponseData } from "@/src/lib/types";

export default function Blogs() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const [blogData, setBlogData] = useState<BlogAPIResponseData[] | null>(null);
  useEffect(() => {
    async function getBlogPosts() {
      const blogPostsData = await fetchBlogs();
      if (blogPostsData) setBlogData(() => blogPostsData.data);
    }
    getBlogPosts();
  }, []);
  const numOfSlides = blogData?.length;
  const slideTotalWidthPlusGap = 123;
  const rightButtonClick = () => {
    numOfSlides &&
      setCurrentSlide((prev) => {
        if (prev < numOfSlides - 1) return prev + 1;
        return prev;
      });
  };
  const leftButtonClick = () => {
    setCurrentSlide((prev) => {
      if (prev > 0) return prev - 1;
      return prev;
    });
  };
  return (
    <section
      className="flex flex-col gap-15 px-8 py-20 bg-gallery items-center"
      id="blogs"
    >
      <div className="flex flex-col gap-3 text-center items-center">
        <h2 className="leading-[1.3] font-figtree font-bold text-main-heading text-aloe text-balance max-w-[20ch]">
          Insights, Stories, and{" "}
          <span className="px-4 py-1.5 rounded-[10px] bg-pink text-white">
            Innovation!
          </span>
        </h2>
        <p className="font-body text-body text-[#909090] leading-[1.5] tracking-[1px] max-w-[50ch] text-pretty text-center">
          Dive into the journeys of our finalists, learn best practices for
          social entrepreneurship in Nigeria, and get expert advice on
          developing your for-profit, for-people, and for-planet venture.
        </p>
      </div>
      <div className="relative">
        <button
          className={cn(
            `cursor-pointer backdrop:blur-2xl block absolute -left-4 sm:-left-10 top-[50%] z-30`,
            {
              "cursor-not-allowed opacity-20": currentSlide === 0,
            }
          )}
          onClick={leftButtonClick}
        >
          <CircleChevronLeft
            className={cn(
              `h-15 w-15 text-pink sm:text-aloe  hover:text-aloe sm:hover:text-pink duration-200`,
              {
                "hover:text-red-800": currentSlide === 0,
              }
            )}
          />
        </button>
        <button
          className={cn(
            `cursor-pointer backdrop:blur-2xl block -right-4 sm:-right-10 top-[50%] absolute z-30 `,
            {
              "cursor-not-allowed opacity-20":
                numOfSlides && currentSlide === numOfSlides - 1,
            }
          )}
          onClick={rightButtonClick}
        >
          <CircleChevronRight
            className={cn(
              "h-15 w-15 text-pink sm:text-aloe  hover:text-aloe sm:hover:text-pink duration-200",
              {
                "hover:text-red-800":
                  numOfSlides && currentSlide === numOfSlides - 1,
              }
            )}
          />
        </button>
        <div className="px-2 md:px-15 py-5 flex justify-center overflow-clip">
          <div
            className="flex justify-start gap-20 items-stretch w-[min(350px,85vw)] translate-x-[-0%] duration-500 ease-out"
            style={{
              transform: `translateX(-${
                currentSlide * slideTotalWidthPlusGap
              }%)`,
            }}
          >
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
      </div>
    </section>
  );
}
