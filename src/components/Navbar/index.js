import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

import { Home, Favorite, Info, VolunteerActivism } from "./NavIcons";
import NavButton from "./NavButton";
import NavMenu from "./NavMenu";
import FavModal from "./FavModal";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        color="transparent"
        sx={{
          px: 0,
          py: 2,
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            mx: "auto",
            display: "flex",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: { xs: "none", md: "block" }, mx: "auto" }}
          >
            <NavButton
              size="large"
              color="inherit"
              startIcon={<Home />}
              component={Link}
              to={`/`}
            >
              الرئيسية
            </NavButton>
            <NavButton
              size="large"
              color="inherit"
              onClick={handleOpen}
              startIcon={<Favorite />}
            >
              المفضلة
            </NavButton>
            <NavButton
              size="large"
              color="inherit"
              component={Link}
              to={`https://mohamedalsayyd-3d.vercel.app/`}
              target="_blank"
              startIcon={<Info />}
            >
              من نحن؟
            </NavButton>
            <NavButton
              size="large"
              color="inherit"
              startIcon={<VolunteerActivism />}
              component={Link}
              to={`https://www.buymeacoffee.com/khariq`}
              target="_blank"
            >
              Buy Me A Coffee
            </NavButton>
          </Stack>
          <Box sx={{ display: { xs: "block", md: "none" }, mr: 0, ml: "auto" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleMenuClick}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <NavMenu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleMenuClose}
            >
              <MenuItem component={Link} to={`/`}>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText>الرئيسية</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleOpen}>
                <ListItemIcon>
                  <Favorite />
                </ListItemIcon>
                <ListItemText>المفضلة</ListItemText>
              </MenuItem>
              <MenuItem
                component={Link}
                to={`https://mohamedalsayyd-3d.vercel.app/`}
                target="_blank"
              >
                <ListItemIcon>
                  <Info />
                </ListItemIcon>
                <ListItemText>من نحن؟</ListItemText>
              </MenuItem>
              <MenuItem
                component={Link}
                to={`https://www.buymeacoffee.com/khariq`}
                target="_blank"
              >
                <ListItemIcon>
                  <VolunteerActivism />
                </ListItemIcon>
                <ListItemText>Buy Me A Coffee</ListItemText>
              </MenuItem>
            </NavMenu>
          </Box>
        </Toolbar>
      </AppBar>
      <FavModal open={open} handleClose={handleClose} />
      {/* <Box
        sx={{
          transformorigin: "center center",
          backgroundImage:
            "linear-gradient(to right top,#6c22bd,#8b25bb,#a52bb9,#bc34b7,#d040b5,#e645a5,#f55195,#ff6188,#ff796e,#ff965b,#f5b255,#e1cd60)",
          position: "absolute",
          left: "50%",
          borderRadius: "20px",
          transform:
            "skewY(-15deg) translate(-50%,-50%) scale(.7) translateZ(0)",
          pointerEvents: "none",
          width: "900px",
          height: "500px",
          filter: "blur(100px)",
          opacity: ".4",
          top: 0,
          transition: "filter .25s ease-in-out,opacity .25s ease-in-out",
        }}
      ></Box> */}
    </>
  );
}
