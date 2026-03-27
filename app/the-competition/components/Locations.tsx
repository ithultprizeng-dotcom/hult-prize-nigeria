import Image, { StaticImageData } from "next/image";
import venue_icon from "@/public/images/location.webp";
import date_icon from "@/public/images/date.webp";
import time_icon from "@/public/images/time.webp";

export function Locations() {
  return (
    <section className="bg-neutral-100 my-20 px-4 sm:px-8 py-12">
      <h3 className="font-bold font-figtree text-sub-heading mb-2 uppercase text-midnight">
        Do Not Miss Out!
      </h3>

      <div className="flex flex-col sm:flex-row gap-8 justify-between py-8">
        <LocationItem icon={date_icon} text="May 9, 2026" category="Date" />
        <LocationItem
          icon={venue_icon}
          text="University of Lagos (UNILAG)"
          category="Venue"
        />
        <LocationItem icon={time_icon} text="10:00 AM WAT" category="Time" />
      </div>

      <div className="mt-12">
        <h3 className="text-3xl [font-variant:small-caps] font-bold font-figtree mb-4 text-midnight">Find your Way</h3>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3964.04996771607!2d3.3885850749928648!3d6.515359993477073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMzAnNTUuMyJOIDPCsDIzJzI4LjIiRQ!5e0!3m2!1sen!2sng!4v1774439712562!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-4xl shadow-2xl border-2 border-amber-600 "
        ></iframe>
      </div>
    </section>
  );
}

function LocationItem({
  icon,
  text,
  category,
}: {
  icon: StaticImageData;
  text: string;
  category: string;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-white rounded-lg px-6 py-4 shadow-md flex-1 border-2 border-navy">
      <Image src={icon} alt={text} className="w-30 object-contain" />
      <div className="flex flex-col gap-0 justify-center items-center">
        <p className="text-body text-navy [font-variant:small-caps] font-figtree text-center">
          {category}
        </p>
        <p className="text-body-lg text-midnight font-figtree text-center">{text}</p>
      </div>
    </section>
  );
}
