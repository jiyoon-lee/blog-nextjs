import { PostData } from "@/service/posts";
import React from "react";
import MarkdownViewer from "./MarkdownViewer";

export default function PostContent({ post }: { post: PostData }) {
  return (
    <section className="flex flex-col p-4">
      <div className="flex justify-end items-center">
        <svg
          className="w-4 h-4 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
          />
        </svg>
        <p className="font-semibold ml-2">{post.date.toString()}</p>
      </div>
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-xl font-bold">{post.description}</p>
      <div className="w-44 border-2 border-sky-600 mt-4 mb-8"></div>
      <MarkdownViewer content={post.content} />
    </section>
  );
}
