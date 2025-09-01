import React from "react";
import Post from "../post";

function Posts() {
  return (
    <div className="grid lg:grid-cols-3 justify-center items-center gap-[20px]">
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
