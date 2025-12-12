import Image from "next/image";
import list_orb from "@/public/images/orb.png";
import { ParticipantsList } from "./participantsList";
import { eligibleParticipants, irrelevant_things } from "../constants";
export default function Participants() {
  return (
    <section className="flex flex-col gap-12 pb-25">
      <div className="flex flex-col gap-1">
        <h2 className="font-figtree font-bold text-[#404090] tracking-[1.1px] leading-[1] text-sub-heading capitalize">
          Who can participate?
        </h2>
        <p className="font-body text-[#808080] leading-[1.5] max-w-[45ch] text-balance">
          The Hult Prize journey begins right on your campus too. Hult Prize is
          open to:
        </p>
      </div>
      <section className="flex gap-8 flex-wrap justify-stretch items-stretch">
        {eligibleParticipants.map((each, index) => (
          <ParticipantsList text={each} key={index} imageSrc={list_orb} />
        ))}
      </section>
      <div className="flex flex-col mt-10 gap-8">
        <h2 className="font-figtree font-bold text-[#404090] tracking-[1.1px] leading-[1] text-3xl capitalize">
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
