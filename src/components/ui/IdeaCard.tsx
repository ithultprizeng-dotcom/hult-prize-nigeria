import { ReactElement, ReactSVGElement } from "react";
import { CategoryTag } from "./CategoryTag";

export default function IdeaCard({
  category,
  focusArea,
  description,
  icon,
}: {
  category: string;
  focusArea: string;
  description: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex flex-col gap-2 p-6 border-2 w-[350px] rounded-[30px] border-aloe hover:-translate-y-1 duration-200 ease-out hover:shadow-2xl shadow-md bg-white">
      {icon}
      <div className="flex flex-col">
        <h3 className="font-figtree text-[24px] font-bold text-aloe capitalize leading-[1]">
          {focusArea}
        </h3>
        <p className="font-body text-body text-[#909090]">{description}</p>
      </div>
      <CategoryTag category={category} />
    </div>
  );
}
