"use client";
import { EventCardType, EventsAPIResponseData } from "@/src/lib/types";
import EventCard from "./EventCard";
import { useState, useEffect } from "react";
import { fetchUpcomingEvents } from "@/src/lib/services";

const processDateAndTime = (dateString: string) => {
  const date = new Date(dateString);
  return {
    processedDate: date.toDateString(),
    processedTime: date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  };
};
export function EventCardsBlock() {
  const [hasMounted, setMount] = useState<boolean>(false);
  const [eventsData, setEventData] = useState<EventsAPIResponseData[] | null>(
    null
  );

  useEffect(() => {
    async function fetchEvents() {
      const result = await fetchUpcomingEvents();
      setEventData(result);
    }
    fetchEvents();
    setMount(true);
  }, []);
  return (
    eventsData && (
      <section className="flex flex-col gap-12 ">
        {eventsData.map(
          (eachEvent, index) =>
            hasMounted && (
              <EventCard
                key={index}
                imageSrc={eachEvent.image_url}
                end_time={
                  processDateAndTime(
                    eachEvent.event_date + ":" + eachEvent.end_time
                  ).processedTime
                }
                start_time={
                  processDateAndTime(
                    eachEvent.event_date + ":" + eachEvent.end_time
                  ).processedTime
                }
                eventDate={
                  processDateAndTime(eachEvent.event_date).processedDate
                }
                eventName={eachEvent.title}
                description={`${eachEvent.title} promises to be a value packed event as every Hult Prize event turns out to be. Lots of value will be shared and you cannot afford to miss out!`}
                location={
                  eachEvent.event_address
                    ? eachEvent.event_type === "HYBRID"
                      ? eachEvent.event_address +
                        "and Online Participation with Google Meet"
                      : eachEvent.event_address
                    : "Online Event with Google Meet"
                }
                calendarEndTime={eachEvent.end_time}
                calendarStartDate={eachEvent.event_date}
                calendarStartTime={eachEvent.start_time}
                registrationLink={eachEvent.register_link}
                eventType={eachEvent.event_type}
              />
            )
        )}
      </section>
    )
  );
}
