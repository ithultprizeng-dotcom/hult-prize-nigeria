import Image from "next/image";
import { ParticipantsList } from "./participantsList";
import blob from "../../../public/images/distorted_orb.png";
import { ctaList } from "../constants";
import Button from "@/src/components/ui/Button";

export function CallToAction() {
  return (
    <section className="py-25">
      <h2 className="font-body idea-main-text font-black text-hero tracking-[3.5px] leading-[1.2] uppercase">
        Ready to start?
      </h2>
      <p className="font-body font-semibold text-body-lg tracking-[1px] mb-8 text-pink">
        Your startup journey begins here
      </p>
      <div className="flex gap-4 mb-8 flex-wrap">
        {ctaList.map((item, index) => (
          <ParticipantsList text={item} key={index} imageSrc={blob} />
        ))}
      </div>
      <Button text="Register Now!" classnames='reversed pl-4 pr-8' />
    </section>
  );
}
