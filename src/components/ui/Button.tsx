import cn from "@/src/lib/utils";
import { ClassValue } from "clsx";

export default function Button({
  text,
  onclick,
  classnames,
}: {
  text: string;
  onclick?: () => void;
  classnames?: ClassValue;
}) {
  return (
    <button
      className={cn(
        `cursor-pointer px-4 pl-6 py-1.5 bg-pink shadow-2xl text-caption capitalize text-white font-figtree button font-semibold`,
        classnames
      )}
      onClick={onclick}
    >
      {text}
    </button>
  );
}
