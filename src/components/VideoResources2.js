"use client"

import { useState } from "react"
import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Stack,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material"

import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import DownloadIcon from "@mui/icons-material/Download"
import CloseIcon from "@mui/icons-material/Close"

const videos = [
  {
    id: 1,
    title: "Youth Conference 2025",
    description: "Enseignement spécial pour les jeunes.",
    thumbnail: "/images/Jay&Carey.jpg",
    video: "/videos/salt.mp4",
  },
  {
    id: 2,
    title: "Sunday Service",
    description: "Culte complet du dimanche.",
    thumbnail: "/images/Jay&Carey.jpg",
    video: "/videos/salt.mp4",
  },
  {
    id: 3,
    title: "Bible Study",
    description: "Étude biblique approfondie.",
    thumbnail: "/images/Jay&Carey.jpg",
    video: "/videos/salt.mp4",
  },
  {
    id: 4,
    title: "Prayer Night",
    description: "Veillée de prière.",
    thumbnail: "/images/Jay&Carey.jpg",
    video: "/videos/salt.mp4",
  },
]

export default function VideoResources22() {
  const [open, setOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleOpen = (video) => {
    setSelectedVideo(video)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedVideo(null)
  }

  return (
    <>
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          textAlign="center"
          mb={5}
        >
          Video Resources
        </Typography>

        <Grid container spacing={4}>
          {videos.map((video) => (
            <Grid
              key={video.id}
              size={{
                xs: 12,
                md: 4,
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "20px",
                  overflow: "hidden",
                  backgroundColor: "#111",
                  color: "white",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={video.thumbnail}
                    alt={video.title}
                    sx={{
                      height: 220,
                      objectFit: "cover",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(5px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PlayArrowIcon sx={{ fontSize: 40 }} />
                  </Box>
                </Box>

                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {video.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.8,
                      mb: 3,
                    }}
                  >
                    {video.description}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={2}
                  >
                    <Button
                      variant="contained"
                      startIcon={<PlayArrowIcon />}
                      onClick={() => handleOpen(video)}
                      sx={{
                        flex: 1,
                      }}
                    >
                      Regarder
                    </Button>

                    <Button
                      component="a"
                      href={video.video}
                      download
                      variant="outlined"
                      startIcon={<DownloadIcon />}
                      sx={{
                        flex: 1,
                      }}
                    >
                      Télécharger
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="lg"
      >
        <DialogContent
          sx={{
            p: 0,
            position: "relative",
            backgroundColor: "#000",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 2,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedVideo && (
            <video
              controls
              autoPlay
              width="100%"
            >
              <source
                src={selectedVideo.video}
                type="video/mp4"
              />
            </video>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
