import React from "react";
import { Typography, Box, Stack } from "@mui/material";
// import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  //   if (!exerciseVideos.length) return <Loader />;

  return (
    <Box
      id="related-videos"
      sx={{ marginTop: { lg: "3px", xs: "20px" } }}
      p="20px"
    >
      <Typography
        sx={{ fontSize: { lg: "34px", xs: "15px" } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#846ae9", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ borderTopLeftRadius: "20px" }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography
                sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                fontWeight={600}
                color="#000"
              >
                {item.video.title.slice(0, 36)}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
