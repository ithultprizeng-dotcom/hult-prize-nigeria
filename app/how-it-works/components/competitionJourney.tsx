import central_image from "@/public/images/Surreal Pathway Walk.jpg";
import sphere_orb from "@/public/images/sphere-orb.png";
import triangle from "@/public/images/triangular-orb.png";
import Image from "next/image";
import type { CompetitionTimelineType } from "../constants";
import { ParticipantsList } from "./participantsList";
import { competition_timeline } from "../constants";

export default function CompetitionJourney() {
  return (
    <section className="flex flex-col gap-8">
      <Image
        src={central_image}
        alt="A surreal pathway walk"
        className="w-full object-contain rounded-2xl shadow-2xl"
      />
      <h2 className="font-figtree font-bold text-hero uppercase text-[#404090] tracking-[1.2px] idea-main-text">
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
  <section className="flex gap-8 items-stretch justify-start">
    <div
      className="flex flex-col justify-start items-center gap-4"
      aria-hidden="true"
    >
      <Image
        src={sphere_orb}
        alt="glassy spherical orb"
        placeholder="blur"
        style={{ width: "100px", objectFit: "cover", flexGrow: '0' }}
      />
      <div className="w-0.5 bg-aloe flex-1 rounded-full"></div>
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
        <p className="font-body text-[#808080] text-body leading-[1.5] tracking-[0.9]">
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
        <p className="font-body text-body text-[#808080] leading-[1.5] tracking-[0.8px]">
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
  <div className="flex flex-col mt-6 mb-4 gap-4">
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
