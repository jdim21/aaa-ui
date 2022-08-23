import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import aaaLogo from './aaaLogo.png'
import aaaLogoHidden from './aaaLogoHidden.png'
import { Popper } from '@mui/material';
// import { ThemeProvider } from '@mui/material';
// import theme from './AaaTheme';

const pages = ['HOME', 'VISION', 'ABOUT', 'FAQ'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleNavMenu = (event) => {
    let anchor = null;
    if (event.currentTarget.id == "HOME") {
      anchor = (event.target.ownerDocument || document).querySelector(
        "#home"
      );
    } else if (event.currentTarget.id == "VISION") {
      anchor = (event.target.ownerDocument || document).querySelector(
        "#vision"
      );
    } else if (event.currentTarget.id == "ABOUT") {
      anchor = (event.target.ownerDocument || document).querySelector(
        "#about"
      );
    } else if (event.currentTarget.id == "FAQ") {
      anchor = (event.target.ownerDocument || document).querySelector(
        "#faq"
      );
    } else if (event.currentTarget.id == "TRAITS") {
      alert("Coming soon!");
    }
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleTraitsPopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const popperId = open ? 'simple-popper' : undefined;

  return (
    // <ThemeProvider theme={theme}>
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <img style={{height: 48, width: 56, paddingRight: 8 }} src={aaaLogoHidden}></img>
          <div/>
          <Box sx={{ justifyContent: "flex-end", flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                id={page}
                key={page}
                onClick={handleNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight: 'bold', fontSize: 16, px: 2 }}
              >
                {page}
              </Button>
            ))}
            <Button 
              id="TRAITS"
              key="TRAITS"
              onClick={handleTraitsPopper}
              sx={{ my: 2, color: 'white', display: 'block', fontWeight: 'bold', fontSize: 16, px: 2 }}
            >
              TRAITS
            </Button>
            <Popper id={popperId} open={open} anchorEl={anchorEl} disablePortal>
            <Box sx=
              {{ 
                border: 1,
                p: 1,
                borderColor: 'black',
                color: '#00867d',
                bgcolor: '#82e9de',
                fontWeight: 'bold',
              }}
            >
              Coming soon!
            </Box>
            </Popper>
            <Button 
              id="MINT"
              key="MINT"
              sx={{ my: 2, color: 'white', display: 'block', fontWeight: 'bold', fontSize: 16, px: 2 }}
              disabled
            >
              MINT
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
    // </ThemeProvider>
  );
};
export default ResponsiveAppBar;
