import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Home from "./Pages/Home";
import ExerciseDetail from "./Pages/ExerciseDetail";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
