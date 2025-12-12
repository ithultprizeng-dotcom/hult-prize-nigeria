import { HultPrizeBenefitsType } from "../constants";
import Image from "next/image";
import { TagLabel } from "./tagLabel";
import { GridCardContent } from "./gridCardTextContent";

export function PortraitBlock({
  title,
  subHeading,
  textContent,
  svg,
  tag,
  imgSrc,
}: HultPrizeBenefitsType) {
  return (
    <section className="flex flex-col p-4 py-6 gap-6 h-full w-full">
      <div className="flex justify-between items-start gap-1">
        <TagLabel text={tag} />
        {svg}
      </div>
      <div className="flex flex-col gap-6 flex-1 ">
        {imgSrc && (
          <Image
            src={imgSrc}
            alt="grid image"
            aria-hidden="true"
            className="w-full shadow-[0_4px_12px_rgba(0,0,0,0.2)] h-50 object-cover rounded-2xl flex-1 border-2"
          />
        )}
        <div className="mt-auto">
          <GridCardContent
            title={title}
            subHeading={subHeading}
            textContent={textContent}
          />
        </div>
      </div>
    </section>
  );
}
