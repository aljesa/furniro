function Input({ type, placeholder, value, onChange, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border-b rounded-md p-2 ${className}`}
    />
  );
}

export default Input;
