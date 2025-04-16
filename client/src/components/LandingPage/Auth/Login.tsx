import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import { loginUser } from "../../../util/api/auth.api";
import AuthLabelInput from "./AuthLabelInput";
import AuthErrorServer from "./AuthErrorServer";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationKey: ["login", username],
    mutationFn: loginUser,
  });

  function onLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    loginMutation.mutate({ username, password }, {
      onSuccess: () => navigate("/dashboard")
    });
  }

  return (
    <>
      {}
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
        <AuthErrorServer
          isError={loginMutation.isError}
          error={loginMutation.error}
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
