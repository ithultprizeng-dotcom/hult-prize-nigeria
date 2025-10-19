import Image from "next/image";
import hult_prize_nigeria_logo from "../../../public/HP_NigeriaHP.png";
import Link from "next/link";
import { NAVLINKS } from "@/src/lib/constants";
import Navlink from "../ui/Navlink";

export default function Header() {
  return (
    <header className="flex px-8 py-4 justify-between">
      <Link href={"/"}>
        <Image
          src={hult_prize_nigeria_logo}
          alt="home page logo icon"
          className="w-[60px] aspect-1.154/1 object-cover"
        />
      </Link>
      <nav className="flex gap-4 items-center">
        {NAVLINKS.map((each_link, index) => (
          <Navlink key={index} href={each_link.href} title={each_link.title} />
        ))}
      </nav>
    </header>
  );
}
