import { memo } from "react";
import PropTypes from "prop-types";

import { IconButton } from '@chakra-ui/react';

const Button = ({ icon, onClick, isDisabled }) => {
  return (
    <IconButton
      disabled={isDisabled}
      icon={icon}
      onClick={onClick}
    />
  )
}

Button.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.func
};

export default memo(Button);