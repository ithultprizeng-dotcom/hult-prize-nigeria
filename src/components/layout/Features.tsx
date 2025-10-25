"use client";
import {
  FEATURES_CONTENT,
  FeaturesContentType,
  maskImages,
} from "@/src/lib/constants";
import Image from "next/image";
import cn from "@/src/lib/utils";

export default function Features() {
  return (
    <section className="px-8 py-20 min-h-dvh flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <h2 className="font-figtree font-bold text-sub-heading text-aloe cap">
          Why Hult Prize?
        </h2>
        <p className="font-body text-body text-black leading-[1.5] max-w-prose text-pretty">
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

interface FeatureCardProps extends FeaturesContentType {
  maskImagePath: string;
}

function FeatureCard({
  feature_title,
  feature_tagline,
  feature_image,
  feature_content,
  maskImagePath,
}: FeatureCardProps) {
  return (
    <div className="flex gap-24 items-center even:flex-row-reverse justify-center feature-card">
      <div className="w-[40%]">
        <h3 className="font-figtree font-bold text-sub-heading text-aloe capitalize max-w-[30ch] text-balance leading-[1.3]">
          {feature_title}
        </h3>
        <p className="font-body font-bold text-body-lg text-black capitalize">
          {feature_tagline}
        </p>
        <p className="mt-6 font-body text-body text-[#909090] max-w-[45ch] leading-[1.5]">
          {feature_content}
        </p>
      </div>
      <Image
        src={feature_image}
        alt={feature_title}
        className={cn(`size-100 object-cover rounded-full`)}
        style={{
          maskImage: `url(${maskImagePath})`,
          maskSize: "cover",
          maskPosition: "center",
        }}
      />
    </div>
  );
}
