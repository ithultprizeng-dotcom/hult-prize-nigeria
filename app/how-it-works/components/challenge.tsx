"use client";
import Image from "next/image";
import central_image from "../../../public/images/icon3.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);
export default function Challenge() {
  const container = useRef(null);
  useGSAP(
    () => {
      const split1 = SplitText.create(".challenge-head-text", {
        type: "words",
        mask: "words",
      });
      const split2 = SplitText.create(".challenge-sub-text", {
        type: "words",
        mask: "words",
      });
      const split3 = SplitText.create(".challenge-main-p", {
        type: "lines",
        mask: "lines",
      });
      const split4 = SplitText.create(".challenge-second-trigger h4", {
        type: "words",
        mask: "words",
      });
      const split5 = SplitText.create(".challenge-second-trigger p", {
        type: "lines",
        mask: "lines",
      });
      const split6 = SplitText.create(".challenge-third-trigger h4", {
        type: "words",
        mask: "words",
      });
      const split7 = SplitText.create(".challenge-third-trigger p", {
        type: "lines",
        mask: "lines",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".challenge-container",
          start: "top center",
          end: "+=250",
          scrub: true,
        },
      });
      gsap.set(".challenge-container", { autoAlpha: 1 });
      tl.from(split1.words, {
        yPercent: 120,
        ease: "power3.out",
        stagger: 0.1,
      })
        .from(
          split2.words,
          {
            yPercent: 120,
            ease: "power2.inOut",
            stagger: 0.1,
          },
          "<0.3"
        )
        .from(
          split3.lines,
          { yPercent: 120, ease: "power3.out", stagger: 0.2 },
          "<0.3"
        );

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".challenge-second-trigger",
          start: "top center",
          end: "+=250",
          scrub: true,
        },
      });
      gsap.set(
        [
          ".challenge-second-trigger",
          ".image-trigger",
          ".challenge-third-trigger",
        ],
        { autoAlpha: 1 }
      );
      tl2
        .from(split4.words, { yPercent: 120, stagger: 0.1 })
        .from(split5.lines, { yPercent: 120, stagger: 0.2 }, "<0.3");

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".image-trigger",
          start: "top center",
          end: "+=150",
          scrub: true,
        },
      });
      tl3.from(".image-trigger", {
        scale: 0,
        opacity: 0,
        transformOrigin: "right center",
      });
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".challenge-third-trigger",
          start: "top center",
          end: "+=250",
          scrub: true,
        },
      });
      tl4
        .from(split6.words, {
          opacity: 0,
          yPercent: 120,
          stagger: 0.1,
        })
        .from(split7.lines, { yPercent: 120, stagger: 0.3, ease: 'power4.inOut' }, "<0.3");
    },
    { scope: container }
  );
  return (
    <section ref={container} className="py-25 mt-15 flex flex-col gap-15 ">
      <div className="flex flex-col gap-0.5 challenge-container">
        <h3 className="font-figtree font-bold text-[#404090] text-main-heading leading-[1] challenge-head-text">
          The Hult Prize Challenge
        </h3>
        <h5 className="font-body font-bold text-[32px] text-pink leading-[1.5] mb-4 challenge-sub-text">
          Purpose Defined
        </h5>
        <p className="font-body text-base text-[#808080] leading-[1.5] max-w-prose tracking-[1px] challenge-main-p">
          Each year, the Hult Prize challenges student teams to solve a specific
          social problem defined by an annual theme, directly aligned with the
          UN Sustainable Development Goals (SDGs).
        </p>
      </div>
      <div className="flex flex-col mt-10 gap-8 challenge-second-trigger invisible">
        <div className="flex flex-col ">
          <h4 className="font-body font-bold text-aloe text-body-lg ">
            Triple Bottom Line
          </h4>
          <p className="font-body text-[#808080] max-w-[45ch] leading-[1.5] tracking-[0.8] text-body">
            All solutions must demonstrate viability across three pillars:
            People (social impact), Planet (environmental responsibility), and
            Profit (financial sustainability).
          </p>
        </div>
        <Image
          src={central_image}
          alt="icon"
          aria-hidden="true"
          className="w-70 object-contain mx-auto image-trigger invisible"
        />
        <div className="flex flex-col items-end text-right ml-auto challenge-third-trigger invisible">
          <h4 className="font-body font-bold text-aloe text-body-lg">
            Nigerian Relevance
          </h4>
          <p className="font-body text-[#808080] max-w-[45ch] leading-[1.5] tracking-[0.8] text-body">
            Your solution must be contextualized and designed to scale within
            the unique economic and social landscape of Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
}
