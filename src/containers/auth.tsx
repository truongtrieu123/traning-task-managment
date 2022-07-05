import { useAppDispatch, useAppSelector } from "utils/hooks";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useRef } from "react";
import Spinner from "react-bootstrap/Spinner";
import LoginForm from "./auth/login-form";
import RegisterForm from "./auth/register-form";
import { loadUser } from "store/actions/auth-action";

const AuthPage = () => {
  const authStore = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const body = useRef<ReactNode>(null);

  useEffect(()=>{
    dispatch(loadUser());
  },[])

  if (authStore.authLoading) {
    body.current = (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (authStore.isAuthenticated) {
    router.push("/dashboard");
  } else {
    body.current = (
      <>
        {router.pathname === "/login" && <LoginForm />}
        {router.pathname === "/register" && <RegisterForm />}
      </>
    );
  }

  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>LearnIt</h1>
          <h4>Keep track of what you are learning</h4>
          {body.current}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
