"use client";
import Image from "next/image";
import icon_image from "../../../public/images/works.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
// import { SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText);
export default function Hero() {
  const container = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
      const split = SplitText.create(".head_text", {
        type: "words, chars",
        mask: "chars",
      });
      const split2 = SplitText.create(".split-2", {
        type: "words",
        mask: "words",
      });
      const split3 = SplitText.create(".split-3", {
        type: "lines",
        mask: "lines",
      });

      const tl = gsap.timeline();
      gsap.set(
        [
          ".head_text",
          ".split-2",
          ".split-3",
          ".image-clip",
          ".oblong",
          ".circle",
        ],
        { autoAlpha: 1 }
      );
      tl.from(split.chars, {
        yPercent: 120,
        stagger: 0.01,
        ease: "power3.out",
      })
        .from(
          split2.words,
          {
            yPercent: 120,
            stagger: 0.1,
            ease: "elastic.out(1, 0.5)",
          },
          "<0.2"
        )
        .from(
          split3.lines,
          {
            yPercent: 110,
            stagger: 0.05,
            ease: "power3.out",
          },
          "<0.5"
        )
        .from(
          ".image-clip",
          {
            opacity: 0,
            ease: "power3.out",
            duration: 0.8,
          },
          "<0.5"
        )
        .from(
          [".oblong", ".circle"],
          {
            opacity: 0,
          },
          "<0.3"
        );
    },
    { scope: container }
  );
  return (
    <section
      ref={container}
      className="flex flex-col lg:flex-row items-center gap-14 justify-start"
    >
      <div className="flex flex-col gap-2">
        <h1
          className="font-body font-bold text-[#404090] text-main-heading capitalize leading-[1] head_text invisible"
          style={{ opacity: 1 }}
        >
          From Idea To Impact:
        </h1>
        <h3 className="font-body font-semibold text-pink text-3xl capitalize split-2 invisible">
          How It Works
        </h3>
        <p className="mt-4 font-body font-normal text-body text-[#707070] max-w-prose lg:max-w-[45ch] split-3 invisible">
          The Hult Prize is the world&rsquo;s largest student-led social
          entrepreneurship competition. At Hult Prize Nigeria, students are
          empowered to build sustainable, for-profit startups that solve
          Nigeria&rsquo;s most pressing social and environmental challenges.
        </p>
        <p className="font-body font-normal text-body text-[#707070] max-w-prose lg:max-w-[45ch] split-3 invisible">
          Here is a detailed explanation of how the journey works &#40;from
          registration to global finals&#41; and how you can transform your idea
          into a real company with global backing.
        </p>
      </div>
      <div className="relative">
        <div
          className="w-[min(300px,95vw)] clip:w-[700px] h-140 bg-pink rounded-lg shrink-0 overflow-clip relative image-clip bg-cover bg-center lg:bg-fixed invisible"
          style={{
            backgroundImage: "url(images/mentor.jpg)",
          }}
        ></div>
        <div className="absolute size-28 rounded-full top-118 -left-6 flex justify-center items-center shadow-xl bg-green-200 border-2 border-green-300 circle invisible">
          <Image
            src={icon_image}
            alt="icon image"
            aria-hidden="true"
            className="w-20 object-contain"
          />
        </div>
        <div
          className="absolute w-[80px] h-[160px] top-[315px] right-0 bg-pink-200 rounded-xl oblong invisible"
          style={{
            backgroundImage: "url(images/mentor.jpg)",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        ></div>
      </div>
    </section>
  );
}
