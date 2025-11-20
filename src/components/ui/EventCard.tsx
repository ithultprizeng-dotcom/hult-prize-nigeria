"use client";

import ribbon from "../../../public/images/badge-ribbon.svg";
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
  registrationLink,
  eventType,
}: EventCardType) {
  return (
    <article className="flex lg:flex-row flex-col lg:items-stretch items-center gap-8 lg:gap-6  w-full pb-12 border-b-2 border-[#f1f1f1] group event-article">
      <div className="relative w-[min(100%,600px)] lg:w-[45%] xl:w-[25%] aspect-square">
        <div
          className="w-full h-full bg-[linear-gradient(-55deg,var(--aloe)_40%,var(--pink)_0%)]  event-card relative rounded-bl-2xl overflow-hidden border-2 border-black"
          style={{ backgroundSize: "10% 5%" }}
        >
          <Image
            src={imageSrc}
            alt="Event Image"
            fill
            className="lg:object-cover object-contain w-full h-[90%]"
          />
        </div>
        <Image
          src={ribbon}
          alt="ribbon"
          className="w-20 absolute -right-7 -bottom-7"
        />
      </div>
      <article className="grow bg-[#f1f1f1] group-hover:bg-[#e0e0e0] duration-300 rounded-2xl py-8 md:py-4 p-4 sm:px-8 flex flex-col justify-between gap-4 items-start">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-2 md:gap-6 w-full">
          <div className="flex flex-col md:flex-row gap-3 md:gap-10 items-start md:items-center justify-start p-2.5 px-6 md:px-4 bg-white rounded-2xl md:rounded-full border border-aloe h-full">
            <div className="flex gap-1 items-center">
              <CalendarDays className="text-aloe" />
              <p className={paragraphStyleClasses}>{eventDate}</p>
            </div>

            <div className="md:h-full md:w-[2px] w-full h-[1px] rounded-full bg-aloe md:bg-[#c0c0c0]"></div>
            <div className="flex gap-1 items-center">
              <Clock8 className="text-aloe" />
              <p className={paragraphStyleClasses}>
                {`${start_time} - ${end_time}`}
              </p>
            </div>
          </div>

          <p className="py-2 px-6 bg-[#ec208855] text-pink font-semibold tracking-[1.2px] font-body text-caption rounded-full shadow-lg">
            {eventType}
          </p>
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
        <div className="flex md:flex-row flex-col gap-2 items-center">
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
            inline={true}
          ></AddToCalendarButton>
          {registrationLink && (
            <Button
              classnames="reversed hov-aloe pr-8 tracking-[1px] pl-4"
              text="register to attend"
              onclick={() => {
                window.open(registrationLink, "_blank");
              }}
            />
          )}
        </div>
      </article>
    </article>
  );
}
