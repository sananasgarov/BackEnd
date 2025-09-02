import React from "react";
import AddModule from "../addmodule";
import Overlay from "../addmodule/overlay";
import { useDispatch, useSelector } from "react-redux";

function Navbar({ hidden, setHidden, setIsLogin }) {
  const { posts, allPosts } = useSelector((state) => state.posts);
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  function searchHandler(e) {
    const keyword = e.target.value.toLowerCase();
    if (keyword === "") {
      dispatch({ type: "SET_POSTS", payload: allPosts });
      return;
    }
    const includedPosts = allPosts.filter((post) =>
      post.content.toLowerCase().includes(keyword)
    );

    dispatch({ type: "SET_POSTS", payload: includedPosts });
  }
  return (
    <div className="max-w-[1320px] flex items-center mx-auto justify-between gap-[20px]">
      <div className="flex items-end gap-[10px]">
        <h2 className="text-white font-bold text-[32px]">{auth?.name}</h2>
        <button
          onClick={() => setIsLogin(false)}
          className="text-[20px] text-red-500 font-bold cursor-pointer"
        >
          Log out
        </button>
      </div>
      <div className="shadow-xl bg-white flex rounded-2xl w-auto items-center gap-[10px] text-black py-4 px-6">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.53223 14.0332C8.92969 14.0332 10.2393 13.6113 11.3291 12.8906L15.1787 16.749C15.4336 16.9951 15.7588 17.1182 16.1104 17.1182C16.8398 17.1182 17.376 16.5469 17.376 15.8262C17.376 15.4922 17.2617 15.167 17.0156 14.9209L13.1924 11.0801C13.9834 9.95508 14.4492 8.59277 14.4492 7.11621C14.4492 3.31055 11.3379 0.199219 7.53223 0.199219C3.73535 0.199219 0.615234 3.31055 0.615234 7.11621C0.615234 10.9219 3.72656 14.0332 7.53223 14.0332ZM7.53223 12.1875C4.74609 12.1875 2.46094 9.90234 2.46094 7.11621C2.46094 4.33008 4.74609 2.04492 7.53223 2.04492C10.3184 2.04492 12.6035 4.33008 12.6035 7.11621C12.6035 9.90234 10.3184 12.1875 7.53223 12.1875Z"
            fill="#3C3C43"
            fill-opacity="0.6"
          />
        </svg>
        <input
          type="text"
          className="border-none outline-none placeholder:text-white"
          placeholder="Search..."
          onChange={searchHandler}
        />
      </div>
      <div>
        <button
          onClick={() => setHidden(true)}
          className="bg-white text-black shadow-lg py-[10px] hover:text-white cursor-pointer px-[50px] rounded-2xl font-medium hover:bg-inherit hover:outline hover:outline-white transition-all duration-300"
        >
          Add
        </button>
      </div>
      {hidden && (
        <div>
          <Overlay setHidden={setHidden} />
          <AddModule setHidden={setHidden} />
        </div>
      )}
    </div>
  );
}

export default Navbar;
