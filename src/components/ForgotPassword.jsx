import { useState } from "react";
import { BsEnvelope, BsKey, BsSend } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { triggerToaster } from "../Utility.js";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disable, setDisable] = useState(true);
  const Navigate = useNavigate();

  const sendOtp = () => {
    triggerToaster("info", "Sending OTP to your email");
    fetch(`/api/forgotPassword/email/${email}`).then(async (response) => {
      if (response.status === 200) {
        triggerToaster("success", "OTP sent to your email");
        setDisable(false);
      } else {
        triggerToaster("warning", await response.json());
      }
    });
  };
  const forgotPassword = () => {
    let details = {
      email: email,
      otp: otp,
      password: password,
      confirmPassword: confirmPassword,
    };
    fetch("api/forgotPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    }).then(async (response) => {
      if (response.status === 200) {
        triggerToaster("success", await response.json());
        setTimeout(() => {
          Navigate("/login");
        }, 3000);
      } else {
        triggerToaster("error", await response.json());
      }
    });
  };
  return (
    <div className="flex items-center justify-center h-[78vh]">
      <div className="relative flex justify-center items-center w-[512px] h-[600px] overflow-hidden z-[2]">
        <div
          className="absolute w-[500px] flex flex-col transition-[0.5] duration-[ease-in-out] left-1"
          id="login"
        >
          <div className="top">
            <header className="text-black text-3xl text-center pt-2.5 pb-[30px] px-0">
              Forgot Password
            </header>
          </div>
          <div className="h-20">
            <div>
              <input
                type="email"
                className="text-[15px] text-black h-[50px] w-full transition-[0.2s] duration-[ease] pl-[45px] pr-2.5 py-0 rounded-[30px] border-solid border-2 border-black "
                placeholder="Email"
                name="Email"
                id="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <BsEnvelope
                style={{ position: "relative", top: "-33px", left: "14px" }}
              />
            </div>
            <BsSend
              id="sendOtp"
              onClick={sendOtp}
              style={{ position: "relative", top: "-48px", left: "93%" }}
            />
          </div>
          <div className="h-20">
            <div>
              <input
                type="password"
                className="text-[15px] text-black h-[50px] w-full transition-[0.2s] duration-[ease] pl-[45px] pr-2.5 py-0 rounded-[30px] border-solid border-2 border-black "
                placeholder="OTP"
                name="OTP"
                id="OTP"
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                disabled={disable}
                required
              />
              <BsKey
                style={{ position: "relative", top: "-33px", left: "14px" }}
              />
            </div>
          </div>
          <div className="h-20">
            <input
              type="password"
              className="text-[15px] text-black h-[50px] w-full transition-[0.2s] duration-[ease] pl-[45px] pr-2.5 py-0 rounded-[30px] border-solid border-2 border-black "
              placeholder="Password"
              name="Password"
              id="Password"
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={disable}
              required
            />
            <BsKey
              style={{ position: "relative", top: "-33px", left: "14px" }}
            />
          </div>
          <div className="h-20">
            <input
              type="password"
              className="text-[15px] text-black h-[50px] w-full transition-[0.2s] duration-[ease] pl-[45px] pr-2.5 py-0 rounded-[30px] border-solid border-2 border-black "
              placeholder="Confirm Password"
              name="Password"
              id="ConfirmPassword"
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
              value={confirmPassword}
              disabled={disable}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <BsKey
              style={{ position: "relative", top: "-33px", left: "14px" }}
            />
          </div>
          <div className="h-20">
            <button
              type="button"
              className="text-[15px] font-medium text-[black] h-[45px] w-full cursor-pointer transition-[0.3s] duration-[ease-in-out] mt-2.5 rounded-[30px] border-solid border-2 border-black"
              id="LogIn"
              onClick={forgotPassword}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
