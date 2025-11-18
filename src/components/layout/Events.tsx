"use client";

import { events } from "@/src/lib/constants";
import EventCard from "../ui/EventCard";

const paragraphStyleClasses =
  "font-body font-normal text-[#808080] leading-[1.5] max-w-prose text-pretty text-[18px]";
export default function Events() {
  return (
    <section className="py-20 flex flex-col gap-10 px-4 sm:px-8 ">
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
          <p className={`${paragraphStyleClasses} `}>
            Some of these events are:
          </p>
        </div>
      </article>
      <section className="flex flex-col gap-12 ">
        {events.map((eachEvent, index) => (
          <EventCard
            key={index}
            imageSrc={eachEvent.imageSrc}
            end_time={eachEvent.end_time}
            start_time={eachEvent.start_time}
            eventDate={eachEvent.eventDate}
            eventName={eachEvent.eventName}
            description={eachEvent.description}
            location={eachEvent.location}
            calendarEndTime={eachEvent.calendarEndTime}
            calendarStartDate={eachEvent.calendarStartDate}
            calendarStartTime={eachEvent.calendarStartTime}
          />
        ))}
      </section>
    </section>
  );
}
