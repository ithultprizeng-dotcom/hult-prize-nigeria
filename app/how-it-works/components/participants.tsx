"use client";
import list_orb from "@/public/images/orb.png";
import { ParticipantsList } from "./participantsList";
import { eligibleParticipants, irrelevant_things } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);
export default function Participants() {
  const container = useRef(null);
  useGSAP(
    () => {
      const split1 = SplitText.create(".participant-heading", {
        type: "chars, words",
        mask: "chars",
      });
      const split2 = SplitText.create(".participant-subText", {
        type: "lines",
        mask: "lines",
      });
      const split3 = SplitText.create(".split-3", {
        type: "chars, words",
        mask: "chars",
      });
      const startPosition = "top 65%";
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger-one",
          start: startPosition,
          end: "+=200",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out", yPercent: 120 },
      });
      tl.from(split1.chars, {
        stagger: 0.01,
      }).from(split2.lines, {
        stagger: 0.08,
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger-two",
          start: startPosition,
          end: "+=300",
          toggleActions: "play none none reverse",
        },
      });
      tl2.to(".trigger-two li", {
        opacity: 1,
        stagger: 0.08,
        ease: "power4.out",
        duration: 0.3,
      });
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger-three",
          start: startPosition,
          end: "+=300",
          toggleActions: "play none none reverse",
        },
      });
      tl3
        .from(split3.chars, {
          filter: "blur(4px)",
          opacity: 0,
          stagger: 0.01,
          y: 50,
          ease: "power2.inOut",
        })
        .to(".trigger-three li", {
          opacity: 1,
          stagger: 0.08,
          ease: "power4.out",
          duration: 0.3,
        });
    },
    { scope: container }
  );
  return (
    <section ref={container} className="flex flex-col gap-12 py-25">
      <div className="flex flex-col gap-1 trigger-one">
        <h2 className="font-figtree font-bold text-[#404090] tracking-[1.1px] leading-[1] text-sub-heading capitalize participant-heading">
          Who can participate?
        </h2>
        <p className="font-body text-[#808080] leading-[1.5] max-w-[45ch] text-balance participant-subText">
          The Hult Prize journey begins right on your campus. Hult Prize is open
          to:
        </p>
      </div>
      <section className="flex gap-8 flex-wrap trigger-two">
        {eligibleParticipants.map((each, index) => (
          <ParticipantsList text={each} key={index} imageSrc={list_orb} />
        ))}
      </section>
      <div className="flex flex-col mt-10 gap-8 trigger-three">
        <h2 className="font-figtree font-bold text-[#404090] tracking-[1.1px] leading-[1] text-3xl capitalize split-3">
          You do not need to have:
        </h2>

        <section className="flex gap-8 flex-wrap justify-stretch items-stretch">
          {irrelevant_things.map((each, index) => (
            <ParticipantsList text={each} key={index} imageSrc={list_orb} />
          ))}
        </section>
      </div>
    </section>
  );
}
