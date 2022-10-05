import PropTypes from "prop-types";

function Title({ name, type }) {
  return (
    <h2 style={{ fontWeight: type }} >{name}</h2>
  );
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["bold", "normal"]).isRequired
};

export default Title;