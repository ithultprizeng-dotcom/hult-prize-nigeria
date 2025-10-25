"use client";
import Image from "next/image";
import { IMAGES } from "@/src/lib/constants";
export default function HomePageAbout() {
  return (
    <section className="min-h-screen bg-white relative px-8 py-20">
      <div className="absolute inset-0 bg-[url('/images/green-background.png')] blur-[50px] contrast-125 saturate-150 brightness-120 bg-no-repeat bg-center">
        <div className="absolute size-60 bg-aloe blur-[60px] rounded-full saturate-150 brightness-125 bottom-12 right-12"></div>
      </div>
      <div className="isolate flex flex-col gap-12">
        <h2 className="font-black text-black text-hero flex flex-col leading-[1.2] text-stroke px-0.5">
          <span className="font-body">We Are</span>{" "}
          <span className="font-body">Hult Prize Nigeria</span>
        </h2>
        <div className="flex justify-between w-full h-[600px] gap-8">
          <Image
            src={IMAGES.image_thirteen}
            alt="young man making a presentaion standing in front of a screen"
            className="w-[45%] h-full object-cover rounded-[12px]"
          />
          <div className="grow h-full flex flex-col justify-between">
            <div className="w-full flex justify-end">
              <Image
                src={IMAGES.image_twelve}
                alt="hult prize group photograph"
                className="h-70 w-[40%] object-cover rounded-2xl"
              />
            </div>
            <div className="w-full flex flex-col gap-4 items-start">
              <h3 className="font-body font-bold text-3xl text-[#555] leading-[1.2]">
                Catalyzing Social Innovation in Nigeria
              </h3>
              <p className="font-body font-normal text-[#808089] leading-[1.5] tracking-[1px] max-w-[50ch] text-body text-pretty">
                The Hult Prize challenges university students to solve pressing
                global issues through scalable, sustainable social enterprises.
                In Nigeria, we provide a vital platform for future leaders to
                develop impactful, purpose-driven ventures, fostering a national
                community dedicated to profit with purpose and driving
                significant socio-economic transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
