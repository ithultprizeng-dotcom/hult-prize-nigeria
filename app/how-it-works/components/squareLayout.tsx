"use client";
import { HultPrizeBenefitsType } from "../constants";
import { TagLabel } from "./tagLabel";
import { GridCardContent } from "./gridCardTextContent";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, DrawSVGPlugin, SplitText);
export function SquareLayout({
  title,
  subHeading,
  textContent,
  svg,
  tag,
}: HultPrizeBenefitsType) {
  const container = useRef(null);
  useGSAP(
    () => {
      const split = SplitText.create(".tag-label", {
        type: "chars",
        mask: "chars",
      });
      gsap.set(".tag-label", { autoAlpha: 0 });
      gsap.set(split.chars, { yPercent: 120 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".square-block",
          start: "top center",
          end: "+=200",
          scrub: 1,
        },
        ease: "power4.out",
      });
      tl.fromTo(".square-block", { opacity: 0, y: 50 }, { opacity: 1, y: 0 })

        .to(".tag-label", { autoAlpha: 1 })
        .to(split.chars, {
          yPercent: 0,
          stagger: { each: 0.1, from: "end" },
        });
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".svg-block",
          start: "top center",
          end: "+=250",
          scrub: 1,
        },
      });
      tl1.from(".icon-shape", { drawSVG: 0, stagger: 1 });
    },
    { scope: container }
  );
  return (
    <section ref={container} className="h-full w-full">
      <div className="bg-[#f0f0f0]  rounded-2xl hover:bg-[#ec208833]  duration-300 mb-6 w-full flex flex-col p-4 gap-4 square-block">
        <div className="flex w-full justify-between items-center">
          <TagLabel text={tag} />
          <div className="svg-block">{svg}</div>
        </div>
        <GridCardContent
          title={title}
          subHeading={subHeading}
          textContent={textContent}
        />
      </div>
    </section>
  );
}
