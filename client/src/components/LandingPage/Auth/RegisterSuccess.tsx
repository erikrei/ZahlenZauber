import { FaRegThumbsUp } from "react-icons/fa";

type RegisterSuccessProps = {
  showSuccess: boolean;
};

export default function RegisterSuccess({ showSuccess }: RegisterSuccessProps) {
  if (showSuccess)
    return (
      <div className="auth-msg-container success">
        <FaRegThumbsUp />
        <p className="auth-success-msg">
          Sie haben sich erfolgreich registriert.
        </p>
      </div>
    );
}
