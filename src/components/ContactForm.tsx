"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";
import { sendContactEmail } from "@/service/contact";

const LABEL_CLASS = "block text-white text-lg font-bold mb-1";
const INPUT_CLASS =
  "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};
export default function ContactForm() {
  const [form, setForm] = useState<Form>(DFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form) //
      .then(() => {
        setBanner({
          message: "메일을 성공적으로 보냈습니다!!",
          state: "success",
        });
        setForm(DFAULT_DATA);
      })
      .catch(() => {
        setBanner({
          message: "메일 전송에 실패했습니다.!!",
          state: "error",
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col gap-2 bg-slate-700 rounded-xl p-4 my-4"
      >
        <label className={LABEL_CLASS} htmlFor="from">
          Your Email
        </label>
        <input
          className={INPUT_CLASS}
          id="from"
          type="email"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
        <label className={LABEL_CLASS} htmlFor="subject">
          Subject
        </label>
        <input
          className={INPUT_CLASS}
          id="subject"
          type="text"
          name="subject"
          value={form.subject}
          onChange={onChange}
        />
        <div className="mb-4">
          <label className={LABEL_CLASS} htmlFor="message">
            Message
          </label>
          <textarea
            rows={10}
            id="message"
            name="message"
            className={INPUT_CLASS}
            value={form.message}
            onChange={onChange}
          ></textarea>
        </div>
        <button className="w-full bg-yellow-300 text-slate-800 font-bold text-xl py-2 px-4 rounded hover:text-2xl h-12">
          Submit
        </button>
      </form>
    </section>
  );
}
