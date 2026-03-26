import { featuringData } from "../constants";
import { FeaturingType } from "../constants";

export function Featuring() {
  return (
    <section className="px-4 sm:px-8 pb-25 pt-10">
      <h3 className="font-bold font-figtree text-sub-heading mb-6 uppercase text-midnight">
        What to Expect
      </h3>
      <div className="flex flex-wrap gap-8 justify-start">
        {featuringData.map((feature: FeaturingType) => (
          <FeatureItem key={feature.id} id={feature.id} text={feature.text} />
        ))}
      </div>
    </section>
  );
}

function FeatureItem({ id, text }: { id: string; text: string }) {
  return (
    <div className="relative w-[min(85%,250px)] p-6 rounded-lg border-2 border-pink overflow-hidden shrink-0 flex items-center justify-center shadow-lg">
      <span className="absolute -top-4 -left-3 font-figtree font-black text-main-heading leading-[1] -z-15 opacity-15 text-navy">
        {id}
      </span>
      <p className="font-figtree [font-variant:small-caps] leading-[1] text-body-lg font-[500]">
        {text}
      </p>
    </div>
  );
}
