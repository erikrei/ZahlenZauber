import { AxiosError } from "axios";
import { MdError } from "react-icons/md";
import { ServerErrorMessage } from "../../../util/types/auth.types";
import { getAuthErrorMessage } from "../../../util/checkAuthInput";

type AuthErrorServerProps = {
  isError: boolean;
  error: Error | null;
};

export default function AuthErrorServer({
  isError,
  error,
}: AuthErrorServerProps) {
  const axiosError = error as AxiosError;
  const axiosResponse = axiosError && axiosError.response?.data as ServerErrorMessage | null;
  const errorMessage = axiosResponse && getAuthErrorMessage(axiosResponse.error);

  if (isError)
    return (
      <div className="auth-msg-container error">
        <MdError />
        <p className="auth-error-msg">{errorMessage}</p>
      </div>
    );
}
