"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="py-20 px-12 flex flex-col gap-3 items-center"
      style={{
        background:
          "radial-gradient(circle at 0% 10%, var(--color-text-white) 0%, transparent 30%), radial-gradient(circle at 30% 50%, var(--color-pink) 0%, transparent 30%), radial-gradient(circle at 60% 10%, var(--color-aloe) 0%, transparent 30%), radial-gradient(circle at 100% 60%, var(--color-text-white) 0%, transparent 30%), radial-gradient(circle at 50% 70%, var(--color-text-white) 0%, transparent 30%), radial-gradient(circle at 0% 100%, var(--color-aloe) 0%, transparent 30%),radial-gradient(circle at 90% 30%, var(--color-sky) 0%, transparent 15%), radial-gradient(circle at 60% 70%, var(--color-aloe) 0%, transparent 30%), radial-gradient(circle at 60% 85%, var(--color-pink) 0%, transparent 30%), radial-gradient(circle at 70% 40%, var(--color-sky) 0%, transparent 20%)",
      }}
    >
      <h2 className="font-black font-figtree text-[10rem] leading-[1.3] text-center not-found">
        404
      </h2>
      <p className="font-body text-black text-body capitalize">
        This page will be available soon.
      </p>
      <Link
        href={"/"}
        className="font-body py-4 px-8 flex items-center justify-center text-white bg-aloe text-body rounded-sm hover:bg-pink duration-300"
      >
        Return Home
      </Link>
    </section>
  );
}
