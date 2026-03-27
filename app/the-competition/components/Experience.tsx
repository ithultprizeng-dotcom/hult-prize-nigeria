import { FeaturingType } from "../constants";
import { participantData } from "../constants";
import Image from "next/image";
import orb from "@/public/images/list-orb.webp";

export function Experience() {
  return <section className="py-12 px-4 sm:px-8">
    <h3 className="font-bold font-figtree text-sub-heading mb-6 uppercase text-midnight">
      Who Should Attend
    </h3>
    <div className="flex flex-wrap gap-8 justify-start">
      {participantData.map((participant: FeaturingType) => (
        <ExperienceItem key={participant.id} text={participant.text} />
      ))}
    </div>
  </section>;
}

function ExperienceItem({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <Image src={orb} alt="orb" className="w-10 object-contain" />
      <p className="text-body-lg text-[#555]">{text}</p>
    </div>
  );
}
