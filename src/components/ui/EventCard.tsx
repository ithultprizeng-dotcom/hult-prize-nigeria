"use client";

import ribbon from "../../../public/images/badge-ribbon.svg";
import event_image from "../../../public/images/epicenter.webp";
import Image from "next/image";
import { CalendarDays, Clock8, MapPin } from "lucide-react";
import Button from "../ui/Button";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { type EventCardType } from "@/src/lib/types";

const paragraphStyleClasses =
  "font-body font-normal text-[#808080] leading-[1.5] max-w-prose text-pretty text-body";

export default function EventCard({
  imageSrc,
  end_time,
  start_time,
  eventDate,
  eventName,
  description,
  location,
  calendarEndTime,
  calendarStartDate,
  calendarStartTime,
}: EventCardType) {
  return (
    <article className="flex items-stretch  gap-10 w-full pb-12 border-b-2 border-[#f1f1f1] group event-article">
      <div className="relative w-[25%] aspect-square">
        <div className="w-full h-full bg-aloe event-card relative rounded-bl-2xl overflow-hidden">
          <Image
            src={imageSrc}
            alt="Event Image"
            fill
            className="object-cover"
          />
        </div>
        <Image
          src={ribbon}
          alt="ribbon"
          className="w-20 absolute -right-7 -bottom-7"
        />
      </div>
      <article className="grow bg-[#f1f1f1] group-hover:bg-[#e0e0e0] duration-300 rounded-2xl p-4 px-8 flex flex-col justify-between gap-4 items-start">
        <div className="flex gap-10 items-center p-2.5 px-4 bg-white rounded-full border border-aloe">
          <div className="flex gap-1 items-center">
            <CalendarDays className="text-aloe" />
            <p className={paragraphStyleClasses}>{eventDate}</p>
          </div>
          <div className="h-full w-[2px] rounded-full bg-[#c0c0c0]"></div>
          <div className="flex gap-1 items-center">
            <Clock8 className="text-aloe" />
            <p className={paragraphStyleClasses}>
              {`${start_time} - ${end_time}`}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <h3 className="capitalize text-black font-body text-2xl font-semibold max-w-prose text-balance">
            {eventName}
          </h3>
          <p className={paragraphStyleClasses}>{description}</p>
        </div>
        <div className="flex">
          <MapPin className="text-aloe mr-2" />
          <p className={paragraphStyleClasses}>{location}</p>
        </div>
        <AddToCalendarButton
          name={eventName}
          options={[
            "Apple",
            "Google",
            "iCal",
            "Microsoft365",
            "MicrosoftTeams",
            "Outlook.com",
            "Yahoo",
          ]}
          location={location}
          startDate={calendarStartDate}
          startTime={calendarStartTime}
          endTime={calendarEndTime}
          timeZone="Africa/Lagos"
          buttonStyle="round"
          trigger="click"
          description={description}
        ></AddToCalendarButton>
      </article>
    </article>
  );
}
