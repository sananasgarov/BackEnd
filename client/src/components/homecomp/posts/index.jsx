import React, { useEffect } from "react";
import Post from "../post";
import { getAllPosts } from "../../../services";
import { useDispatch, useSelector } from "react-redux";

function Posts() {
  const { posts } = useSelector((state) => state.posts);
  const { loader } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllPosts();
        dispatch({ type: "SET_ALL_POSTS", payload: data });
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    })();
  }, [loader]);

  return (
    <div className="grid lg:grid-cols-3 justify-center items-center gap-[20px]">
      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  );
}

export default Posts;
