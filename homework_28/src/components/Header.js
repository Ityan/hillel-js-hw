import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../contexts/auth/AuthContext";

import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

import LogoButton from "./LogoButton";
import LoginForm from "./LoginForm";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const showLoginForm = () => setOpen(true);
  const hideLoginForm = () => setOpen(false);

  const { isLoggedIn, userInfo, logoutUser } = useContext(AuthContext);

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={isLoggedIn ? 7 : 8}>
          <NavLink to="/">
            <LogoButton />
          </NavLink>
        </Grid>
        <Grid item xs={1}>
          <NavLink to="/flights">
            <Link>Flights</Link>
          </NavLink>
        </Grid>
        <Grid item xs={1}>
          <NavLink to="/hotels">
            <Link>Hotels</Link>
          </NavLink>
        </Grid>
        <Grid item xs={1}>
          <NavLink to="/packages">
            <Link>Packages</Link>
          </NavLink>
        </Grid>
        {!isLoggedIn &&
          <Grid item xs={1}>
            <Button variant="contained" size="medium" onClick={showLoginForm}>Log in</Button>
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
        <LoginForm isOpen={isOpen} hideLoginForm={hideLoginForm} />
      </Grid>
    </>
  )
};

export default Header;