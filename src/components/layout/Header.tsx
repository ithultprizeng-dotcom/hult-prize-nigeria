'use client'
import Image from "next/image";
import hult_prize_nigeria_logo from "../../../public/HP_NigeriaHP.png";
import Link from "next/link";
import { NAVLINKS } from "@/src/lib/constants";
import Navlink from "../ui/Navlink";
import Button from "../ui/Button";
import { redirect } from "next/navigation";

export default function Header() {
  return (
    <header className="flex px-8 py-8 justify-between items-center">
      <Link href={"/"}>
        <Image
          src={hult_prize_nigeria_logo}
          alt="home page logo icon"
          className="w-[60px] aspect-1.154/1 object-cover"
          placeholder="blur"
        />
      </Link>
      <nav className="flex gap-8 items-center">
        <div className="flex items-center gap-6">
          {NAVLINKS.map((each_link, index) => (
            <Navlink
              key={index}
              href={each_link.href}
              title={each_link.title}
            />
          ))}
        </div>
        <Button
          text="Register to compete"
          onclick={() => {
            redirect("/register");
          }}
        />
      </nav>
    </header>
  );
}
