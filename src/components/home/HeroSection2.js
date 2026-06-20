"use client";

import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";

/* Variants Framer Motion */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function HeroSection2() {
  return (
    <>
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
          color: "#fff",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <Stack spacing={4} textAlign="center">
              <Typography variant="h3" fontWeight="bold">
                Salt and Light
              </Typography>

              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                « You are the salt of the earth… You are the light of the world  » — Matthew 5:13-14
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#ffffff",
                    color: "#203a43",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                >
                  Join us
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "#ffffff",
                    color: "#ffffff",
                    fontWeight: "bold",
                    "&:hover": {
                      borderColor: "#e0e0e0",
                      color: "#e0e0e0",
                    },
                  }}
                >
                  Contact us
                </Button>
              </Stack>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      
      <Box
        sx={{
          py: 10,
          backgroundColor: "#121212",
          color: "#ffffff",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Stack spacing={3} textAlign="center">
              <Typography variant="h4" fontWeight="bold">
                Who we are ?
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "rgba(255,255,255,0.85)" }}
              >
                We are a welcoming Christian community, part of the Assemblies of God, embracing a vibrant Pentecostal and charismatic faith.
We value passionate worship, the guidance of the Holy Spirit, and the transforming power of God’s Word. 
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "rgba(255,255,255,0.75)" }}
              >
                We strive to create a supportive environment where everyone can grow in faith, discover their purpose, and make a meaningful impact in their community.
              </Typography>
            </Stack>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}


