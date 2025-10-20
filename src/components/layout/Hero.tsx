"use client";
import { redirect } from "next/navigation";
import Button from "../ui/Button";
import Image from "next/image";
import { IMAGES } from "@/src/lib/constants";
import blob_image from "../../../public/images/blob (1).png";
import iregular_squares from "../../../public/images/irregular (1).png";

export default function Hero() {
  return (
    <section className="flex px-8 py-4 mt-6 min-h-dvh items-center relative">
      <div className="flex flex-col gap-6 w-1/2">
        <h1 className="font-figtree font-bold text-main-heading text-midnight  max-w-prose leading-[1.3] text-balance capitalize">
          Igniting Nigerian Ingenuity for Global{" "}
          <span className="bg-pink text-white px-4 py-1 rounded-lg">
            Impact!
          </span>{" "}
        </h1>
        <p className="text-navy text-body-lg font-medium font-figtree max-w-[45ch] text-balance">
          Join the world's largest student competition and build a for-profit
          social enterprise that solves the planet's most pressing challenges.
        </p>
        <Button
          text="find out more"
          onclick={() => redirect("/how-it-works")}
          classnames="w-fit reversed pl-4 pr-6"
        />
      </div>
      <HeroGrid />
      <div className="absolute top-20 left-30 w-50 h-50 bg-sun rounded-full contrast-125 saturate-150 blur-[100px] -z-10 mix-blend-color-burn"></div>
      <div className="absolute top-50 left-0 w-60 h-50 bg-pink rounded-full contrast-125 saturate-150 blur-[100px] -z-10 mix-blend-difference"></div>
      <div className="absolute top-35 left-65 w-60 h-50 bg-aloe rounded-full contrast-125 saturate-150 blur-[120px] -z-10 mix-blend-overlay"></div>
    </section>
  );
}

function HeroGrid() {
  return (
    <div className="flex gap-1.5 items-center h-fit relative">
      <Image
        src={blob_image}
        alt="blob image"
        aria-hidden="true"
        placeholder="blur"
        className="absolute top-[-100px] left-[-30px] w-60 object-contain saturate-150 contrast-120"
      />
      <div className="flex flex-col items-end gap-1.5 mt-auto pb-3">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={IMAGES.image_one}
            alt="Hult prize 2025 participants"
            className="w-[200px] h-[180px] object-cover hover:scale-110 duration-300 ease-in"
            placeholder="blur"
          />
        </div>
        <div className="overflow-hidden  rounded-lg">
          <Image
            src={IMAGES.image_two}
            alt="Hult prize 2025 participants"
            className="w-[100px] h-[100px] object-cover hover:scale-110 duration-300 ease-in"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="rounded-lg overflow-hidden">
        <Image
          src={IMAGES.center_image}
          alt="Hult prize 2025 participants"
          className="w-[250px] h-[400px] hover:scale-110 ease-in-out duration-300 object-cover"
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col gap-1.5 pt-6 mb-auto items-start">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={IMAGES.image_three}
            alt="Hult prize 2025 participants"
            className="w-[200px] h-[200px] hover:scale-110 duration-300 ease-in object-cover"
            placeholder="blur"
          />
        </div>
        <div className="overflow-hidden rounded-lg grow-0">
          <Image
            src={IMAGES.image_four}
            alt="Hult prize 2025 participants"
            className="w-[100px] h-[100px] hover:scale-110 duration-300 ease-in object-cover"
            placeholder="blur"
          />
        </div>
      </div>{" "}
    </div>
  );
}
