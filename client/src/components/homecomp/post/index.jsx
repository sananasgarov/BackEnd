import React from "react";

function Post() {
  return (
    <div className="bg-white shadow-md rounded-xl my-4 space-y-6">
      <div>
        <img
          src="https://websitedemos.net/tech-blogger-04/wp-content/uploads/sites/817/2021/04/post-01-free-img.jpg"
          alt=""
          className="object-cover w-full rounded-xl"
        />
      </div>
      <div className="space-y-6 px-6 py-9">
        <p className="text-gray-500 font-bold">Cryptocurrency</p>
        <h2 className="font-bold text-black text-[32px]">
          What are blockchain transaction fees?
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </p>
      </div>
    </div>
  );
}

export default Post;
