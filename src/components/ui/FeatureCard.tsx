import { FeaturesContentType } from "@/src/lib/constants";
import Image from "next/image";

interface FeatureCardProps extends FeaturesContentType {
  maskImagePath: string;
}

export default function FeatureCard({
  feature_title,
  feature_tagline,
  feature_image,
  feature_content,
  maskImagePath,
}: FeatureCardProps) {
  return (
    <div className="flex md:gap-24 gap-4 md:items-center flex-col-reverse md:flex-row md:even:flex-row-reverse justify-center feature-card">
      <div className="md:w-[50%] lg:w-[40%]">
        <h3 className="font-figtree font-bold text-sub-heading text-aloe capitalize max-w-[30ch] text-balance leading-[1.2]">
          {feature_title}
        </h3>
        <p className="font-body font-bold text-body-lg text-pink capitalize">
          {feature_tagline}
        </p>
        <p className="mt-6 font-body text-body text-[#909090] md:max-w-[45ch] max-w-prose leading-[1.5] tracking-[1px] text-balance">
          {feature_content}
        </p>
      </div>
      <Image
        src={feature_image}
        alt={feature_title}
        className="size-60 sm:size-80 md:size-100 object-cover rounded-full"
        style={{
          maskImage: `url(${maskImagePath})`,
          maskSize: "cover",
          maskPosition: "center",
        }}
      />
    </div>
  );
}
