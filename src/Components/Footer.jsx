import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#d5cdf4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "60px", height: "60px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "13px", xs: "5px" } }}
      mt="10px"
      textAlign="center"
      pb="40px"
      color="white"
    >
      Website created by Chimezie Nwagbo <br />
      @2022 all rights reserved
    </Typography>
  </Box>
);

export default Footer;
