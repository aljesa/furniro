function Button({ to, text, isButton, type, className }) {
  if (isButton) {
    return (
      <button
        type={type || "button"}
        className={`bg-primary text-white font-poppins font-bold text-base uppercase px-16 py-6 mt-5 inline-block ${className}`}
        onClick={() => (window.location.href = to)}
      >
        {text}
      </button>
    );
  } else {
    return (
      <a
        href={to}
        className={`bg-primary text-white font-poppins font-bold text-base uppercase px-16 py-6 mt-5 inline-block ${className}`}
      >
        {text}
      </a>
    );
  }
}
export default Button;
