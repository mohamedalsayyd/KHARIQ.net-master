import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

import HoverVideoPlayer from "react-hover-video-player";

const ToolCard = styled(Card)({
  "& ": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
});

function AIToolCard({ img, title, tags, desc, vid }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <ToolCard
        variant="outlined"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 5,
        }}
      >
        <CardActionArea
          component={Link}
          to={`/tool/${title}`}
          sx={{ height: "100%" }}
        >
          <Box
            style={{
              width: "100%",
              display: "block",
              padding: "16px",
              paddingBottom: "0px",
            }}
          >
            <HoverVideoPlayer
              videoSrc={vid || ""}
              sizingMode="overlay"
              restartOnPaused={true}
              muted={false}
              volume={0.4}
              loop={false}
              preload="none"
              unloadVideoOnPaused={true}
              loadingStateTimeout={300}
              playbackStartDelay={1000}
              style={{
                width: "100%",
                display: "block",
                borderRadius: "16px",
                overflow: "hidden",
              }}
              pausedOverlay={
                <CardMedia
                  sx={{
                    paddingTop: "56.25%",
                    position: "relative",
                  }}
                >
                  <img
                    loading="lazy"
                    src={img}
                    alt={title}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </CardMedia>
              }
              loadingOverlay={
                <Box
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.8)",
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <CircularProgress />
                </Box>
              }
            />
          </Box>

          <CardContent sx={{ mt: 0 }}>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              sx={{ fontWeight: "bold" }}
            >
              {title}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
              {tags.map((tag, index) => {
                return (
                  <Chip
                    key={index}
                    label={tag}
                    size="small"
                    style={{
                      background: "#0080ff",
                    }}
                  />
                );
              })}
            </Stack>
            <Typography variant="body1">{desc}</Typography>
          </CardContent>
        </CardActionArea>
      </ToolCard>
    </Grid>
  );
}

export default AIToolCard;
