import { type NavlinksType } from "@/src/lib/constants";
import Link from "next/link";

export default function Navlink({ href, title }: NavlinksType) {
  return (
    <Link
      href={href}
      className="text-caption font-figtree text-midnight font-semibold capitalize"
    >
      {title}
    </Link>
  );
}
