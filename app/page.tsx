import Header from "@/src/components/layout/Header";
import Hero from "@/src/components/layout/Hero";
import HomePageAbout from "@/src/components/layout/HomePageAbout";
import Intro from "@/src/components/layout/Intro";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SectionDivisionOne />
      <Intro />
      <SectionDivisionTwo />
      <HomePageAbout />
    </>
  );
}

const SectionDivisionOne = () => {
  return (
    <section className="h-40 flex items-end">
      <div className="flex items-end gap-3">
        <div className="h-30 w-30 bg-aloe rounded-tr-[200%]"></div>
        <div className="h-25 w-25 bg-aloe rotate-45 translate-y-[50%]"></div>
      </div>
      <div className="ml-auto flex gap-0.5">
        {["", "", ""].map((item, index) => (
          <div key={index} className="h-20 bg-aloe w-40 rounded-t-full"></div>
        ))}
      </div>
    </section>
  );
};

const SectionDivisionTwo = () => {
  return (
    <section className="h-50 flex items-end bg-aloe overflow-hidden">
      <div className="bg-white h-50 w-50 rounded-tr-full flex justify-end items-start flex-col gap-1 pl-2">
        <div className="flex gap-1 justify-center items-center">
          <div className="size-10 bg-aloe rounded-full"></div>
          <div className="size-10 bg-pink rounded-tr-full"></div>
          <div className="size-10 bg-aloe rounded-full"></div>
        </div>
        <div className="flex gap-1 justify-center items-center">
          <div className="size-10 bg-pink rounded-tr-full"></div>
          <div className="size-10 bg-aloe rounded-full"></div>
          <div className="size-10 bg-pink rounded-tl-full"></div>
        </div>
      </div>
      <div className="size-40 rotate-45 translate-y-[50%] translate-x-[-30px] bg-white ml-auto flex justify-center items-center">
        <div className="rounded-full size-15 bg-aloe -translate-6"></div>
      </div>
    </section>
  );
};
