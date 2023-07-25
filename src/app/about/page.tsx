import React from "react";
import { Metadata } from "next";

import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "About",
  description: "지윤짱의 커리어 소개",
};

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
const CONTENT_CLASS = "text-center";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 p-8 rounded-xl text-center my-8 shadow-lg">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p className={CONTENT_CLASS}>
          개발을 사랑하는 풀스택 개발자
          <br />
          사람과 디자인을 담는 웹앱을 만들고 있음
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p className={CONTENT_CLASS}>
          네어커리어
          <br />
          소프트캠프
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p className={CONTENT_CLASS}>
          React, Vue
          <br />
          Git, Clean Code
          <br />
          VS Code
        </p>
      </section>
    </>
  );
}
