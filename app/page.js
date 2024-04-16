"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../components/ui/typewritter";
import React from "react";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Ride",
    },
    {
      text: "Karo",
    },
    {
      text: "Anytime",
    },
    {
      text: "with",
    },
    {
      text: "ZOYO.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
    <div className="flex flex-col items-center justify-center h-[40rem] bg-black ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
       A Decentralized Ride Hailing System
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href='/home'  className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm text-center pt-3">
          Join now
        </Link>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
    </>
  );
}


