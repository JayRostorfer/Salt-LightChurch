"use client"

import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
} from "@mui/material"

export default function Founder() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #020617 0%, #0f172a 50%, #111827 100%)",   
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          
          {/* Foundation Overview */}
          <Grid size={{ xs: 12, md: 6 }}>
            

            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
                mt: 1,
              }}
            >
              Who we are? 
            </Typography>

             <Typography
              variant="overline"sx={{
    py: { xs: 8, md: 12 },
    bgcolor: "#0f172a",
  }}
              sx={{
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              OUR FOUNDATION
            </Typography>

            <Typography
              sx={{
                color: "whitesmoke",
                lineHeight: 1.9,
                mb: 2,
              }}
            >
              We are a church family and part of the Assemblies of God. We are passionate about worship, guided by the Holy Spirit, and committed to living out the truth of God's Word every day. Our desire is to create a place where people feel loved, grow in their faith, discover their God-given purpose, and make a positive impact in the world around them.
            </Typography>

           


            
          </Grid>

          {/* Founders */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
    overflow: "hidden",
    borderRadius: 4,
    bgcolor: "#1e293b",
    border: "1px solid rgba(255,255,255,0.08)",
  }}
            >
              <Box
                component="img"
                src="/images/Jay&Carey.jpg"
                alt="Church Founders"
                sx={{
                  width: "100%",
                  height: { xs: 300, md: 450 },
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <Box sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  Pastors Jay & Carey
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "whitesmoke",
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  Founding Pastors
                </Typography>

                <Typography
                  sx={{
                    color: "whitesmoke",
                    lineHeight: 1.8,
                  }}
                >
                  For more than 20 years, they have faithfully served as missionaries, sharing the love of Christ and helping people grow in their faith. Following God's call, they founded this church alongside the Assemblies of God with a desire to see lives transformed by the Gospel and people connected to a loving church family. Their passion for ministry, discipleship, and serving others continues to shape the heart and mission of our church today.
                </Typography>
              </Box>
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}
