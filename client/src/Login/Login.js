import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = ({ setLoginUser }) => {
  const nav = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = () => {
    console.log("navigate");
    window.location.href = "/register";
  };

  const handleChange = (e) => {
    console.log({ user });
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    if (user.username && user.password) {
      axios.post("http://localhost:5050/signin", user).then((res) => {
        nav("/", { state: { user } });
      });
    }
  };
  return (
    <>
      <div class="flex flex-col w-full max-w-md px-6 py-10 bg-grey rounded-lg shadow dark:bg-gray-700 sm:px-5 md:px-7 lg:px-12">
        <div class="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          Login
        </div>
        <div class="mt-8">
          <form action="#" autoComplete="off">
            <div class="flex flex-col mb-2">
              <div class="flex relative ">
                <span class="rounded-l-md inline-flex  items-center px-2 border-t bg-white border-l border-b  border-gray-250 text-gray-550 shadow-sm text-sm"></span>
                <input
                  type="text"
                  id="sign-in-email"
                  class=" rounded-r-lg flex-1 appearance-none border border-gray-250 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-350 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="username"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Username"
                />
              </div>
            </div>
            <div class="flex flex-col mb-6">
              <div class="flex relative ">
                <span class="rounded-l-md inline-flex  items-center px-2 border-t bg-white border-l border-b  border-gray-240 text-gray-550 shadow-sm text-sm"></span>
                <input
                  type="password"
                  id="sign-in-email"
                  class=" rounded-r-lg flex-1 appearance-none border border-gray-350 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-450 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="password"
                />
              </div>
            </div>
            <div class="flex w-full">
              <button
                type="submit"
                class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  "
                onClick={login}
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div class="flex items-center justify-center mt-6">
          <a
            href="#"
            target="_blank"
            class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
            onClick={navigate}
          >
            <span class="ml-2">Need to Register?</span>
          </a>
        </div>
      </div>
    </>
  );
};
export default Login;
