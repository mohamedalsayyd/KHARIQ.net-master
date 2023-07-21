import React from "react";
import Box from "@mui/material/Box";

function Logo() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
      <img
        className="responsive-logo"
        src="/logo.svg"
        alt="OHVR"
        style={{ height: 60 }}
      />
    </Box>
  );
}

export default Logo;
