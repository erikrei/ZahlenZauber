import {
  JSX,
  useState,
  useContext,
  createContext,
  SetStateAction,
} from "react";

type RegisterContextProps = {
  children: JSX.Element;
};

type Register = {
  username: string;
  email: string;
  password: string;
  setUsername: React.Dispatch<SetStateAction<string>>;
  setEmail: React.Dispatch<SetStateAction<string>>;
  setPassword: React.Dispatch<SetStateAction<string>>;
  registerUser: () => void;
};

export const RegisterContext = createContext<Register | null>(null);

export default function RegisterContextProvider({
  children,
}: RegisterContextProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser() {
    console.log(`Benutzername: ${username}, Email: ${email}, Passwort: ${password}`)
  }

  return (
    <RegisterContext
      value={{
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        registerUser
      }}
    >
      {children}
    </RegisterContext>
  );
}

export function useRegisterContext() {
  const context = useContext(RegisterContext);

  if (!context)
    throw new Error(
      "useRegisterContext() kann nur im <RegisterContext> benutzt werden."
    );

  return context;
}
