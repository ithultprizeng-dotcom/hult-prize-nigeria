"use client";
import { ParticipantsList } from "./participantsList";
import blob from "../../../public/images/distorted_orb.png";
import { ctaList } from "../constants";
import Button from "@/src/components/ui/Button";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
export function CallToAction() {
  const container = useRef(null);
  useGSAP(
    () => {
      const split = SplitText.create(".cta-heading", {
        type: "chars",
        mask: "chars",
      });
      const splitSub = SplitText.create(".cta-subtext", {
        type: "chars",
        mask: "chars",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".cta-text-block",
          start: "top center",
          end: "+=100",
          scrub: 1,
        },
      });
      tl.from(split.chars, { yPercent: 150, stagger: 0.2 }).from(
        splitSub.chars,
        { xPercent: 120, stagger: 0.2, ease: "bounce.out(3)" }
      );
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".list-hold",
          start: "top 65%",
          end: "+=200",
          scrub: true,
        },
      });
      tl2
        .to(
          ".list-hold li",
          {
            opacity: 1,
            x: 0,
            stagger: 0.2,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".btn-hold",
          { opacity: 0, y: 70 },
          { opacity: 1, y: 0, ease: "bounce.out(3)" }
        );
    },
    { scope: container }
  );
  return (
    <section ref={container} className="py-25">
      <div className="cta-text-block"></div>
      <h2 className="font-body idea-main-text font-black text-hero tracking-[3.5px] leading-[1.2] uppercase cta-heading">
        Ready to start?
      </h2>
      <p className="font-body font-semibold text-body-lg tracking-[1px] mb-8 text-pink cta-subtext">
        Your startup journey begins here
      </p>
      <div className="list-hold flex flex-col gap-8">
        <div className="flex gap-4  flex-wrap ">
          {ctaList.map((item, index) => (
            <ParticipantsList text={item} key={index} imageSrc={blob} />
          ))}
        </div>
        <div className="btn-hold">
          <Button text="Register Now!" classnames="reversed pl-4 pr-8" />
        </div>
      </div>
    </section>
  );
}
