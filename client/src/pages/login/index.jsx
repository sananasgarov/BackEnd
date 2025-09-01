import React from "react";
import LoginComp from "../../components/logincomp";

function Login({ setIsLogin }) {
  return (
    <div className="bg-black h-screen">
      <LoginComp setIsLogin={setIsLogin} />
    </div>
  );
}

export default Login;
