import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <Button
        sx={{
          ml: "21px",
          color: "#fff",
          background: "#a28ef6",
          fontSize: "12px",
          borderRadius: "20px",
          textTransform: "capitalize",
          height: "25px",
        }}
      >
        {exercise.bodyPart.slice(0, 18)}
      </Button>
      <Button
        sx={{
          ml: "21px",
          color: "#fff",
          background: "#74b8ed",
          fontSize: "12px",
          borderRadius: "20px",
          textTransform: "capitalize",
          height: "25px",
        }}
      >
        {exercise.target.slice(0, 18)}
      </Button>
    </Stack>
    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: "14px", xs: "20px" } }}
      mt="11px"
      pb="10px"
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
