import React from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material/';
import { Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';


const pages = ['Natal Chart Reading', 'Short Reading', 'Forecasting', 'Synastry', 'Career and Vocation', 'Contact'];

const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <img style={{ width: '14rem' }} src="./assets/Dancing Astrologer logo.png" alt="dancing astrologer logo" />
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="navbarItems"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, i) => (
                <Link key={i} href={`/${page}`}>
                  <MenuItem onClick={handleCloseNavMenu} >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Link href="/">
              <img style={{ display: "absolute", width: '14rem', marginBottom: "-12px" }} src="./assets/Dancing Astrologer logo.png" alt="dancing astrologer logo" />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="navbarItems">
              {pages.map((page, i) => (
                <div key={i}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    href={`/${page.toLowerCase().split(" ").join("")}`}
                    id="navbarItem"
                  >
                    {page}
                  </Button>
                </div>
              ))}
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar