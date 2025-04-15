import { useState } from "react";
import AuthLabelInput from "./AuthLabelInput";

export default function Registrierung() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser() {
    console.log(
      `Benutzername: ${username}, Email: ${email}, Passwort: ${password}`
    );
  }

  return (
    <>
      <h2>Registrierung</h2>
      <form action={registerUser} className="auth-form">
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
        <button type="submit" className="form-submit-register">Registrieren</button>
      </form>
    </>
  );
}
