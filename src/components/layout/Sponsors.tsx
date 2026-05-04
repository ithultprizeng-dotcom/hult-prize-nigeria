"use client";

import {  fetchSponsor } from "@/src/lib/services";
import { PartnersAPIResponseData } from "@/src/lib/types";
import { useEffect, useState } from "react";
import { PartnersBlock } from "./PartnersBlock";

export default function Sponsors() {
  const [sponsorsData, setSponsorsData] = useState<
    PartnersAPIResponseData[] | null
  >(null);

  useEffect(() => {
    const getSponsors = async () => {
      try {
        const data = await fetchSponsor();
        if (data) {
          setSponsorsData(data);
        } else {
          throw new Error("There was a problem fetching the sponsors data.");
        }
      } catch (error) {
        console.error("Error fetching sponsors:", error);
      }
    };

    getSponsors();
  }, []);

  return PartnersBlock({
    partnersData: sponsorsData,
    type: "Sponsors",
    text: "We are grateful for the generous support of our sponsors who make our mission possible.",
    qualifier: "Generous"
  });
}
