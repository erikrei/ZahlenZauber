import { createContext, useContext, useState } from "react";

type LoginContextProviderProps = {
  children: React.ReactElement;
};

type Login = {
  username: string;
  password: string;
  loginUser: () => void;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
};

export const LoginContext = createContext<Login | null>(null);

export default function LoginContextProvider({
  children,
}: LoginContextProviderProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {
    console.log(`username: ${username}, password: ${password}`);
  }

  return (
    <LoginContext
      value={{
        username,
        password,
        loginUser,
        setUsername,
        setPassword
      }}
    >
      {children}
    </LoginContext>
  );
}

export function useLoginContext() {
  const context = useContext(LoginContext);

  if (!context)
    throw new Error(
      "useAuthContext() kann nur im <LoginContext> benutzt werden."
    );

  return context;
}
