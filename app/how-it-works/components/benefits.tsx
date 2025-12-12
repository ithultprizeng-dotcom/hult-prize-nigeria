import Image from "next/image";
import { HultPrizeBenefitsType } from "../constants";
import { hultPrizeNigeriaBenefits } from "../constants";
import { BenefitsGrid } from "./benefitsGrid";

export default function Benefits() {
  return (
    <section className="py-25 mt-5">
      <h2 className="font-figtree font-bold tracking-[1.5px] text-[#404090] text-main-heading leading-[1.2] uppercase">
        what you gain
      </h2>
      <p className="font-body font-semibold text-body-lg text-pink mb-12">
        Benefits of Joining Nigeria’s Largest Student Startup Competition
      </p>
      <BenefitsGrid />
    </section>
  );
}






