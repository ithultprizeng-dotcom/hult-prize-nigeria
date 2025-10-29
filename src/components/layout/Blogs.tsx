import BlogCard from "../ui/BlogCard";

export default function Blogs() {
  return (
    <section className="flex flex-col gap-10 px-8 py-20 bg-gallery items-center">
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
      <div className="w-full flex flex-nowrap gap-15 items-stretch justify-center"></div>
    </section>
  );
}
