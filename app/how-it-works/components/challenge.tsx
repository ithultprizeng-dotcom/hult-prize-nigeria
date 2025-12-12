import Image from "next/image";
import central_image from "../../../public/images/icon3.png";

export default function Challenge() {
  return (
    <section className="py-25 mt-15 flex flex-col gap-15">
      <div className="flex flex-col gap-0.5">
        <h3 className="font-figtree font-bold text-[#404090] text-main-heading leading-[1]">
          The Hult Prize Challenge
        </h3>
        <h5 className="font-body font-bold text-[32px] text-pink leading-[1.5] mb-4">
          Purpose Defined
        </h5>
        <p className="font-body text-base text-[#808080] leading-[1.5] max-w-prose tracking-[1px]">
          Each year, the Hult Prize challenges student teams to solve a specific
          social problem defined by an annual theme, directly aligned with the
          UN Sustainable Development Goals (SDGs).
        </p>
      </div>
      <div className="flex flex-col-reverse mt-10 gap-8 -translate-y-30">
        <div className="flex flex-col ">
          <h4 className="font-body font-bold text-aloe text-body-lg ">
            Triple Bottom Line
          </h4>
          <p className="font-body text-[#808080] max-w-[45ch] leading-[1.5] tracking-[0.8] text-body">
            All solutions must demonstrate viability across three pillars:
            People (social impact), Planet (environmental responsibility), and
            Profit (financial sustainability).
          </p>
        </div>
        <Image
          src={central_image}
          alt="icon"
          aria-hidden="true"
          className="w-70 object-contain mx-auto"
        />
        <div className="flex flex-col items-end text-right ml-auto translate-y-30">
          <h4 className="font-body font-bold text-aloe text-body-lg">
            Nigerian Relevance 
          </h4>
          <p className="font-body text-[#808080] max-w-[45ch] leading-[1.5] tracking-[0.8] text-body">
            Your solution must be contextualized and designed to scale within
            the unique economic and social landscape of Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
}
