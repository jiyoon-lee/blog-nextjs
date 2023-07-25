"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src="/images/profile.jpg"
        alt="Picture of the author"
        width={250}
        height={250}
        priority
      />
      <h1 className="text-3xl font-bold mt-2">{"Hi, I'm Jiyoon."}</h1>
      <h2 className=" text-xl font-semibold">Front-end Engineer</h2>
      <h3>더 높게 더 멀리</h3>
      <button
        onClick={() => {
          router.push("/contact");
        }}
        className="mt-2 py-1 px-4 rounded-xl bg-amber-300 font-bold"
      >
        Contact Me
      </button>
    </section>
  );
}
