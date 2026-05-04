"use client";

import { fetchPartners } from "@/src/lib/services";
import { PartnersAPIResponseData } from "@/src/lib/types";
import { useEffect, useState } from "react";
import { PartnersBlock } from "./PartnersBlock";

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

  return PartnersBlock({
    partnersData,
    type: "Partners",
    text: "We are proud to collaborate with these incredible organizations.",
  });
}
