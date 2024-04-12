import { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const LoginSignUp = () => {
  const [loginActive, setLoginActive] = useState(true);
  return (
    <div className="flex items-center justify-center h-[78vh]">
      <div className="relative flex justify-center items-center w-[512px] h-[600px] overflow-hidden z-[2]">
        {loginActive && <Login setLoginState={setLoginActive} />}
        {!loginActive && <SignUp setLoginState={setLoginActive} />}
      </div>
    </div>
  );
};

export default LoginSignUp;
