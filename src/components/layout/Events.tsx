"use client";
import { EventCardsBlock } from "../ui/EventCardsBlock";

const paragraphStyleClasses =
  "font-body font-normal text-[#808080] leading-[1.5] max-w-prose text-pretty text-[18px]";
export default function Events() {
  return (
    <section
      className="py-20 flex flex-col gap-10 px-4 sm:px-8"
      id="upcoming-events"
    >
      <article className="flex flex-col gap-2">
        <h3 className="text-aloe text-sub-heading font-figtree font-bold uppercase">
          Our Upcoming Events
        </h3>
        <div className="flex flex-col gap-1">
          <p className={paragraphStyleClasses}>
            We have amazing events lined up for our community members and
            everyone else who may be interested.{" "}
          </p>
          <p className={paragraphStyleClasses}>
            Hult Prize welcomes you at any time to these events and presents the
            opportunity for you to connect with great minds, get inspired, build
            a network and polish your ideas
          </p>
        </div>
      </article>
      <EventCardsBlock />
    </section>
  );
}
