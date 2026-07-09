

const Button = ({ children,btnCss }) => {
  return (
    <button
      className={`px-6 py-3.75 rounded-full font-bold bg-primary text-white ${btnCss}`}
    >
      {children}
    </button>
  );
};

export default Button
