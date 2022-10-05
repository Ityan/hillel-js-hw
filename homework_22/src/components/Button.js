import ProtoTypes from "prop-types";

function Button({ isOpened, onClick }) {
  return (
    <button onClick={onClick}>{isOpened ? "Hide title" : "Open title"}</button>
  );
};

Button.propTypes = {
  isOpened: ProtoTypes.bool.isRequired,
  onClick: ProtoTypes.func.isRequired
};

export default Button;