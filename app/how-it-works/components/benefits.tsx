"use client";
import { BenefitsGrid } from "./benefitsGrid";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
export default function Benefits() {
  const container = useRef(null);
  useGSAP(
    () => {
      const split = SplitText.create(".benefits-heading", {
        type: "chars",
        mask: "chars",
      });
      const split1 = SplitText.create(".benefits-subtext", {
        type: "words",
        mask: "words",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".benefits-main-text-block",
          start: "top center",
          end: "+=100",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out", yPercent: 120 },
      });
      tl.from(split.chars, {
        stagger: { each: 0.05, from: "center" },
      }).from(split1.words, { stagger: { each: 0.007, from: "edges" } }, "<0.2");
    },
    { scope: container }
  );
  return (
    <section ref={container} className="py-25 mt-5">
      <div className="benefits-main-text-block">
        <h2 className="font-figtree font-bold tracking-[1.5px] text-[#404090] text-main-heading leading-[1.2] uppercase benefits-heading">
          what you gain
        </h2>
        <p className="font-body font-semibold text-body-lg text-pink mb-12 benefits-subtext">
          Benefits of Joining Nigeria’s Largest Student Startup Competition
        </p>
      </div>
      <BenefitsGrid />
    </section>
  );
}
