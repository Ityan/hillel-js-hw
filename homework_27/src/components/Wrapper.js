import PropTypes from "prop-types";

import Box from "@mui/material/Box";

function Wrapper({ children }) {
  return (
    <Box
      mt={2}
      component="div"
      sx={{
        width: "650px",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      {children}
    </Box>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node
};

export default Wrapper;