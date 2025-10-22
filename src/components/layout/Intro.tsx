import Button from "../ui/Button";
import cn from "@/src/lib/utils";
import { type Intro_Stat, INTRO_STATS } from "@/src/lib/constants";
import { ClassValue } from "clsx";
import Image, { StaticImageData } from "next/image";

export default function Intro() {
  return (
    <section className="px-8 py-20 min-h-dvh flex flex-col gap-8 items-center bg-pink">
      <div className="flex flex-col gap-6 items-center">
        <h2 className="font-figtree font-bold text-sub-heading capitalize text-white text-center text-balance leading-[1.4]">
          the world's largest student startup competition arrives at your
          doorstep
        </h2>
        <p className="font-figtree font-normal text-text-white text-[1rem] tracking-[1.2px] leading-[1.4] max-w-prose text-center text-balance">
          Through the Hult Prize annual competition, students build, scale, and
          pitch innovative startups, with the winning team receiving $1M USD in
          funding to take their business to the next leve
        </p>
        <Button text="explore the journey" classnames="bg-aloe pl-8 py-3" />
      </div>

      <div className="flex flex-wrap w-full justify-center items-center gap-6 mt-10">
        {INTRO_STATS.map((introStat, index) => (
          <StatCard
            key={index}
            figure={introStat.figure}
            caption={introStat.caption}
            imageSrc={introStat.imageSrc}
          />
        ))}
      </div>
    </section>
  );
}

interface StatCardProps extends Intro_Stat {
  classnames?: ClassValue;
}

const rotateValues: number[] = [4, 5, 6, -4, -5, -6];

function StatCard({ figure, caption, imageSrc, classnames }: StatCardProps) {
  return (
    <div
      className={cn(
        `flex justify-center items-center flex-col gap-4 bg-[#f0f0f0] w-[90vw] md:w-[min(50%,280px)] h-[350px] text-center font-figtree text-black rounded-3xl border-2 border-black even:border-white even:bg-aloe even:text-white`,
        classnames
      )}
      style={{
        rotate: `${
          rotateValues[Math.floor(Math.random() * rotateValues.length)]
        }deg`,
      }}
    >
      <Image
        src={imageSrc}
        alt={`${caption} icon`}
        aria-hidden="true"
        className="w-25 object-contain"
        placeholder="blur"
      />
      <div className="flex justify-center items-center flex-col">
        <h3 className="text-main-heading font-bold leading-[1]">{figure}</h3>
        <p className="text-body-lg font-semibold capitalize">{caption}</p>
      </div>
    </div>
  );
}
