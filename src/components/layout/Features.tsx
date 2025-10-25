"use client";
import { FEATURES_CONTENT, maskImages } from "@/src/lib/constants";
import FeatureCard from "../ui/FeatureCard";

export default function Features() {
  return (
    <section className="px-8 py-20 min-h-dvh flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <h2 className="font-figtree font-bold text-sub-heading text-aloe cap">
          Why Hult Prize?
        </h2>
        <p className="font-body text-body text-black leading-[1.5] max-w-prose text-balance tracking-[1px]">
          The Hult Prize is more than a competition; it is a dedicated pipeline
          designed to transform student ideas into investment-ready global
          ventures. Here is how we empower the next generation of Nigerian
          change-makers:
        </p>
      </div>
      <section className="flex flex-col gap-12 items-stretch">
        {FEATURES_CONTENT.map((featureContent, index) => (
          <FeatureCard
            feature_content={featureContent.feature_content}
            feature_image={featureContent.feature_image}
            feature_tagline={featureContent.feature_tagline}
            feature_title={featureContent.feature_title}
            maskImagePath={maskImages[index]}
            key={index}
          />
        ))}
      </section>
    </section>
  );
}
