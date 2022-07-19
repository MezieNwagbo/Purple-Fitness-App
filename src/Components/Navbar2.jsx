import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Stack
    backgroundColor="#fff"
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      // mt: { sm: "25px", xs: "20px" },
      py: "10px",
      justifyContent: "none",
      position: "sticky",
      top: 0,
      zIndex: 1,
      borderBottom: "2px soild black",
    }}
    px="40px"
  >
    <Link to="/" className="logo-container">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "48px", height: "48px", margin: "0px 20px" }}
      />
      <h3>Purple Fitness</h3>
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Calibri" //this can work but figure font out
      fontSize="24px"
      alignItems="center"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#3A1212",
        }}
      >
        Home
      </Link>
      <a
        href="#related-videos"
        style={{ textDecoration: "none", color: "#3A1212" }}
      >
        Videos
      </a>
      <a
        href="#similar-exercises"
        style={{ textDecoration: "none", color: "#3A1212" }}
      >
        Similar Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
