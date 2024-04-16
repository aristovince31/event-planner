import { useState } from "react";
import { BsPerson, BsEnvelope, BsKey } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { triggerToaster } from "../Utility.js";

const SignUp = ({ setLoginState }) => {
  const [businessState, setBusinessState] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const Navigate = useNavigate();

  const formMethod = (e) => {
    e.preventDefault();
    let userType = businessState ? "Owner" : "User";
    let register = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      loginType: userType,
    };
    fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(register),
    }).then((response) => {
      if (response.status === 200) {
        triggerToaster("success", "User registered successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => {
          Navigate("/login");
        }, 3000);
      } else {
        triggerToaster("error", "User registration failed");
      }
    });
  };
  return (
    <div
      className="absolute w-[500px] flex flex-col transition-[0.5] duration-[ease-in-out] left-1"
      id="register"
    >
      <div className="top">
        <span className="text-black text-[small] flex justify-center px-0 py-2.5">
          Have an account?
          <button id="loginRedirect" onClick={() => setLoginState(true)}>
            Log In
          </button>
        </span>
        <span
          className="text-black text-[small] flex justify-center px-0 py-2.5"
          id="signUpDirect"
        >
          Don't have an {!businessState && "Owner"} {businessState && "User"}{" "}
          account?
          <button
            id="registerBusiness"
            onClick={() => setBusinessState((prevState) => !prevState)}
          >
            Sign Up
          </button>
        </span>
        <header className="text-black text-3xl text-center pt-2.5 pb-[30px] px-0">
          {businessState && "Sign up as Owner"}
          {!businessState && "Sign up as User"}
        </header>
      </div>
      <div className="flex gap-2.5">
        <div className="h-20">
          <input
            type="text"
            className="text-[15px] text-black h-[50px] w-full transition-[0.2s] duration-[ease] pl-[45px] pr-2.5 py-0 rounded-[30px] border-blaborder-solid border-2 border-black "
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <BsPerson
            style={{ position: "relative", top: "-33px", left: "14px" }}
          />
          <span
            className="hidden relative text-[red] text-[small] right-[20%] top-[5px]"
            id="error-msg-signup-FirstName"
          />
        </div>
        <div className="h-20">
          <input
            type="text"
            className="text-[15px] text-black h-[50px] w-full transition-[0.2s] duration-[ease] pl-[45px] pr-2.5 py-0 rounded-[30px] border-solid border-2 border-black "
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <BsPerson
            style={{ position: "relative", top: "-33px", left: "14px" }}
          />
          <span
            className="hidden relative text-[red] text-[small] right-[20%] top-[5px]"
            id="error-msg-signup-LastName"
          />
        </div>
      </div>
      <div className="h-20">
        <input
          type="email"
          className="text-[15px] text-black h-[50px] w-full transition-[0.2s] duration-[ease] pl-[45px] pr-2.5 py-0 rounded-[30px] border-solid border-2 border-black "
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <BsEnvelope
          style={{ position: "relative", top: "-33px", left: "14px" }}
        />
        <span
          className="hidden relative text-[red] text-[small] right-[20%] top-[5px]"
          id="error-msg-signup-Email"
        />
      </div>
      <div className="h-20">
        <input
          type="password"
          className="text-[15px] text-black h-[50px] w-full transition-[0.2s] duration-[ease] pl-[45px] pr-2.5 py-0 rounded-[30px] border-solid border-2 border-black "
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
        />
        <BsKey style={{ position: "relative", top: "-33px", left: "14px" }} />
        <span
          className="hidden relative text-[red] text-[small] right-[20%] top-[5px]"
          id="error-msg-signup-Password"
        />
      </div>
      <div className="h-20">
        <input
          type="password"
          className="text-[15px] text-black h-[50px] w-full transition-[0.2s] duration-[ease] pl-[45px] pr-2.5 py-0 rounded-[30px] border-solid border-2 border-black "
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
        />
        <BsKey style={{ position: "relative", top: "-33px", left: "14px" }} />
        <span
          className="hidden relative text-[red] text-[small] right-[20%] top-[5px]"
          id="error-msg-signup-ConfirmPassword"
        />
      </div>
      <div className="input-box-signUp">
        <button
          type="button"
          onClick={formMethod}
          className="text-[15px] font-medium text-[black] h-[45px] w-full cursor-pointer transition-[0.3s] duration-[ease-in-out] mt-2.5 rounded-[30px] border-solid border-2 border-black"
          id="SignUp"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
