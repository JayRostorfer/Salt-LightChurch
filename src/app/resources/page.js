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
    title: "Strong Marriage - Part 1",
    description: "Strong Marriage - Part 1",
    thumbnail: "/images/Jay&Carey.jpg",
    video: "/videos/salt.mp4",
  },
  {
    id: 2,
    title: "Strong Marriage - Part 2",
    description: "Strong Marriage - Part 2",
    thumbnail: "/images/Jay&Carey.jpg",
    video: "/videos/salt.mp4",
  },
  {
    id: 3,
    title: "Strong Marriage - Part 3",
    description: "Strong Marriage - Part 4",
    thumbnail: "/images/Jay&Carey.jpg",
    video: "/videos/salt.mp4",
  },
  {
    id: 4,
    title: "Strong Marriage - Part 4",
    description: "Veillée de prière.",
    thumbnail: "/images/Jay&Carey.jpg",
    video: "/videos/salt.mp4",
  },
]

export default function VideoResources() {
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
      <Container sx={{ 
          py: { xs: 8, md: 12 },
         
        }}>
        <Box
  textAlign="center"
  sx={{
    maxWidth: 850,
    mx: "auto",
    mt: 10,
    mb: 10,
     
  }}
>
  <Typography
    variant="h3"
    fontWeight="bold"
    gutterBottom
  >
    Building Stronger Marriages Through God's Word
  </Typography>

  <Typography
    variant="body1"
    sx={{
      color: "whitesmoke",
      fontSize: "1.1rem",
      lineHeight: 1.8,
    }}
  >
    Explore our latest marriage teachings and discover practical, Bible-based guidance to help couples grow closer, strengthen their relationship, and build a lasting marriage centered on Christ.
  </Typography>
</Box>

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
                      Watch
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
                      Download
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
