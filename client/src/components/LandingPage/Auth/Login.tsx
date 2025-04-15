import { useState } from "react";
import AuthLabelInput from "./AuthLabelInput";

import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../../util/api/auth.api";
import { Navigate } from "react-router";

export default function Login() {
  const [username, setUsername] = useState("erikrei");
  const [password, setPassword] = useState("test123");

  const loginMutation = useMutation({
    mutationKey: ["login", username],
    mutationFn: loginUser,
  });

  function onLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    loginMutation.mutate({ username, password });
  }

  if (loginMutation.isSuccess) {
    console.log(loginMutation.data);
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onLogin} className="auth-form">
        <AuthLabelInput
          label="Benutzername"
          inputName="username"
          inputType="text"
          inputValue={username}
          onChange={setUsername}
        />
        <AuthLabelInput
          label="Passwort"
          inputName="password"
          inputType="password"
          inputValue={password}
          onChange={setPassword}
        />
        <button
          type="submit"
          className="form-submit-login"
          disabled={loginMutation.isPending}
        >
          Login
        </button>
      </form>
    </>
  );
}
