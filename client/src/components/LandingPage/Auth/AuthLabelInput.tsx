type AuthLabelInputProps = {
  label: string;
  inputName: string;
  inputValue: string;
  inputType: string;
  onChange: (targetValue: string) => void;
};

export default function AuthLabelInput({
  label,
  inputName,
  inputValue,
  inputType,
  onChange,
}: AuthLabelInputProps) {
  return (
    <div className="auth-input-container">
      <label htmlFor={inputName} className="auth-label">
        {label}
      </label>
      <input
        name={inputName}
        id={inputName}
        type={inputType}
        onChange={(e) => onChange(e.target.value)}
        value={inputValue}
        autoComplete="off"
      />
    </div>
  );
}
