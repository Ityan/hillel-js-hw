import { useState } from 'react';
import PropTypes from "prop-types";

import Alert from "./Alert";
import Button from "./Button";

const AlertPopUp = ({ color, children }) => {
  const [isOpenedAlert, setOpenedAlert] = useState(false);
  const handleOpen = () => setOpenedAlert(true);
  const handleClose = () => setOpenedAlert(false);

  return (
    <>
      {!isOpenedAlert && <Button color="primary" onClick={handleOpen}>Open alert</Button>}
      {isOpenedAlert && <Alert color={color} onClose={handleClose}>{children}</Alert>}
    </>
  )
};

AlertPopUp.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired
};

export default AlertPopUp;