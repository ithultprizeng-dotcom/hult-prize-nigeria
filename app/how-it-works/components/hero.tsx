import Image from "next/image";
import icon_image from "../../../public/images/works.png";

export default function Hero() {
  return (
    <section className="flex items-center gap-14 justify-start">
      <div className="flex flex-col gap-2">
        <h1 className="font-body font-bold text-[#404090] text-main-heading capitalize leading-[1]">
          From Idea To Impact:
        </h1>
        <h3 className="font-body font-semibold text-pink text-3xl capitalize">
          How It Works
        </h3>
        <p className="mt-4 font-body font-normal text-body text-[#707070] max-w-[45ch]">
          The Hult Prize is the world&rsquo;s largest student-led social
          entrepreneurship competition. At Hult Prize Nigeria, students are
          empowered to build sustainable, for-profit startups that solve
          Nigeria&rsquo;s most pressing social and environmental challenges.
        </p>
        <p className="font-body font-normal text-body text-[#707070] max-w-[45ch]">
          Here is a detailed explanation of how the journey works &#40;from
          registration to global finals&#41; and how you can transform your idea
          into a real company with global backing.
        </p>
      </div>
      <div className="relative">
        <div
          className="w-[700px] h-140 bg-pink rounded-lg shrink-0 overflow-clip relative image-clip"
          style={{
            backgroundImage: "url(images/mentor.jpg)",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div className="absolute size-28 rounded-full top-118 -left-6 flex justify-center items-center shadow-xl bg-green-200 border-2 border-green-300">
          <Image
            src={icon_image}
            alt="icon image"
            aria-hidden="true"
            className="w-20 object-contain"
          />
        </div>
        <div
          className="absolute w-[80px] h-[160px] top-[315px] right-0 bg-pink-200 rounded-xl"
          style={{
            backgroundImage: "url(images/mentor.jpg)",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        ></div>
      </div>
    </section>
  );
}
