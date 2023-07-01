import React, { useState } from "react";
import { Form } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform authentication logic here
    if (username === "admin" && password === "admin") {
      // Call the onLogin callback to notify the parent component
      onLogin();
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <label htmlFor="username">Username:</label>
    //   <input
    //     type="text"
    //     id="username"
    //     value={username}
    //     onChange={(e) => setUsername(e.target.value)}
    //   />

    //   <label htmlFor="password">Password:</label>
    //   <input
    //     type="password"
    //     id="password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />

    //   <button type="submit">Login</button>
    // </form>
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <form
          class=" md:w-1/2 bg-white flex flex-col w-full md:py-8 mt-8 md:mt-0"
          style={{
            margin: "0 auto",
            maxWidth: "30rem",
            boxShadow:
              "0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19)",
            height: "30rem",
            lineHeight: "2.5",
          }}
        >
          <h2
            class="text-gray-900 text-lg mb-1 font-medium title-font"
            style={{ textAlign: "center", fontSize: "25px" }}
          >
            Login
          </h2>
          <div class="relative mb-4" style={{ margin: "1rem" }}>
            <label for="name" class="leading-7 text-sm text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div class="relative mb-4" style={{ margin: "1rem" }}>
            <label for="email" class="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div
            class="relative mb-4"
            style={{ margin: "1rem", alignSelf: "center" }}
          >
            <button
              style={{ width: "27.9rem" }}
              class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
