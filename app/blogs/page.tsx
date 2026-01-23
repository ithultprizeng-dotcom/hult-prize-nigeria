"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { fetchBlogs } from "@/src/lib/services";
import { BlogAPIResponseData } from "@/src/lib/types";
import blog_page_image from "@/public/images/Cozy Workspace Setup.png";
import { BlogCardType } from "@/src/lib/constants";
import Button from "@/src/components/ui/Button";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Team() {
  const container = useRef(null);
  useGSAP(
    () => {
      const headingSplit = new SplitText(".blog-heading", {
        type: "chars, words, lines",
        mask: "chars",
      });
      const subHeadingSplit = new SplitText(".blog-subheading", {
        type: "lines",
        mask: "lines",
      });
      gsap.set(headingSplit.chars, { yPercent: 110 });
      gsap.set(subHeadingSplit.lines, { yPercent: 110 });
      gsap.set([".blog-heading", ".blog-subheading"], { autoAlpha: 1 });
      gsap.to(headingSplit.chars, {
        yPercent: 0,
        ease: "power4.out",
        stagger: 0.05,
        delay: 0.2,
      });
      gsap.to(subHeadingSplit.lines, {
        yPercent: 0,
        ease: "power4.out",
        stagger: 0.1,
        delay: 0.4,
      });
      gsap.to(".blog-banner", {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "power4.out",
        duration: 0.8,
        delay: 0.8,
      });
    },
    { scope: container },
  );
  const [blogData, setBlogData] = useState<BlogAPIResponseData[] | null>(null);
  useEffect(() => {
    async function getBlogPosts() {
      const blogPostsData = await fetchBlogs();
      if (blogPostsData) setBlogData(() => blogPostsData.data);
    }
    getBlogPosts();
  }, []);

  return (
    <main ref={container} className="px-8 md:px-12">
      <section className="flex flex-col items-center mb-20 mt-8">
        <h2 className="font-figtree font-bold tracking-[-0.02em] text-hero text-black leading-[1.2] blog-heading text-center invisible">
          The Hult Pulse
        </h2>
        <p className="text-body max-w-prose text-center text-[#606060] invisible blog-subheading">
          Your central hub for official announcements, event highlights, and the
          latest news from the Hult Prize Nigeria ecosystem.
        </p>
      </section>
      <section className="flex w-full gap-10 bg-[#e6f4ef] rounded-2xl mb-24 flex-col md:flex-row opacity-0 blog-banner translate-y-20 scale-75">
        <article className="flex-1 flex flex-col px-6 md:pl-10 md:pr-0 py-12 text-pretty">
          <h3 className="font-bold text-4xl leading-[1.2] font-figtree text-aloe text-pretty">
            Documenting the Path Toward Sustainable Change
          </h3>
          <p className="mt-3 leading-[1.5] text-[#606060] text-pretty">
            Dive into the journeys of our finalists, learn best practices for
            social entrepreneurship in Nigeria, and get expert advice on
            developing your for-profit, for-people, and for-planet venture.
          </p>
          <p className="mt-auto text-aloe font-semibold">Hult Prize Nigeria - {new Date().toDateString()}</p>
        </article>
        <div className="md:flex-[1.2] h-100 relative">
          <Image
            src={blog_page_image}
            alt="Cozy Workspace Setup"
            placeholder="blur"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </section>

      <section className="mb-20">
        <h3 className="text-aloe font-bold font-figtree text-body-lg mb-8">
          Blog Posts for you:
        </h3>
        <section className="flex flex-wrap gap-10">
          {blogData
            ? blogData.map((data, index) => (
                <BlogCard
                  key={index}
                  id={data.id}
                  imageSrc={data.image_url}
                  title={data.title.toLocaleLowerCase()}
                  author={data.authour}
                />
              ))
            : Array.from("abacus").map((item, index) => (
                <BlogCardSkeleton key={index} />
              ))}
        </section>
      </section>
    </main>
  );
}

const BlogCard = ({ id, imageSrc, title, author }: BlogCardType) => {
  const router = useRouter();
  return (
    <article className="flex flex-col gap-6 w-[min(85vw,300px)] shrink-0 rounded-3xl bg-text-white pb-10 shadow-md">
      <div className="bg-aloe relative group overflow-clip w-full h-[250px] rounded-2xl shadow-2xl">
        <Image
          src={imageSrc}
          alt="group photograh"
          fill
          className="object-cover group-hover:scale-120 duration-300 ease-out"
        />
      </div>
      <div className="flex flex-col gap-0 pl-4 pr-2 flex-1">
        <h3 className="font-bold text-black font-figtree text-body-lg capitalize leading-[1.3] mb-2">
          {title.replaceAll("\\", "")}
        </h3>
        <p className="font-body text-[#707070] text-body font-medium mb-6 capitalize">
          {author.toLocaleLowerCase()}
        </p>

        <Button
          text="read blog"
          classnames="reversed button hov-pink bg-aloe grow-0 w-fit pr-6 pl-4 text-caption text-white font-semibold hover:bg-black py-1 font-figtree mt-auto"
          onclick={() => {
            router.push(`/blogs/${id}`);
          }}
        />
      </div>
    </article>
  );
};

const BlogCardSkeleton = () => (
  <div className="flex flex-col gap-6 w-[min(85vw,300px)] shrink-0 rounded-3xl bg-text-white pb-10 shadow-md">
    <div className="bg-[#94e8cc] relative group overflow-clip w-full h-[250px] rounded-2xl shadow-2xl animate-pulse"></div>
    <div className="flex flex-col gap-2 pl-4 *:animate-pulse">
      <div className="w-[80%] h-4 bg-[#ababab88] rounded-sm"></div>
      <div className="w-[60%] h-4 bg-[#ababab88] rounded-sm mb-6"></div>
      <div className="w-[35%] h-6 bg-[#ababab88] rounded-lg"></div>
    </div>
  </div>
);
