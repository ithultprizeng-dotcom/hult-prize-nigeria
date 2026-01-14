"use client";
import { HultPrizeBenefitsType } from "../constants";
import Image from "next/image";
import { TagLabel } from "./tagLabel";
import { GridCardContent } from "./gridCardTextContent";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { DrawSVGPlugin } from "gsap/all";
import { SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, DrawSVGPlugin, SplitText);
export function LandscapeLayout({
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
          trigger: ".landscape-block",
          start: "top center",
          end: "+=200",
          scrub: 1,
        },
        ease: "power4.out",
      });
      tl.fromTo(".landscape-block", { opacity: 0, y: 50 }, { opacity: 1, y: 0 })

        .to(".tag-label", { autoAlpha: 1 })
        .to(split.chars, {
          yPercent: 0,
          stagger: { each: 0.1, from: "end" },
        })
        .fromTo(
          ".landscape-image",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 }
        );
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
    <section ref={container} className="w-full h-full ">
      <div className="bg-[#f0f0f0] rounded-2xl hover:bg-[#06b47a40] duration-300 mb-6 w-full flex flex-col lg:flex-row p-6 gap-8 justify-center h-full landscape-block">
        {imgSrc && (
          <Image
            src={imgSrc}
            alt="grid image"
            aria-hidden="true"
            className="w-full lg:w-[45%] h-full shadow-[0_6px_12px_rgba(0,0,0,0.4)] object-contain lg:object-cover rounded-2xl flex-1 border-2 landscape-image"
          />
        )}

        <div className="flex flex-col gap-4 flex-1">
          <div className="flex gap-1 items-center w-full justify-between">
            <TagLabel text={tag} />
            <div className="svg-block">{svg}</div>
          </div>
          <GridCardContent
            title={title}
            subHeading={subHeading}
            textContent={textContent}
          />
        </div>
      </div>
    </section>
  );
}
