"use client";
import { BlogCardType } from "@/src/lib/constants";
import Image from "next/image";
import Button from "./Button";
export default function BlogCard({ title, imageSrc, author }: BlogCardType) {
  return (
    <article className="flex flex-col gap-10 w-[350px]">
      <div className="grid grid-cols-1 w-[350px] h-[350px]">
        <div className="article-image bg-aloe col-start-1 col-end-2 row-start-1 row-end-2 z-2 relative">
          <Image
            src={imageSrc}
            alt="group photograh"
            fill
            className="object-cover"
          />
        </div>
        <div className="article-image bg-black col-start-1 col-end-2 row-start-1 row-end-2 z-0 -translate-x-2 translate-y-2"></div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-black font-figtree text-body-lg capitalize leading-[1.3]">
          {title}
        </h3>
        <p className="font-body text-[#707070] text-body font-semibold">
          {author}
        </p>

        <Button
          text="read blog"
          classnames="reversed button hov-pink bg-pink grow-0 w-fit pr-8 hover:bg-black"
        />
      </div>
    </article>
  );
}
