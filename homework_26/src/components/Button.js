import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButtonBase = styled.button`
  padding-right: 20px;
  padding-left: 20px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid transparent;

  font-family: 'Nunito Sans';
  font-size: ${props => props.size === "large" ? "18px" : "16px"};

  :disabled {
    border-color: #7c8db0;
    background: white;
    color: #7C8DB0;
  }
`;

const StyledPrimaryButton = styled(StyledButtonBase)`
  background: #605dec;
  color: #FAFAFA;

  :hover {
    background: #1513a0;
  }

  :disabled {
    background: rgba(203, 212, 230, 0.3);
  }
`;

const StyledSecondaryButton = styled(StyledButtonBase)`
  background: white;
  border-color: #605dec;
  color: #605dec;

  :hover {
    background: #e9e8fc;
  }

  :disabled {
    background: white;
  }
`;

const Button = ({ onClick, color, disabled, children, size }) => {
  const buttonProps = {
    disabled,
    onClick,
    children,
    size
  };

  if (color === "secondary") {
    return <StyledSecondaryButton {...buttonProps} />;
  }

  return <StyledPrimaryButton {...buttonProps} />;
};

Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  size: PropTypes.oneOf(["large", "medium"]),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  size: "medium",
  disabled: false
};

export default Button;
