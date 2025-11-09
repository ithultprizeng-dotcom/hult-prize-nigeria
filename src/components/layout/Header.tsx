"use client";
import Image from "next/image";
import hult_prize_nigeria_logo from "../../../public/HP_NigeriaHP.png";
import Link from "next/link";
import { NAVLINKS } from "@/src/lib/constants";
import Navlink from "../ui/Navlink";
import Button from "../ui/Button";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Dialog, DialogPanel } from '@headlessui/react';
import { Menu, X } from "lucide-react";


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="flex px-4 sm:px-8 py-8 justify-between items-center">
      <Link href={"/"}>
        <Image
          src={hult_prize_nigeria_logo}
          alt="home page logo icon"
          className="w-12 sm:w-[60px] aspect-1.154/1 object-cover"
          placeholder="blur"
        />
      </Link>
      <nav className="flex gap-2 md:gap-12 items-center">
        <div className="items-center gap-6 hidden md:flex">
          {NAVLINKS.map((each_link, index) => (
            <Navlink
              key={index}
              href={each_link.href}
              title={each_link.title}
            />
          ))}
        </div>
        <div className="hidden md:block">
          <Button
            text="Register to compete"
            onclick={() => {
              redirect("https://www.hultprize.org/register/");
            }}
          />
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Menu aria-hidden="true" className="size-8 text-[#2e3182]" />
          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#06b47a] p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <Link href={"/"} className="-m-1.5 p-1.5">
              <Image
                src={hult_prize_nigeria_logo}
                alt="home page logo icon"
                className="w-12 sm:w-[60px] aspect-1.154/1 object-cover"
                placeholder="blur"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <X aria-hidden="true" className="size-6 text-white" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {NAVLINKS.map((each_link, index) => (
                  <Link
                    key={index}
                    href={each_link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    {each_link.title.toLocaleUpperCase()}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button
                  text="Register to compete"
                  onclick={() => {
                    redirect("https://www.hultprize.org/register/");
                  }}
                />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
