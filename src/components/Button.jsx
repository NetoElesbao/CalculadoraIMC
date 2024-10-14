import "./Button.css";

const Button = ({ id, text, action }) => {
  const handleAction = (event) => {
    action(event);
  };

  return (
    <button id={id} onClick={handleAction}>
      {text}
    </button>
  );
};

export default Button;
