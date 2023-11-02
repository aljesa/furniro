function Heading({ type, text, className }) {
  const headingClasses = `${className}`;

  // Use the type prop to determine the heading level
  switch (type) {
    case "h1":
      return (
        <h1 className={`font-bold text-5xl mb-5 ${headingClasses}`}>{text}</h1>
      );
    case "h2":
      return (
        <h2 className={`font-bold text-3xl mb-5 ${headingClasses}`}>{text}</h2>
      );
    case "h3":
      return (
        <h3 className={`text-2xl font-semibold ${headingClasses}`}>{text}</h3>
      );
    case "h4":
      return (
        <h4
          className={`text-base font-poppins font-semibold tracking-wide mb-5 ${headingClasses}`}
        >
          {text}
        </h4>
      );
    case "h5":
      return <h5 className={`${headingClasses}`}>{text}</h5>;
    case "h6":
      return <h6 className={headingClasses}>{text}</h6>;
    default:
      return <div className={headingClasses}>{text}</div>;
  }
}

export default Heading;
