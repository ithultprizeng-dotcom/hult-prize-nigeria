import { HultPrizeBenefitsType } from "../constants";
import Image from "next/image";
import { TagLabel } from "./tagLabel";
import { GridCardContent } from "./gridCardTextContent";

export function LandscapeLayout({
  title,
  subHeading,
  textContent,
  svg,
  tag,
  imgSrc,
}: HultPrizeBenefitsType) {
  return (
    <section className="flex flex-col lg:flex-row p-6 gap-8 justify-center w-full h-full ">
      {imgSrc && (
        <Image
          src={imgSrc}
          alt="grid image"
          aria-hidden="true"
          className="w-full lg:w-[45%] h-full shadow-[0_6px_12px_rgba(0,0,0,0.4)] object-contain lg:object-cover rounded-2xl flex-1 border-2"
        />
      )}

      <div className="flex flex-col gap-4 flex-1">
        <div className="flex gap-1 items-center w-full justify-between">
          <TagLabel text={tag} />
          {svg}
        </div>
        <GridCardContent
          title={title}
          subHeading={subHeading}
          textContent={textContent}
        />
      </div>
    </section>
  );
}
