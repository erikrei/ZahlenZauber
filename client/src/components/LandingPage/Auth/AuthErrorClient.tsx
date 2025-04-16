import { MdError } from "react-icons/md";

type AuthErrorClientProps = {
  errorMessage: string;
};

export default function AuthErrorClient({
  errorMessage,
}: AuthErrorClientProps) {
  if (errorMessage.length)
    return (
      <div className="auth-msg-container error">
        <MdError />
        <p className="auth-error-msg">{errorMessage}</p>
      </div>
    );
}
