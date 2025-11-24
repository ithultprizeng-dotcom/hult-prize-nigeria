"use client";
import { TeamAPIResponse } from "@/src/lib/types";
import { useState, useEffect } from "react";
import { fetchBOGTeam, fetchExecutiveTeam, fetchCampusDirectorTeam } from "@/src/lib/services";
import Image from "next/image";

export default function Team() {
  const [boardOfGovernance, setBoardOfGovernance] = useState<
    TeamAPIResponse[] | null
  >(null);
  const [executiveTeam, setExecutiveTeam] = useState<TeamAPIResponse[] | null>(
    null
  );
  const [campusDirectorTeam, setCampusDirectorTeam] = useState<TeamAPIResponse[] | null>(
    null
  );
  useEffect(() => {
    async function getData() {
      const BOG_team = await fetchBOGTeam();
      const executive_team = await fetchExecutiveTeam();
      const campus_director_team = await fetchCampusDirectorTeam();
      console.log("Board of Governance Team: ", BOG_team);
      console.log("Executive team", executive_team);
      if (BOG_team) setBoardOfGovernance(BOG_team);
      if (executive_team) setExecutiveTeam(executive_team);
      if (campus_director_team) setCampusDirectorTeam(campus_director_team);
    }
    getData();
  }, []);

  return (
    <main className="px-8 py-20 flex flex-col gap-20 items-center">
      <div>
        <h1 className="font-figtree font-semibold text-aloe text-sub-heading leading-[1.3] max-w-[30ch]">
          Meet the Hult Prize Nigeria 2025/2026 Leadership
        </h1>
        <p className="mt-5 font-body font-normal text-[#808080] text-body leading-[1.5] max-w-prose text-balance ">
          The success of the Hult Prize in Nigeria is driven by a dedicated team
          of student leaders, industry professionals, and entrepreneurial
          pioneers. This team is committed to scouting, mentoring, and funding
          the next generation of impact-driven ventures.
        </p>
      </div>

      <section className="flex flex-col gap-30 items-center">
        <div className="flex flex-col gap-10 items-center">
          <h3 className="font-body font-semibold text-[24px] text-aloe tracking-[1.2px] uppercase underline underline-offset-6 decoration-double">
            The Board of Governance
          </h3>
          <div className="flex flex-wrap items-stretch gap-12 justify-center">
            {boardOfGovernance?.map((eachMember) => (
              <div
                key={eachMember.id}
                className="flex flex-col gap-2 w-[min(85vw,350px)] "
              >
                <div className="relative w-full aspect-square rounded-tl-[20px] rounded-br-[20px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.4)] overflow-hidden py-2 group ">
                  <Image
                    src={eachMember.image_url}
                    alt={`${
                      eachMember.first_name + " " + eachMember.last_name
                    }`}
                    fill
                    className="bg-aloe object-cover object-top group-hover:scale-105 duration-300 ease-out group-hover:saturate-150"
                  />
                </div>
                <div>
                  <h3 className="text-body-lg text-aloe font-semibold font-body capitalize">{`${eachMember.first_name.toLocaleLowerCase()} ${eachMember.last_name.toLocaleLowerCase()}`}</h3>
                  <p className="font-body text-black text-body font-regular  text-balance">
                    {eachMember.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <h3 className="font-body font-semibold text-[24px] text-aloe tracking-[1.2px] uppercase underline underline-offset-6 decoration-double ">
            The Executives{" "}
          </h3>
          <div className="flex flex-wrap items-stretch justify-center gap-8">
            {executiveTeam?.map((eachMember) => (
              <div
                key={eachMember.id}
                className="flex flex-col items-center gap-2 w-[min(85vw,350px)] "
              >
                <div className="relative w-full aspect-square rounded-tl-[20px] rounded-br-[20px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.4)] overflow-hidden py-2 group">
                  <Image
                    src={eachMember.image_url}
                    alt={`${
                      eachMember.first_name + " " + eachMember.last_name
                    }`}
                    fill
                    className="object-cover bg-aloe object-top group-hover:scale-105 duration-300 ease-out group-hover:saturate-150"
                  />
                </div>
                <div>
                  <h3 className="text-body-lg text-aloe font-semibold font-body">{`${eachMember.first_name} ${eachMember.last_name}`}</h3>
                  <p className="font-body text-black text-body font-regular  text-balance capitalize">
                    {eachMember.role.toLocaleLowerCase()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <h3 className="font-body font-semibold text-[24px] text-aloe tracking-[1.2px] uppercase underline underline-offset-6 decoration-double ">
            The Campus Directors{" "}
          </h3>
          <div className="flex flex-wrap items-stretch justify-center gap-8">
            {campusDirectorTeam?.map((eachMember) => (
              <div
                key={eachMember.id}
                className="flex flex-col items-center gap-2 w-[min(85vw,350px)] "
              >
                <div className="relative w-full aspect-square rounded-tl-[20px] rounded-br-[20px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.4)] overflow-hidden py-2 group">
                  <Image
                    src={eachMember.image_url}
                    alt={`${
                      eachMember.first_name + " " + eachMember.last_name
                    }`}
                    fill
                    className="object-cover bg-aloe object-top group-hover:scale-105 duration-300 ease-out group-hover:saturate-150"
                  />
                </div>
                <div>
                  <h3 className="text-body-lg text-aloe font-semibold font-body">{`${eachMember.first_name} ${eachMember.last_name}`}</h3>
                  <p className="font-body text-black text-body font-regular  text-balance capitalize">
                    {eachMember.role.toLocaleLowerCase()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
