import React, { useEffect } from "react";
import { deletePost } from "../../../services";
import { useDispatch } from "react-redux";

function Post({ data }) {
  const dispatch = useDispatch();
  async function deleteHandler(params) {
    try {
      dispatch({ type: "SET_LOADER" });
      await deletePost(data.id);
      dispatch({ type: "REMOVE_POST", payload: data.id });
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }
  return (
    <div className="bg-white shadow-md rounded-xl my-4 space-y-6">
      <div>
        <img
          src={data.file}
          alt=""
          className="object-cover w-full h-auto min-w-[300px] max-w-[500px] max-h-[200px] rounded-xl"
        />
      </div>
      <div className="space-y-6 px-6 py-9 flex justify-between items-center">
        <h2 className="font-bold text-black text-[32px]">{data.content}</h2>
        <button
          onClick={deleteHandler}
          className="cursor-pointer text-red-500 text-[20px] font-bold"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Post;
