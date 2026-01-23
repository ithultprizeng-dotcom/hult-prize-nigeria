"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);
export function GridCardContent({
  title,
  subHeading,
  textContent,
}: {
  title: string;
  subHeading: string;
  textContent: string;
}) {
  const container = useRef(null);
  useGSAP(
    () => {
      const split = SplitText.create(".content-holder h3", { type: "chars, words" });
      const split1 = SplitText.create(".content-holder p", {
        type: "lines",
        mask: "lines",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".content-holder",
          start: "top center",
          end: "+=200",
          toggleActions: 'play none none reverse'
        },
      });
      tl.from(split.chars, {
        opacity: 0,
        filter: "blur(5px)",
        stagger: 0.007,
      }).from(
        split1.lines,
        { yPercent: 120, stagger: { each: 0.05, from: "end" } },
        "<0.2"
      );
    },
    { scope: container }
  );
  return (
    <article ref={container} className="">
      <div className="flex flex-col gap-4 mt-auto content-holder">
        <div className="flex flex-col gap-1">
          <h3 className="font-body font-bold text-aloe text-3xl tracking-[1.3px] capitalize">
            {title}
          </h3>
          <p className="font-body text-body leading-[1.5] [word-spacing:1.5px] max-w-[50ch] text-pretty capitalize text-[#60609a] font-semibold">
            {subHeading}
          </p>
        </div>
        <p className="font-body text-[#808080] text-body leading-[1.5] max-w-[50ch] text-pretty [word-spacing:1.5px]">
          {textContent}
        </p>
      </div>
    </article>
  );
}
