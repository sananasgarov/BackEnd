import { useState } from "react";
import { createPost } from "../../services";
import { useSelector } from "react-redux";

export default function AddModule({ setHidden }) {
  const {auth} = useSelector((state) => state);
  const [data1, setData] = useState({
    content: "",
    file: null,
  });
  const [content, setContent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await createPost(data1, auth.id);
    } catch (error) {
      console.error("Error adding module:", error);
    }
    alert("Module added!");
    setContent("");
    setHidden(false);
    console.log(data1);

  };
  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "file") {
      setData({
        ...data1,
        file: e.target.files[0],
      });
    } else {
      setData({
        ...data1,
        content: value,
      });
    }
  };
  return (
    <div className="max-w-md absolute z-60 inset-0 mx-auto h-[300px] mt-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="file"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
            onChange={inputHandler}
            name="file"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            name="content"
            value={data1.content}
            onChange={inputHandler}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
        >
          Add Module
        </button>
      </form>
    </div>
  );
}
