import { getAllPosts } from "@/service/posts";
import React from "react";

import PostCard from "./postCard";
import MultiCarosel from "./MultiCarosel";

export default async function CarouselPosts() {
  const posts = await getAllPosts();
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">You May Like</h2>
      <MultiCarosel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarosel>
    </section>
  );
}
