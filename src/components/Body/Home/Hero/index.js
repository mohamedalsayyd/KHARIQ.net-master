import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Logo from "./Logo";

function Hero() {
  return (
    <Container maxWidth="lg" sx={{ pt: { md: 16, xs: 6 } }}>
      <Logo />
      <Typography variant="h6" align="center" sx={{ mb: 4 }} paragraph>
        اكتشف أفضل أدوات الذكاء الاصطناعي
      </Typography>
    </Container>
  );
}

export default Hero;
