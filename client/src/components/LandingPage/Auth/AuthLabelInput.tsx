type AuthLabelInputProps = {
  label: string;
  inputName: string;
  inputValue: string;
  onChange: (targetValue: string) => void;
};

export default function AuthLabelInput({
  label,
  inputName,
  inputValue,
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
        type="text"
        onChange={(e) => onChange(e.target.value)}
        value={inputValue}
      />
    </div>
  );
}
