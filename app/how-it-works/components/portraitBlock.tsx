"use client";
import { HultPrizeBenefitsType } from "../constants";
import Image from "next/image";
import { TagLabel } from "./tagLabel";
import { GridCardContent } from "./gridCardTextContent";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger, DrawSVGPlugin);
export function PortraitBlock({
  title,
  subHeading,
  textContent,
  svg,
  tag,
  imgSrc,
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
          trigger: ".portrait-block",
          start: "top center",
          end: "+=400",
          scrub: 1,
        },
        ease: "power4.out",
      });
      tl.fromTo(".portrait-block", { opacity: 0, y: 50 }, { opacity: 1, y: 0 })

        .to(".tag-label", { autoAlpha: 1 })
        .to(split.chars, {
          yPercent: 0,
          stagger: { each: 0.1, from: "end" },
        })
        .fromTo(".portrait-image", { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".svg-block",
          start: "top center",
          end: "+=250",
          scrub: 1,
        },
      });
      tl1.from(".icon-shape", { drawSVG: 0, stagger: 1, });
    },
    { scope: container }
  );
  return (
    <section ref={container} className=" h-full w-full grid-block">
      <div className="portrait-block w-full h-full bg-[#f0f0f0]  rounded-2xl hover:bg-[#ec208833] duration-300 mb-6 flex flex-col p-4 py-6 gap-6">
        <div className="flex justify-between items-start gap-1 tag-label-block">
          <TagLabel text={tag} />
          <div className="svg-block">{svg}</div>
        </div>
        <div className="flex flex-col gap-6 flex-1 ">
          {imgSrc && (
            <Image
              src={imgSrc}
              alt="grid image"
              aria-hidden="true"
              className="w-full shadow-[0_4px_12px_rgba(0,0,0,0.2)] h-50 object-cover rounded-2xl flex-1 border-2 portrait-image"
            />
          )}
          <div className="mt-auto">
            <GridCardContent
              title={title}
              subHeading={subHeading}
              textContent={textContent}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
