"use client";

import { fetchPartners } from "@/src/lib/services";
import { PartnersAPIResponseData } from "@/src/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Partners() {
  const [partnersData, setPartnersData] = useState<
    PartnersAPIResponseData[] | null
  >(null);

  useEffect(() => {
    const getPartners = async () => {
      try {
        const data = await fetchPartners();
        if (data) {
          setPartnersData(data);
        } else {
          throw new Error("There was a problem fetching the partners data.");
        }
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };

    getPartners();
  }, []);

  return (
    <section className="min-h-screen bg-[url('/images/paper_background.png')] bg-cover bg-bottom py-20 pb-30 px-4 sm:px-8">
      <h1 className="text-aloe text-main-heading font-figtree text-center font-bold">
        Our <span className="text-pink">Amazing</span> Partners
      </h1>
      <p className="text-black text-center font-body">
        We are proud to collaborate with these incredible organizations.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-8 mt-16 sm:mt-25">
        {partnersData?.map((partner) => (
          <div
            key={partner.id}
            className="bg-white p-4 rounded-lg shadow-md border-2 border-text-white"
          >
            <Image
              src={partner.image_url}
              alt={partner.name}
              width={200}
              height={200}
              className="w-[min(200px,85vw)] h-[min(200px,40vw)] object-contain"
            />
            <p className="text-aloe max-w-[40ch] text-pretty text-center font-body mt-2 text-body">
              {partner.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
