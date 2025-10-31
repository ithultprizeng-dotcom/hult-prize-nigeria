"use client";
import BlogCard from "../ui/BlogCard";
import { BlogPosts } from "@/src/lib/constants";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { useState } from "react";
import cn from "@/src/lib/utils";

export default function Blogs() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [haveAllSlidesBeenViewed, setSlidesViewStatus] =
    useState<boolean>(false);
  const numOfSlides = BlogPosts.length;
  const slideTotalWidthPlusGap = 123;
  const rightButtonClick = () => {
    setCurrentSlide((prev) => {
      console.log(prev);
      if (prev < numOfSlides - 1) return prev + 1;
      return prev;
    });
  };
  const leftButtonClick = () => {
    setCurrentSlide((prev) => {
      console.log(prev);
      if (prev > 0) return prev - 1;
      return prev;
    });
  };
  return (
    <section className="flex flex-col gap-15 px-8 py-20 bg-gallery items-center">
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
          className={cn(`cursor-pointer backdrop:blur-2xl block`, {
            "cursor-not-allowed opacity-0 hidden": currentSlide === 0,
          })}
          onClick={leftButtonClick}
        >
          <CircleChevronLeft
            className={cn(
              `h-15 w-15 text-aloe absolute -left-10 top-[50%] hover:text-pink duration-200`,
              { "hover:text-red-800": currentSlide === 0 }
            )}
          />
        </button>
        <button
          className={cn(`cursor-pointer backdrop:blur-2xl block`, {
            "cursor-not-allowed opacity-0 hidden": currentSlide === numOfSlides - 1,
          })}
          onClick={rightButtonClick}
        >
          <CircleChevronRight
            className={cn(
              "h-15 w-15 text-aloe -right-10 top-[50%] absolute hover:text-pink duration-200",
              { "hover:text-red-800": currentSlide === numOfSlides - 1 }
            )}
          />
        </button>
        <div className="px-15 py-5 flex justify-center overflow-clip">
          <div
            className="flex gap-20 items-stretch w-[350px] translate-x-[-0%] duration-500 ease-out"
            style={{
              transform: `translateX(-${
                currentSlide * slideTotalWidthPlusGap
              }%)`,
            }}
          >
            {BlogPosts.map((eachBlogPost, index) => (
              <BlogCard
                key={index}
                imageSrc={eachBlogPost.imageSrc}
                title={eachBlogPost.title}
                author={eachBlogPost.author}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
