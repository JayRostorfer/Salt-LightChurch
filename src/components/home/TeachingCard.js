"use client"

import React from "react"
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material"

import DownloadIcon from "@mui/icons-material/Download"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"

export default function TeachingCard({
  title,
  speaker,
  description,
  audio,
  image,
}) {
  return (
    <Card
      sx={{
        borderRadius: "20px",
        overflow: "hidden",
        backgroundColor: "#111",
        color: "white",
      }}
    >
      <CardMedia
        component="img"
        height="220"
        image={image}
        alt={title}
      />

      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ opacity: 0.7, mt: 1 }}
        >
          {speaker}
        </Typography>

        <Typography
          variant="body1"
          sx={{ mt: 2 }}
        >
          {description}
        </Typography>

        <audio
          controls
          style={{
            width: "100%",
            marginTop: "20px",
          }}
        >
          <source src={audio} type="audio/mp3" />
        </audio>

        <Stack
          direction="row"
          spacing={2}
          sx={{ mt: 3 }}
        >
          <Button
            variant="contained"
            startIcon={<PlayArrowIcon />}
            href={audio}
            target="_blank"
          >
            Écouter
          </Button>

          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            href={audio}
            download
          >
            Télécharger
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
