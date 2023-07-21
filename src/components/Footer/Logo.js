import React from "react";
import Box from "@mui/material/Box";

function Logo() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <img
        className="responsive-logo"
        src="/logo-solid.svg"
        alt="OHVR"
        style={{ height: 40 }}
      />
    </Box>
  );
}

export default Logo;
