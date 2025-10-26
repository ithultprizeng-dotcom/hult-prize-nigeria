import IdeaCard from "../ui/IdeaCard";
import { svgCollection } from "../ui/SvgIcons";
import { INNOVATIVE_IDEAS_CONTENT } from "@/src/lib/constants";
import Image from "next/image";
import icon from "../../../public/images/idea.png";
import brush_image from "../../../public/images/brushstroke.png.png";

export default function () {
  return (
    <section className="py-20 px-8 flex flex-col gap-15 relative">
      <div
        className="absolute inset-0 blur-[100px] -z-1"
        style={{
          background:
            "radial-gradient(circle at 0% 10%, var(--color-text-white) 0%, transparent 30%), radial-gradient(circle at 30% 50%, var(--color-pink) 0%, transparent 30%), radial-gradient(circle at 60% 10%, var(--color-aloe) 0%, transparent 30%), radial-gradient(circle at 100% 60%, var(--color-text-white) 0%, transparent 30%), radial-gradient(circle at 50% 70%, var(--color-text-white) 0%, transparent 30%), radial-gradient(circle at 0% 100%, var(--color-aloe) 0%, transparent 30%),radial-gradient(circle at 90% 30%, var(--color-sky) 0%, transparent 15%), radial-gradient(circle at 60% 70%, var(--color-aloe) 0%, transparent 30%), radial-gradient(circle at 60% 85%, var(--color-pink) 0%, transparent 30%), radial-gradient(circle at 70% 40%, var(--color-sky) 0%, transparent 20%)",
        }}
      ></div>
      <div className="flex gap-14 items-center">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="font-bold font-figtree text-aloe text-main-heading leading-[1.2] idea-main-text">
              Level Up Your Idea
            </h2>
            <h4 className="font-bold font-body text-black text-[30px] leading-[1.2] max-w-prose text-balance">
              The Nigerian Innovation Blueprint
            </h4>
          </div>
          <p className="font-body text-[#909090] text-body leading-[1.5] tracking-[1px] max-w-prose text-balance">
            The Hult Prize is your launchpad to tackle real-world problems right
            here in Nigeria. We've mapped out key sectors demanding urgent,
            creative solutions. These are not just challenges—they are
            billion-naira opportunities and potential markets ripe for social
            enterprise and technological disruption by innovators like you.
          </p>
        </div>
        <div className="relative">
          <Image
            src={brush_image}
            alt="brush pain"
            aria-hidden="true"
            className="absolute  -top-[20%] left-0 size-120 blur-[35px] contrast-125 brightness-150 saturate-80"
          />

          <Image src={icon} alt="idea icon" className="size-100 isolate" />
        </div>
      </div>

      <div className="flex flex-wrap gap-12 items-stretch">
        {INNOVATIVE_IDEAS_CONTENT.map((idea, index) => (
          <IdeaCard
            key={index}
            category={idea.category}
            focusArea={idea.focusArea}
            description={idea.description}
            icon={svgCollection[index]}
          />
        ))}
      </div>
    </section>
  );
}
