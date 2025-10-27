import spiral from "../../../public/images/pink-twist-original.png";
import Image from "next/image";
import pink_spiral from "../../../public/images/pink-spiral.png";
import twisted_pink from "../../../public/images/twisted-pink.png";

export default function Ecosystem() {
  return (
    <section className="py-20 min-h-dvh px-8 bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.4)),url('/images/art-bg.png')] bg-cover bg-bottom mt-40 flex flex-col gap-8 justify-center items-center text-center text-gallery">
      <div className="relative">
        <h2 className="font-figtree text-sub-heading font-bold">
          Our Ecosystem of Impact
        </h2>
        <Image
          src={spiral}
          alt="pink spiral"
          aria-hidden="true"
          className="absolute -top-10 left-[-300px] h-35 object-contain"
        />
      </div>

      <div className="flex flex-col gap-2 relative">
        <h5 className="text-[24px] font-body font-bold capitalize text-text-white [word-spacing:4px]">
          Founders, mentors, and investors;
        </h5>
        <p className="text-body-lg font-body max-w-prose text-balance tracking-[1px] text-text-white leading-[1.4]">
          Join Nigeria's premier platform for social innovation. Compete for
          seed funding, share your expertise, or discover the next billion-naira
          startup built to solve African challenges.
        </p>
        <Image
          src={pink_spiral}
          alt="pink spiral"
          aria-hidden="true"
          className="absolute -bottom-18 -right-45 h-40 rotate-30 object-contain"
        />
      </div>
    </section>
  );
}
