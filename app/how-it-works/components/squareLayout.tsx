import { HultPrizeBenefitsType } from "../constants";
import { TagLabel } from "./tagLabel";
import { GridCardContent } from "./gridCardTextContent";

export function SquareLayout({
  title,
  subHeading,
  textContent,
  svg,
  tag,
}: HultPrizeBenefitsType) {
  return (
    <section className="flex flex-col p-4 gap-4 w-full">
      <div className="flex w-full justify-between items-center">
        <TagLabel text={tag} />
        {svg}
      </div>
      <GridCardContent
        title={title}
        subHeading={subHeading}
        textContent={textContent}
      />
    </section>
  );
}
