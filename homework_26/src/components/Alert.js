import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as CloseIcon } from "../assets/icons/closeIcon.svg";

const getBackgroundColor = (color) => {
  switch (color) {
    case "warning":
      return "#FFD12F;";
    case "error":
      return "#EB5757;";
    default:
      return "#605DEC";
  };
};

const Wrapper = styled.div`
  width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledAlert = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${props => getBackgroundColor(props.color)};
`;

const Text = styled.p`
  width: 100%;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: ${props => props.color === "warning" ? "#1513A0" : "#F6F6FE"};
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  overflow: hidden;
  padding: 0px;
  margin-right: 32px;
`;

const Alert = ({ color, onClose, children }) => {
  return (
    <Wrapper>
      <StyledAlert color={color}>
        <Text color={color}>{children}</Text>
        <Button onClick={onClose}>
          <CloseIcon />
        </Button>
      </StyledAlert>
    </Wrapper>
  );
};

Alert.propTypes = {
  color: PropTypes.oneOf(["primary", "error", "warning"]).isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Alert;