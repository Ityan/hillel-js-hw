import ProtoTypes from "prop-types";

function Button({ name, onClick }) {
  return (
    <button onClick={onClick}>{name}</button>
  );
};

Button.propTypes = {
  name: ProtoTypes.string.isRequired,
  onClick: ProtoTypes.func.isRequired
};

export default Button;