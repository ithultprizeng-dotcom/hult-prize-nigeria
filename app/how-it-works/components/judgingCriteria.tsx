import { winnersSelection, preparationTips } from "../constants";
import Image from "next/image";
import list_icon from "@/public/images/icon.png";

export function JudgingCriteria() {
  return (
    <section className="flex gap-8 py-25 relative">
      <div
        className="absolute inset-0 -z-10 blur-2xl opacity-80"
        style={{
          backgroundImage: "url(/images/green-background.png)",
          backgroundSize: "contain",
        }}
      ></div>
      <section className="flex flex-1 flex-col items-end gap-6 text-right">
        <div>
          <h3 className="font-bold font-body text-3xl text-aloe capitalize tracking-[1.5px] mb-1">
            How winners are selected
          </h3>
          <p className="font-body font-semibold text-body text-pink tracking-[1px]">
            Judges look for teams with:
          </p>
        </div>
        <ul className="flex flex-col gap-1.5">
          {winnersSelection.map((selection, index) => (
            <li
              key={index}
              className="font-body text-body text-black font-medium tracking-[0.8px] capitalize flex justify-end items-center gap-2"
            >
              <Image
                src={list_icon}
                alt="list icon"
                aria-hidden="true"
                className="w-10 object-contain"
              />
              <p>{selection}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-1 flex-col items-start gap-6 text-left">
        <div>
          <h3 className="font-bold font-body text-3xl text-aloe capitalize tracking-[1.5px] mb-1">
            How to prepare for success
          </h3>
          <p className="font-body font-semibold text-body text-pink tracking-[1px]">
            If you want to win:
          </p>
        </div>

        <ul className="flex flex-col gap-1.5">
          {preparationTips.map((tip, index) => (
            <li
              key={index}
              className="font-body text-body text-black font-medium tracking-[0.8px] capitalize flex items-center gap-2"
            >
              <p>{tip}</p>
              <Image
                src={list_icon}
                alt="list icon"
                aria-hidden="true"
                className="w-10 object-contain"
              />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
