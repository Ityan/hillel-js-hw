import { useContext } from "react";

import LoginFormContext from "../contexts/form/LoginFormContext";
import AuthContext from "../contexts/auth/AuthContext";

import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

import LogoButton from "./LogoButton";

const Header = () => {
  const { isLoggedIn, userInfo, logoutUser } = useContext(AuthContext);
  const { openLoginForm } = useContext(LoginFormContext);

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={isLoggedIn ? 7 : 8}>
          <LogoButton />
        </Grid>
        <Grid item xs={1}>
          <Link href='#'>Flights</Link>
        </Grid>
        <Grid item xs={1}>
          <Link href='#'>Hotels</Link>
        </Grid>
        <Grid item xs={1}>
          <Link href='#'>Packages</Link>
        </Grid>
        {!isLoggedIn &&
          <Grid item xs={1}>
            <Button variant="contained" size="medium" onClick={openLoginForm}>Log in</Button>
          </Grid>
        }
        {isLoggedIn &&
          <>
            <Grid item xs={1}>
              <Button variant="contained" size="medium" onClick={logoutUser}>Log out</Button>
            </Grid>
            <Grid item xs={1}>
              <Link href='#' variant="button">
                <Avatar src={`${userInfo.image}`} />
              </Link>
            </Grid>
          </>
        }
      </Grid>
    </>
  )
};

export default Header;