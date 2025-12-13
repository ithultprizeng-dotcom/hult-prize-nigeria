"use client";
import central_image from "@/public/images/Surreal Pathway Walk.jpg";
import sphere_orb from "@/public/images/sphere-orb.png";
import triangle from "@/public/images/triangular-orb.png";
import Image from "next/image";
import type { CompetitionTimelineType } from "../constants";
import { ParticipantsList } from "./participantsList";
import { competition_timeline } from "../constants";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
export default function CompetitionJourney() {
  const container = useRef(null);
  useGSAP(
    () => {
      const split = SplitText.create(".journey-major", {
        type: "words,chars",
        mask: "chars",
      });
      const timelineBlockArray = gsap.utils.toArray(".timeline-block");
      const competitionListArray = gsap.utils.toArray(".competition-list");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".journey-image-box",
          start: "top top",
          end: "+=400",
          scrub: true,
          pin: true,
        },
      });
      tl.to(".journey-central-image", {
        width: "100%",
        height: "100vh",
        filter: "saturate(120%) brightness(110%)",
      });
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".journey-image-box",
          start: "bottom center",
          end: "+=200",
          scrub: true,
        },
      });
      tl1.from(split.chars, {
        yPercent: 120,
        stagger: { each: 0.1, from: "edges" },
        ease: "power3.out",
      });

      timelineBlockArray.forEach((_, index) => {
        const split1 = SplitText.create(
          `.timeline-block:nth-child(${index + 1}) h2`,
          {
            type: "chars",
            mask: "chars",
          }
        );
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: ` .timeline-block:nth-child(${index + 1})`,
            start: "top center",
            end: "+=150",
            scrub: true,
          },
        });
        tl2
          .from(`.timeline-block:nth-child(${index + 1}) img`, {
            opacity: 0,
            scale: 0,
            y: -100,
          })
          // .from(`.timeline-block:nth-child(${index + 1}) .timeline-line`, {
          //   opacity: 0,
          //   scaleY: 0,
          //   transformOrigin: "top",
          //   y: -100,
          // })
          .from(`.timeline-block:nth-child(${index + 1}) h3`, {
            y: 100,
            opacity: 0,
            ease: "power4.out",
            duration: 3,
          })
          .from(split1.chars, { yPercent: 120, stagger: 0.3 })
          .from(
            `.timeline-block:nth-child(${index + 1}) .associated-text`,
            {
              opacity: 0,
              y: 100,
            },
            "<1"
          );
        //
        const tlLine = gsap.timeline({
          scrollTrigger: {
            trigger: `.timeline-block:nth-child(${index + 1}) .timeline-line`,
            start: "top 40%",
            end: "+=550",
            scrub: true,
          },
        });
        tlLine.from(`.timeline-block:nth-child(${index + 1}) .timeline-line`, {
          scaleY: 0,
          transformOrigin: "top",
        });
        competitionListArray.forEach((_, listIndex) => {
          const split2 = SplitText.create(
            `.timeline-block:nth-child(${
              index + 1
            }) .competition-list:nth-child(${listIndex + 1}) p`,
            { type: "chars,words", mask: "words" }
          );
          const tl3 = gsap.timeline({
            scrollTrigger: {
              trigger: `.timeline-block:nth-child(${
                index + 1
              }) .competition-list:nth-child(${listIndex + 1})`,
              start: "top center",
              end: "+=250",
              scrub: true,
            },
          });
          tl3
            .from(split2.words, {
              yPercent: -120,
              stagger: { each: 0.3 },
            })
            .to(
              `.timeline-block:nth-child(${
                index + 1
              }) .competition-list:nth-child(${listIndex + 1}) li`,
              { opacity: 1, x: 0, stagger: 0.6 }
            );
        });
        //
        const split3 = SplitText.create(
          `.timeline-block:nth-child(${index + 1}) .concluding`,
          { type: "words" }
        );
        const tl4 = gsap.timeline({
          scrollTrigger: {
            trigger: `.timeline-block:nth-child(${index + 1}) .concluding`,
            start: "top center",
            end: "+=100",
            scrub: true,
          },
        });
        tl4.from(split3.words, {
          opacity: 0,
          stagger: { each: 0.3 },
        });

        //
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="flex flex-col gap-8">
      <div className="journey-image-box w-full h-screen flex justify-center items-center mb-[400px]">
        <Image
          src={central_image}
          alt="A surreal pathway walk"
          className="w-[20%] aspect-[5/4] object-cover rounded-2xl shadow-2xl  journey-central-image"
          style={{ filter: "saturate(50%) brightness(25%)" }}
        />
      </div>

      <h2 className="font-figtree font-bold text-hero uppercase text-[#404090] tracking-[1px] journey-major idea-main-text">
        The Journey Timeline
      </h2>
      <section className="flex flex-col gap-4">
        {competition_timeline.map(
          (
            {
              level,
              headingText,
              associatedText,
              bulletPoints,
              additionalContent,
              concludingStatement,
            },
            index
          ) => (
            <CompetitionTimelineBlock
              key={index}
              level={level}
              headingText={headingText}
              associatedText={associatedText}
              bulletPoints={bulletPoints}
              additionalContent={additionalContent}
              concludingStatement={concludingStatement}
              index={index}
              timelineLength={competition_timeline.length}
            />
          )
        )}
      </section>
    </section>
  );
}

interface CompetitionTimelineProps extends CompetitionTimelineType {
  index: number;
  timelineLength: number;
}

const CompetitionTimelineBlock = ({
  level,
  headingText,
  associatedText,
  bulletPoints: { bulletPointHeading, bulletPointsContent },
  additionalContent,
  concludingStatement,
  index,
  timelineLength,
}: CompetitionTimelineProps) => (
  <section className="flex gap-8 items-stretch justify-start timeline-block">
    <div
      className="flex flex-col justify-start items-center gap-4"
      aria-hidden="true"
    >
      <Image
        src={sphere_orb}
        alt="glassy spherical orb"
        placeholder="blur"
        style={{ width: "100px", objectFit: "cover", flexGrow: "0" }}
      />
      <div className="w-0.5 bg-aloe flex-1 rounded-full timeline-line"></div>
      {index === timelineLength - 1 && (
        <Image
          src={sphere_orb}
          alt="glassy spherical orb"
          className="w-25 object-contain grow-0"
        />
      )}
    </div>
    <article className="flex flex-col gap-2">
      <h3 className="font-body font-semibold tracking-[2px] idea-main-text text-sub-heading uppercase">
        {level}
      </h3>
      <div>
        <h2 className="font-figtree font-bold tracking-[1px] text-[#404090] text-3xl leading-[1.1] mb-1">
          {headingText}
        </h2>
        <p className="font-body text-[#808080] text-body leading-[1.5] tracking-[0.9] associated-text">
          {associatedText}
        </p>
      </div>
      <CompetitionList
        heading={bulletPointHeading}
        content={bulletPointsContent}
      />
      {additionalContent && (
        <CompetitionList
          heading={additionalContent.contentHeading}
          content={additionalContent.contentBulletPoints}
        />
      )}
      {concludingStatement && (
        <p className="font-body text-body text-[#808080] leading-[1.5] tracking-[0.8px] concluding">
          {concludingStatement}
        </p>
      )}
    </article>
  </section>
);

const CompetitionList = ({
  heading,
  content,
}: {
  heading: string;
  content: string[];
}) => (
  <div className="flex flex-col mt-6 mb-4 gap-4 competition-list">
    <p className="font-body font-semibold text-body text-[#6060cd] capitalize mb-2 tracking-[1px]">
      {heading}
    </p>
    <div className="flex gap-8 flex-wrap justify-stretch">
      {content.map((eachContent, index) => (
        <ParticipantsList key={index} text={eachContent} imageSrc={triangle} />
      ))}
    </div>
  </div>
);
