import Image from "next/image";
import display_image from "../../../public/images/image13.jpg";
import logo_nigeria from "../../../public/HP_NigeriaHP.png";
import Link from "next/link";
import { NAVLINKS } from "@/src/lib/constants";
import spiral from "../../../public/images/green-twist-intricate.png";
import spiral_one from "../../../public/images/pink-spiral.png";
import spiral_two from '../../../public/images/green-twist-original.png'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-10 min-h-dvh mt-10 bg-black">
      <Image
        src={display_image}
        alt="hult prize group photograph"
        className="w-full h-[600px] object-cover"
        style={{
          maskImage: "linear-gradient(to bottom,black,transparent)",
        }}
      />
      <div className="w-full flex justify-center relative">
        <Image src={spiral} alt="spiral" aria-hidden="true" className="absolute -left-10 top-0 h-[150px] object-contain" />
        <Image src={spiral_one} alt="spiral" aria-hidden="true" className="absolute right-0 -bottom-10 h-[150px] object-contain" />
        <Image src={spiral_two} alt="spiral" aria-hidden="true" className="absolute right-[50%] -bottom-20 translate-x-[50%] h-[150px] object-contain -rotate-60" />
        <h2 className="text-stroke footer-stroke font-body font-black text-[10vw] text-center uppercase mx-auto">
          Hult prize
        </h2>
      </div>

      <div className="py-25 flex flex-col items-start gap-15 px-24">
        <div className="flex justify-between items-end w-full">
          <div className="flex flex-col gap-2.5">
            <Image
              src={logo_nigeria}
              alt="hult prize nigerian logo"
              className="w-20 object-contain"
            />
            <h5 className="font-figtree font-bold text-text-white text-body">
              Hult Prize Nigeria
            </h5>
          </div>

          <div className="flex flex-col gap-4">
            {NAVLINKS.map((navlink, index) => (
              <Link
                href={navlink.href}
                key={index}
                className="font-body font-medium text-body text-gallery capitalize hover:text-aloe duration-200"
              >
                {navlink.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 items-center">
            <Link href="https://www.instagram.com/hultprize.ng/">
              <Image
                src={"/images/instagram.svg"}
                alt="instagram"
                width={50}
                height={50}
                className="w-[25px]"
              />
            </Link>
            <Link href="https://x.com/hultprizenig">
              <Image
                src={"/images/twitter.svg"}
                alt="x.com"
                className="w-[25px]"
                width={50}
                height={50}
              />
            </Link>
            <Link href="https://www.linkedin.com/company/hult-prize-nigeria/">
              <Image
                src={"/images/linkedin.svg"}
                alt="linked in"
                className="w-[25px]"
                width={50}
                height={50}
              />
            </Link>
            <Link href="https://www.facebook.com/hultprize/">
              <Image
                src={"/images/facebook.svg"}
                alt="facebook"
                className="w-[25px]"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
        <div className="w-full h-[1px] bg-text-white rounded  justify-center"></div>
        <p className="font-semibold font-body text-gallery text-center text-body w-full">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
