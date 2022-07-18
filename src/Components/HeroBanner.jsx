import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.jpg";

const HeroBanner = () => (
  <Box
    id="hero-banner"
    sx={{ mt: { lg: "0", xs: "70px" }, ml: { sm: "0px" } }}
    position="relative"
    px="20px"
  >
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Stack>
        <Typography color="#846ae9" fontWeight="600" fontSize="26px">
          Fit For Everyone
        </Typography>
        <Typography
          color="#444C64"
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
          mb="23px"
          mt="30px"
        >
          Find The Perfect <br />
          Workout for you
        </Typography>
        <Typography color="#444C64" fontSize="22px" lineHeight="35px">
          Check out the most effective exercises personalized to you
        </Typography>
        <a
          href="#exercises"
          style={{
            marginTop: "45px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "#846ae9",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "white",
            borderRadius: "4px",
            fontFamily: "Calibri",
          }}
        >
          Explore Exercises
        </a>
      </Stack>

      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </Stack>
    {/* <Typography
      fontWeight={600}
      color="#846ae9"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography> */}
  </Box>
);

export default HeroBanner;
