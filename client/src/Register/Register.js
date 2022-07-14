import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    roles: ["user"],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log({ user });
  };

  const register = () => {
    const { username, email, password } = user;
    console.log({ user });
    if (username && email && password) {
      axios.post("http://localhost:5050/signup", user).then(
        (res) => {
          window.location.href = "/";
        },
        (err) => alert(err)
      );
    } else {
      alert("invalid input");
    }
  };
  return (
    <>
      <div class="flex flex-col max-w-md px-2 py-6 bg-white rounded-lg shadow dark:bg-gray-850 sm:px-3 md:px-6 lg:px-11">
        <div class="self-center mb-2 text-xl font-light text-gray-850 sm:text-2xl dark:text-white">
          Create a new account
        </div>
        <span class="justify-center text-sm text-center text-gray-550 flex-items-center dark:text-gray-400">
          Already have an account ?
          <Link className="btn btn-link" to={`/login`}>
            Sign In
          </Link>
        </span>
        <div class="p-6 mt-8">
          <form action="#">
            <div class="flex flex-col mb-2">
              <div class=" relative ">
                <input
                  type="text"
                  id="create-account-pseudo"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  placeholder="username"
                />
              </div>
            </div>
            <div class="flex gap-4 mb-2">
              <div class=" relative ">
                <input
                  type="text"
                  id="create-account-first-name"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="email"
                />
              </div>
            </div>
            <div class="flex flex-col mb-2">
              <div class=" relative ">
                <input
                  type="password"
                  id="create-account-email"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="password"
                />
              </div>
            </div>
            <div class="flex w-full my-4">
              <button
                type="submit"
                class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                onClick={register}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
