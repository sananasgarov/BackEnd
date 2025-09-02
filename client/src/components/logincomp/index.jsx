import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { register } from "../../services";
export default function LoginComp({ setIsLogin }) {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await register({ name: inputRef.current.value });
      dispatch({
        type: "SET_USER",
        payload: data.user,
      });
      setIsLogin(true);
      alert("Registration successful");
    } catch (error) {
      alert("Name exists");
      console.error("Registration failed:", error);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action=""
            method="POST"
            className="space-y-6"
            onSubmit={loginHandler}
          >
            <div>
              <label
                htmlFor="text"
                className="block text-sm/6 font-medium text-gray-100"
              >
                NickName
              </label>
              <div className="mt-2">
                <input
                  id="text"
                  name="text"
                  type="text"
                  ref={inputRef}
                  required
                  autoComplete="text"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Not a member?{" "}
            <a
              href=""
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
