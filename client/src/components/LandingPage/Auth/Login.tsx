import { useState } from "react";
import AuthLabelInput from "./AuthLabelInput";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {
    console.log(`username: ${username}, password: ${password}`);
  }

  return (
    <>
      <h2>Login</h2>
      <form action={loginUser} className="auth-form">
        <AuthLabelInput
          label="Benutzername"
          inputName="username"
          inputValue={username}
          onChange={setUsername}
        />
        <AuthLabelInput
          label="Passwort"
          inputName="password"
          inputValue={password}
          onChange={setPassword}
        />
        <button type="submit" className="form-submit-login">Login</button>
      </form>
    </>
  );
}
