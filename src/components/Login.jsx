import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsEnvelope, BsKey } from "react-icons/bs";
import { triggerToaster } from "../Utility.js";

const Login = ({ setLoginState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const formMethod = (e) => {
    e.preventDefault();
    let request = { email: email, password: password };
    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(request),
    }).then(async (response) => {
      if (response.ok) {
        let data = await response.json();
        triggerToaster("success", "Logged in successfully");
        localStorage.setItem("user", JSON.stringify(data));
        setTimeout(() => {
          Navigate(`/${data.loginType}`);
        }, 3000);
      } else {
        triggerToaster("error", "Invalid credentials");
      }
    });
  };

  return (
    <>
      <form
        onSubmit={formMethod}
        className="absolute w-[500px] flex flex-col transition-[0.5] duration-[ease-in-out] left-1"
        id="login"
      >
        <div className="top">
          <span className="text-black text-[small] flex justify-center px-0 py-2.5">
            Doesn't have an account?
            <button id="registerRedirect" onClick={() => setLoginState(false)}>
              Sign Up
            </button>
          </span>
          <header className="text-black text-3xl text-center pt-2.5 pb-[30px] px-0">
            Log in
          </header>
        </div>
        <div className="h-20">
          <input
            type="email"
            className="text-[15px] text-black h-[50px] w-full transition-[0.2s] duration-[ease] pl-[45px] pr-2.5 py-0 rounded-[30px] border-solid border-2 border-black"
            placeholder="Email"
            name="email"
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <BsEnvelope
            style={{ position: "relative", top: "-33px", left: "14px" }}
          />
          <span
            className="hidden relative text-[red] text-[small] right-[20%] top-[5px]"
            id="error-msg-login-Email"
          />
        </div>
        <div className="h-20">
          <input
            type="password"
            className="text-[15px] text-black h-[50px] w-full transition-[0.2s] duration-[ease] pl-[45px] pr-2.5 py-0 rounded-[30px] border-solid border-2 border-black"
            placeholder="Password"
            name="password"
            id="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
          />
          <BsKey style={{ position: "relative", top: "-33px", left: "14px" }} />
          <span
            className="hidden relative text-[red] text-[small] right-[20%] top-[5px]"
            id="error-msg-login-Password"
          />
        </div>
        <div className="text-[15px] font-medium text-[black] h-[45px] w-full cursor-pointer transition-[0.3s] duration-[ease-in-out] mt-2.5 rounded-[30px] border-[none] outline-none">
          <NavLink
            to="/forgotPassword"
            className="text-black font-normal pl-2.5"
          >
            Forgot Password?
          </NavLink>
        </div>
        <div className="input-box">
          <button
            type="submit"
            className="text-[15px] font-medium text-[black] h-[45px] w-full cursor-pointer transition-[0.3s] duration-[ease-in-out] mt-2.5 rounded-[30px] border-solid border-2 border-black"
            id="LogIn"
          >
            Log in
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
