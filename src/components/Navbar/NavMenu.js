import React from "react";
import Menu from "@mui/material/Menu";

function NavMenu(props) {
  return (
    <Menu
      {...props}
      id="menu"
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      PaperProps={{
        style: {
          width: 200,
          background: "rgb(0,0,0)",
        },
      }}
    >
      {props.children}
    </Menu>
  );
}

export default NavMenu;
