import React from "react";
import Box from "@mui/material/Box";

const style = {
  position: "fixed",
  top: { md: 400, xs: 300 },
  left: "50%",
  zIndex: -1,
};

const style2 = {
  zIndex: -1,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1490,
};

function Layout({ children }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box sx={style}>
        <img src="/bg-grad.svg" style={style2} alt="" />
      </Box>
      {children}
    </Box>
  );
}

export default Layout;
