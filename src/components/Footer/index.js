import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";

import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

import Logo from "./Logo";

function Footer() {
  const [menu, setMenu] = React.useState({
    gitMenu: false,
    twitterMenu: false,
    facebookMenu: false,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setMenu((prev) => ({ ...prev, [menu]: true }));
  };

  const handleClose = (menu) => {
    setAnchorEl(null);
    setMenu((prev) => ({ ...prev, [menu]: false }));
  };

  return (
    <footer
      style={{
        backgroundColor: "rgb(0, 0, 0)",
        width: "100%",
        marginTop: 80,
        marginBottom: 0,
      }}
    >
      <Container>
        <Stack
          direction="row"
          spacing="auto"
          py={4}
          px={2}
          alignItems="center"
          justifyContent="center"
        >
          <Logo />
        </Stack>
        <Divider variant="middle" />
        <Stack
          direction={{ xs: "colmun", sm: "row" }}
          alignItems="center"
          spacing="auto"
          py={3}
          px={2}
        >
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Typography>2023©</Typography>
            <Link href="/">خارق</Link>
            <Typography> جميع الحقوق محفوظة.</Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            py={{ xs: 1, sm: 0 }}
          >
            <Tooltip title="Github Accounts">
              <IconButton
                color="inherit"
                onClick={(event) => handleClick(event, "gitMenu")}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Twitter Accounts">
              <IconButton
                color="inherit"
                onClick={(event) => handleClick(event, "twitterMenu")}
              >
                <TwitterIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Facebook Accounts">
              <IconButton
                color="inherit"
                onClick={(event) => handleClick(event, "facebookMenu")}
              >
                <FacebookIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Container>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={menu.gitMenu}
        onClick={() => handleClose("gitMenu")}
        onClose={() => handleClose("gitMenu")}
        transformOrigin={{ horizontal: "center", vertical: "bottom" }}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <MenuItem
          dir="ltr"
          component="a"
          href="https://github.com/mohamedalsayyd"
          target="_blank"
        >
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="/medo.jpg"
            alt="Mohamed Alsayyed"
          />
          <Typography pr={2}>Mohamed Alsayyed</Typography>
        </MenuItem>
        <MenuItem
          dir="ltr"
          component="a"
          href="https://github.com/NOSTVA"
          target="_blank"
        >
          <Avatar sx={{ width: 30, height: 30 }} alt="Mohamed Saeed" />
          <Typography pr={2}>Mohamed Saeed</Typography>
        </MenuItem>
      </Menu>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={menu.twitterMenu}
        onClick={() => handleClose("twitterMenu")}
        onClose={() => handleClose("twitterMenu")}
        transformOrigin={{ horizontal: "center", vertical: "bottom" }}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <MenuItem
          dir="ltr"
          component="a"
          href="https://twitter.com/MedoAlsayyd4"
          target="_blank"
        >
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="/medo.jpg"
            alt="Mohamed Alsayyed"
          />
          <Typography pr={2}>Mohamed Alsayyed</Typography>
        </MenuItem>
        <MenuItem
          dir="ltr"
          component="a"
          href="https://twitter.com/Arisabeh"
          target="_blank"
        >
          <Avatar sx={{ width: 30, height: 30 }} alt="Mohamed Saeed" />
          <Typography pr={2}>Mohamed Saeed</Typography>
        </MenuItem>
      </Menu>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={menu.facebookMenu}
        onClick={() => handleClose("facebookMenu")}
        onClose={() => handleClose("facebookMenu")}
        transformOrigin={{ horizontal: "center", vertical: "bottom" }}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <MenuItem
          dir="ltr"
          component="a"
          href="https://web.facebook.com/medo.alsayyd.1?_rdc=1&_rdr"
          target="_blank"
        >
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="/medo.jpg"
            alt="Mohamed Alsayyed"
          />
          <Typography pr={2}>Mohamed Alsayyed</Typography>
        </MenuItem>
      </Menu>
    </footer>
  );
}

export default Footer;
