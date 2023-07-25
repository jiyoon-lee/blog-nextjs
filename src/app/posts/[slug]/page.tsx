import React from "react";
import Image from "next/image";
import { Metadata } from "next";

import PostContent from "@/components/postContent";
import AdjacentPostCard from "@/components/AdjacentPostCard";

import { getFeaturedPosts, getPostData } from "@/service/posts";

type Props = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}
export default async function PostDetail({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { path, title, next, prev } = post;

  return (
    <article className="m-4 bg-gray-100 shadow-lg rounded-2xl overflow-hidden">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        width={760}
        height={420}
        alt={title}
      ></Image>
      <PostContent post={post} />
      <section className="flex shadow-md">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
