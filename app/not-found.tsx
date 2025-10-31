"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-20 px-12 flex flex-col gap-3">
      <h2 className="font-black font-body text-hero text-center not-found">
        404
      </h2>
      <p className="font-body text-black text-body">
        This page will be available soon.
      </p>
      <Link
        href={"/"}
        className="font-body py-4 px-8 flex items-center justify-center text-white bg-aloe text-body"
      >
        Return Home
      </Link>
    </section>
  );
}
