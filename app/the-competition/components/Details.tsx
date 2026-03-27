import Image from "next/image";
import blue_brush from "@/public/images/blue-brush.png";
import pink_brush from "@/public/images/pink-brush.png";
import light_blue_brush from "@/public/images/light-blue-brush.png";

export function TheCompetitionDetails() {
  return (
    <section className="px-4 sm:px-8 flex flex-col gap-4 my-20 max-w-prose mx-auto text-black text-body-lg font-medium font-body">
      <p>
        The 2026 Hult Prize National Competition for the Federal Republic of
        Nigeria is not just another event. It is a convergence of ambitious,
        brilliant, and possibility-driven student founders alongside industry
        stakeholders, strategic partners, and forward-thinking investors all
        united by a shared vision to build viable solutions that scale from
        local impact to global relevance.
      </p>
      <p>
        The National Physical Event 2026 is the culminating stage of a
        nationwide journey bringing together the most exceptional young minds,
        innovators, and emerging leaders from across Nigeria into one defining
        arena.
      </p>
      <p>
        Here,{" "}
        <span className="relative capitalize font-semibold">
          Ideas{" "}
          <Image
            src={blue_brush}
            alt="Blue Brush"
            aria-hidden="true"
            className="absolute inset-0 top-[20%] -z-10 object-contain opacity-40"
          />
        </span>{" "}
        are tested. <br />{" "}
        <span className="relative capitalize font-semibold">
          Talent{" "}
          <Image
            src={pink_brush}
            alt="Blue Brush"
            aria-hidden="true"
            className="absolute inset-0 -z-10 object-contain opacity-75"
          />
        </span>{" "}
        is revealed. <br /> And{" "}
        <span className="relative capitalize font-semibold">
          Futures{" "}
          <Image
            src={light_blue_brush}
            alt="Blue Brush"
            aria-hidden="true"
            className="absolute inset-0 -z-10 object-contain opacity-60"
          />
        </span>{" "}
        are forged.
      </p>
    </section>
  );
}
