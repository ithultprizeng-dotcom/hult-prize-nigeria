import Hero from "@/src/components/layout/Hero";
import HomePageAbout from "@/src/components/layout/HomePageAbout";
import Intro from "@/src/components/layout/Intro";
import Features from "@/src/components/layout/Features";
import Ideas from "@/src/components/layout/Ideas";
import dynamic from "next/dynamic";
import Ecosystem from "@/src/components/layout/Ecosystem";
import Testimonial from "@/src/components/layout/Testimonial";
import Blogs from "@/src/components/layout/Blogs";
const Media = dynamic(() => import("@/src/components/layout/Media"));

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <SectionDivisionOne />
      <Intro />
      <SectionDivisionTwo />
      <HomePageAbout />
      <Features />
      <Ideas />
      <Media />
      <Blogs />
      <Ecosystem />
      <Testimonial />
    </main>
  );
}

const SectionDivisionOne = () => {
  return (
    <section className="h-25 md:h-40 flex items-end">
      <div className="flex items-end gap-3">
        <div className="size-10 md:size-20 lg:size-30 bg-aloe rounded-tr-[200%]"></div>
        <div className="size-8 md:size-15 lg:size-25 bg-aloe rotate-45 translate-y-[50%]"></div>
      </div>
      <div className="ml-auto flex gap-0.5">
        {["", "", ""].map((item, index) => (
          <div
            key={index}
            className="h-10 w-15 md:h-15 md:w-25 lg:h-20 bg-aloe lg:w-40 rounded-t-full"
          ></div>
        ))}
      </div>
    </section>
  );
};

const SectionDivisionTwo = () => {
  return (
    <section className="h-25 sm:h-40 md:h-50 flex items-end bg-aloe overflow-hidden">
      <div className="bg-white sm:size-40 size-25 md:size-50 rounded-tr-full flex justify-end items-start flex-col gap-1 pl-2">
        <div className="flex gap-1 justify-center items-center">
          <div className="size-5 sm:size-8 md:size-10 bg-aloe rounded-full"></div>
          <div className="size-5 sm:size-8 md:size-10 bg-pink rounded-tr-full"></div>
          <div className="size-5 sm:size-8 md:size-10 bg-aloe rounded-full"></div>
        </div>
        <div className="flex gap-1 justify-center items-center">
          <div className="size-5 sm:size-8 md:size-10 bg-pink rounded-tr-full"></div>
          <div className="size-5 sm:size-8 md:size-10 bg-aloe rounded-full"></div>
          <div className="size-5 sm:size-8 md:size-10 bg-pink rounded-tl-full"></div>
        </div>
      </div>
      <div className="sm:size-40 size-30 rotate-45 translate-y-[50%] translate-x-[-30px] bg-white ml-auto flex justify-center items-center">
        <div className="rounded-full size-10 sm:size-15 bg-pink -translate-6 grid place-items-center">
          <div className="rounded-md size-6 sm:size-7 bg-white grid place-items-center">
            <div className="rounded size-3 sm:size-4 bg-aloe grid place-items-center">
              <div className="rounded size-1 sm:size-2 bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
