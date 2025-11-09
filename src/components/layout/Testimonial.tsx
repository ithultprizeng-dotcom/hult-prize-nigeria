"use client";
import Image from "next/image";
import olamide_oso from "../../../public/images/Olamide_Oso.95dd456ab30bb2b5c035.jpg";
import image_one from "../../../public/images/Dreamy Abstract Landscape.jpg";
import image_two from "../../../public/images/Ethereal White Flower.jpg";
import image_three from "../../../public/images/Glowing Flower Art.jpg";

export default function Testimonial() {
  return (
    <section className="py-25 px-8 flex flex-col gap-12 min-h-dvh items-center relative">
      <div className="absolute inset-0 bg-[url('/images/multi-colored-bg.png')] bg-contain bg-no-repeat bg-center saturate-150 contrast-125 brightness-75 blur-[120px]"></div>
      <div className="flex flex-col">
        <h2 className="text-center items-center text-main-heading font-figtree font-bold text-aloe">
          The Hult Prize Gospel
        </h2>
        <p className="text-body-lg text-[#404040] capitalize font-body font-semibold text-center">
          Victorious Shout-out from a Hult Prize Testator!
        </p>
      </div>

      <div className="flex flex-col gap-2.5">
        {/* top section */}
        <div className="h-100 w-[min(850px,85vw)] flex gap-2.5">
          <div className="h-full grow relative overflow-clip rounded-[8px] hidden md:flex">
            <Image
              src={image_three}
              alt="Dreamy Abstract Landscape"
              fill
              placeholder="blur"
              className="object-cover blur-[2px]"
            />
          </div>
          <div className="h-full grow relative rounded-[8px] overflow-clip">
            <Image
              src={olamide_oso}
              alt="Olamide Oso polaroid"
              fill
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </div>
        {/* bottom section */}
        <div className="h-100 w-[min(850px,85vw)] flex gap-2.5">
          <div className="h-full w-full md:w-1/2 bg-aloe rounded-[8px] relative flex flex-col gap-4 p-2 justify-center items-center">
            <p className="text-body-lg text-gallery font-body font-medium text-center">
              Hult Prize was by far one of the most amazing and fulfilling thing
              I ever had to do in my four years in University. It brought me the
              most amazing family and opportunities and I will be forever
              grateful for it
            </p>

            <div className="h-0.5 w-1/2 bg-gallery"></div>

            <div className="flex flex-col gap-1 leading-[1.2]">
              <h5 className="font-figtree font-bold text-body-lg text-gallery  text-center">
                Olamide Oso
              </h5>
              <p className="font-body font-normal text-body-lg text-gallery text-center max-w-[45ch]">
                Campus Director, Covenant University
              </p>
              <p className="font-body font-medium text-body text-gallery text-center">
                2023 - 2025
              </p>
            </div>
          </div>
          <div className="h-full w-1/2 relative hidden md:flex">
            <Image
              src={image_two}
              alt="Glowing flower"
              className="object-cover w-full h-full blur-[1px] rounded-[8px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
