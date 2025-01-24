import React, { useState } from "react";
import LoginPage from "./authentication/LoginPage";
import SignUpPage from "./authentication/SignUpPage";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchToSignUp = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);
  
  return isLogin ? (
    <LoginPage switchToSignUp={switchToSignUp} />
  ) : (
    <SignUpPage switchToLogin={switchToLogin} />
  );
};

export default AuthPage;