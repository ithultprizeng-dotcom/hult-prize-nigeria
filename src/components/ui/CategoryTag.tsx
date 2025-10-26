import cn from "@/src/lib/utils";

export function CategoryTag({ category }: { category: string }) {
  return (
    <div
      className={cn(
        `flex justify-center items-center py-2 px-4 w-fit rounded-full`,
        {
          "text-aloe bg-[#65b35755]": category.toLowerCase() == "agritech",
          "text-orange bg-[#ff931d55]": category.toLowerCase() == "energy",
          "text-sun bg-[#fdd40e55]": category.toLowerCase() == "environment",
          "text-midnight bg-[#2e318255]": category.toLowerCase() == "education",
          "text-purple bg-[#8a289055]": category.toLowerCase() == "housing",
          "text-navy bg-[#006fa755]": category.toLowerCase() == "fintech",
          "text-red bg-[#fb000055]": category.toLowerCase() == "healthtech",
          "text-sky bg-[#12b1e755]": category.toLowerCase() == "logistics",
          "text-spring bg-[#65b35755]": category.toLowerCase() == "civictech",
          "text-pink bg-[#ec208855]":
            category.toLowerCase() == "creative economy",
        }
      )}
    >
      <span className="font-bold font-body text-caption tracking-[1px] capitalize">
        {category}
      </span>
    </div>
  );
}
