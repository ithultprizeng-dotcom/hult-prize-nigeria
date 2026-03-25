import hero_image from "@/public/images/Modern Art Exhibition.jpg";
import Image from "next/image";

export function TheCompetitionHero() {
  return (
    <section className="">
      <div className="px-4 sm:px-8 flex items-end w-full justify-between ">
        <h1 className="font-figtree text-main-heading font-bold leading-[0.8] tracking-[-3px]">
          Road <br /> to Nationals
        </h1>
        <h3 className="max-w-[30ch] font-figtree text-[28px] leading-[1.2]">
          Nigeria&rsquo;s most ambitious student-led startups converge to bridge
          the gap between local grassroots innovation and global social impact.
        </h3>
      </div>
      <div className="relative mt-28">
        <Image
          src={hero_image}
          alt="Modern Art Exhibition"
          className="w-full h-140 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </section>
  );
}
