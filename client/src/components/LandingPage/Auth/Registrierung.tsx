import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import AuthLabelInput from "./AuthLabelInput";
import { registerUser } from "../../../util/api/auth.api";
import { checkRegisterInput } from "../../../util/checkAuthInput";
import AuthErrorClient from "./AuthErrorClient";
import AuthErrorServer from "./AuthErrorServer";
import RegisterSuccess from "./RegisterSuccess";

export default function Registrierung() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerErrMsg, setRegisterErrMsg] = useState("");

  const registerMutation = useMutation({
    mutationKey: ["register", username],
    mutationFn: registerUser,
  });

  function onRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const [isValid, errorMessage] = checkRegisterInput(
      username,
      email,
      password
    );
    if (registerErrMsg.length) setRegisterErrMsg("");
    if (isValid) {
      registerMutation.mutate({ username, email, password });
    } else {
      setRegisterErrMsg(errorMessage);
    }
  }

  return (
    <>
      <h2>Registrierung</h2>
      <form onSubmit={onRegister} className="auth-form">
        <AuthLabelInput
          label="Benutzername"
          inputName="username"
          inputType="text"
          inputValue={username}
          onChange={setUsername}
        />
        <AuthLabelInput
          label="Email-Adresse"
          inputName="email-address"
          inputType="text"
          inputValue={email}
          onChange={setEmail}
        />
        <AuthLabelInput
          label="Passwort"
          inputName="password"
          inputType="password"
          inputValue={password}
          onChange={setPassword}
        />
        <RegisterSuccess showSuccess={registerMutation.isSuccess} />
        <AuthErrorClient errorMessage={registerErrMsg} />
        <AuthErrorServer
          isError={registerMutation.isError}
          error={registerMutation.error}
        />
        <button
          type="submit"
          className="form-submit-register"
          disabled={registerMutation.isPending}
        >
          Registrieren
        </button>
      </form>
    </>
  );
}
