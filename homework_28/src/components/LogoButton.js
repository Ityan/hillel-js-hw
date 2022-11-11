import IconButton from '@mui/material/IconButton';

import logo from '../assets/images/logo.png';

const LogoButton = () => {
  return (
    <IconButton>
      <img alt="logo" src={logo} />
    </IconButton>
  )
};

export default LogoButton;