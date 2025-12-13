"use client";
import { winnersSelection, preparationTips } from "../constants";
import Image from "next/image";
import list_icon from "@/public/images/icon.png";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export function JudgingCriteria() {
  const container = useRef(null);
  useGSAP(
    () => {
      const split = SplitText.create(".block-left .criteria-heading", {
        type: "chars, words",
        mask: "chars",
      });
      const splitSub = SplitText.create(".block-left .criteria-subtext", {
        type: "words",
        mask: "chars",
      });
      const split1 = SplitText.create(".block-right .criteria-heading", {
        type: " words",
        mask: "chars",
      });
      const splitSub1 = SplitText.create(".block-right .criteria-subtext", {
        type: "chars, words",
        mask: "chars",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".criteria-block",
          start: "top 90%",
          end: "top 5%",
          scrub: true,
        },
      });
      tl.from(split.words, {
        yPercent: -150,
        stagger: 0.3,
      })
        .from(
          split1.words,
          {
            yPercent: 150,
            stagger: 0.3,
          },
          "<"
        )
        .fromTo(
          splitSub.chars,
          { opacity: 0 },
          { opacity: 1, stagger: { each: 0.3, from: "end" } },
          "<0.3"
        )
        .fromTo(
          splitSub1.chars,
          { opacity: 0 },
          { opacity: 1, stagger: { each: 0.3, from: "end" } },
          "<0.3"
        )
        .from(".criteria-item", {
          x: -200,
          stagger: 0.3,
          opacity: 0,
          ease: "bounce.out(3)",
        })
        .from(
          ".criteria-item-right",
          { x: 200, stagger: 0.3, opacity: 0, ease: "bounce.out(3)" },
          "<"
        );
    },
    { scope: container }
  );
  return (
    <section ref={container} className="flex gap-8 py-25 relative">
      <div
        className="absolute inset-0 -z-10 blur-2xl opacity-80"
        style={{
          backgroundImage: "url(/images/green-background.png)",
          backgroundSize: "contain",
        }}
      ></div>
      <section className="flex flex-1 flex-col items-end gap-6 text-right criteria-block block-left">
        <div>
          <h3 className="font-bold font-body text-3xl text-aloe capitalize tracking-[1.5px] mb-1 criteria-heading">
            How winners are selected
          </h3>
          <p className="font-body font-semibold text-body text-pink tracking-[1px] criteria-subtext">
            Judges look for teams with:
          </p>
        </div>
        <ul className="flex flex-col gap-1.5">
          {winnersSelection.map((selection, index) => (
            <li
              key={index}
              className="font-body text-body text-black font-medium tracking-[0.8px] capitalize flex justify-end items-center gap-2 criteria-item"
            >
              <Image
                src={list_icon}
                alt="list icon"
                aria-hidden="true"
                className="w-10 object-contain"
              />
              <p>{selection}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-1 flex-col items-start gap-6 text-left criteria-block block-right">
        <div>
          <h3 className="font-bold font-body text-3xl text-aloe capitalize tracking-[1.5px] mb-1 criteria-heading">
            How to prepare for success
          </h3>
          <p className="font-body font-semibold text-body text-pink tracking-[1px] criteria-subtext">
            If you want to win:
          </p>
        </div>

        <ul className="flex flex-col gap-1.5">
          {preparationTips.map((tip, index) => (
            <li
              key={index}
              className="font-body text-body text-black font-medium tracking-[0.8px] capitalize flex items-center gap-2 criteria-item-right"
            >
              <p>{tip}</p>
              <Image
                src={list_icon}
                alt="list icon"
                aria-hidden="true"
                className="w-10 object-contain"
              />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
