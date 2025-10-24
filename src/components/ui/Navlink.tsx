import { type NavlinksType } from "@/src/lib/constants";
import Link from "next/link";

export default function Navlink({ href, title }: NavlinksType) {
  return (
    <Link
      href={href}
      className="text-caption font-body text-midnight font-semibold capitalize hover:tracking-wide duration-200 hover:text-pink"
    >
      {title}
    </Link>
  );
}
