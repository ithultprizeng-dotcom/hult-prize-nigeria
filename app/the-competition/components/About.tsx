import Image from "next/image";
import blue_orb from "@/public/images/liquid-orb.webp";
import pink_orb from "@/public/images/pink-orb.webp";
import image from "@/public/images/image.jpg";
import image_two from "@/public/images/image7.jpg";

export function AboutTheCompetition() {
  return (
    <section className="px-4 sm:px-8 my-25 flex flex-col gap-20 mx-auto">
      <article className="flex gap-8 items-stretch">
        <section className="flex-1 bg-gradient-to-b from-navy to-midnight rounded-3xl px-8 pb-8 py-4 flex flex-col justify-between text-text-white">
          <div className="flex justify-between items-center">
            <p className="[font-variant:small-caps]">
              Our Competittion <br /> by the Numbers
            </p>
            <Image
              src={blue_orb}
              aria-hidden="true"
              alt="blue orb"
              className="w-20 object-contain"
              placeholder="blur"
            />
          </div>
          <p className="flex flex-col gap-0 items-start justify-center">
            <span className="text-5xl font-figtree">15+</span> <span>Universties</span>
          </p>
        </section>
        <section className="flex h-80 rounded-3xl bg-neutral-100  overflow-clip flex-[2.5] gap-4 items-center justify-between">
          <div className="flex flex-col gap-4 justify-center px-8">
            <h4 className="text-3xl text-midnight font-figtree font-semibold">
              About The Event
            </h4>
            <p className="max-w-[40ch] text-[#555]">
              The National Event is a high-impact, immersive arena where the top
              innovators from Nigeria&rsquo;s campus programs advance to defend
              their solutions on a grand stage. This merit-based competition is
              designed to identify the singular, most scalable startup capable
              of representing the nation globally, providing teams with the
              platform to pitch to interdisciplinary experts and secure national
              recognition for their ingenuity.
            </p>
          </div>
          <Image
            src={image}
            alt="Two men presenting their project"
            className="h-full w-[40%] object-cover rounded-l-[50%]"
            placeholder="blur"
          />
        </section>
      </article>

      <article className="flex gap-8 items-stretch">
        <section className="flex h-80 rounded-3xl bg-neutral-100  overflow-clip flex-[2.5] gap-4 items-center justify-between">
          <div className="flex flex-col gap-4 justify-center px-8">
            <h4 className="text-3xl text-midnight font-figtree font-semibold">
              Beyond the Competition
            </h4>
            <p className="max-w-[40ch] text-[#555]">
              This year’s event doubles as an innovation conference focused on
              sharpening minds and building long-term professional capacity. We
              are moving past the traditional contest format to equip
              participants with future-ready tools and real-world insights,
              ensuring that every founder leaves the stage with the practical
              skills necessary to transform their vision into a sustainable
              enterprise.
            </p>
          </div>
          <Image
            src={image_two}
            alt="Two men presenting their project"
            className="h-full w-[40%] object-cover rounded-l-[50%]"
          />
        </section>
        <section className="flex-1 bg-pink bg-gradient-to-b from-[#ea90be] to-pink rounded-3xl px-8 pb-8 py-4 flex flex-col justify-between text-white">
          <div className="flex justify-between items-center">
            <p className="[font-variant:small-caps]">
              Global Winner <br /> Stands to Win
            </p>
            <Image
              src={pink_orb}
              aria-hidden="true"
              alt="pink orb"
              className="w-20 object-contain"
            />
          </div>
          <p className="flex flex-col gap-0 items-start justify-center">
            <span className="text-5xl font-figtree">$1,000,000</span>
          </p>
        </section>
      </article>
    </section>
  );
}
