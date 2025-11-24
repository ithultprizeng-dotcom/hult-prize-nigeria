import Image from "next/image";
import whimsical_image from "../../../public/images/Whimsical Cosmic Scene.png";
import explorer from "../../../public/images/explorer.png";

export default function NoAvailableEvent() {
  return (
    <section className="flex flex-col lg:flex-row gap-8 justify-start">
      <Image
        src={explorer}
        alt="whimsical image cartoon"
        placeholder="blur"
        aria-hidden="true"
        className="w-full lg:w-[60%] object-contain rounded-2xl shadow-[2px_2px_12px_rgba(0,0,0,0.4)] grow-0"
      />
      <div className="flex flex-col justify-between grow">
        <div className="flex flex-col h-full lg:max-w-[50ch] gap-3 lg:ml-auto">
          <h3 className="font-figtree font-bold text-aloe text-[32px] uppercase leading-[1.2]">
            Watch Out For Future Events
          </h3>
          <p className="font-body font-medium text-body text-[#808080] leading-[1.5] tracking-[0.8px] max-w-[50ch]">
            Sorry, dear Hult Prize Explorer. <br />
            There are no upcoming events at this moment. Please check back soon!
          </p>
        </div>
        <Image
          src={whimsical_image}
          alt="whimsical image with cartoon shapes and faces"
          aria-hidden="true"
          className="hidden lg:block h-100 w-[85%] rounded-2xl object-cover shadow-[2px_2px_12px_rgba(0,0,0,0.4)]"
        />
      </div>
    </section>
  );
}
