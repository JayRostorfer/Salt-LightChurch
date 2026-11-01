"use client";

import { useLayoutEffect, useRef } from "react";
import { Poppins } from "next/font/google";

import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
} from "@mui/material";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Founder() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const questionRef = useRef(null);

  useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    const words = headingRef.current.querySelectorAll(".heading-word");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
    });

    
    tl.fromTo(
      words,
      {
        y: 50,
        opacity: 0,
        filter: "blur(8px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
      }
    );

  
    tl.fromTo(
      questionRef.current,
      {
        y: -35,
        rotation: -25,
        scale: 0.5,
        opacity: 0,
      },
      {
        y: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.35)",
      }
    );

    // Petite oscillation finale
    tl.to(questionRef.current, {
      rotation: 15,
      duration: 0.2,
      ease: "power1.inOut",
    });

    tl.to(questionRef.current, {
      rotation: -10,
      duration: 0.25,
      ease: "power1.inOut",
    });

    tl.to(questionRef.current, {
      rotation: 5,
      duration: 0.2,
      ease: "power1.inOut",
    });

    tl.to(questionRef.current, {
      rotation: 0,
      duration: 0.25,
      ease: "power1.out",
    });

  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(180deg, #020617 0%, #0f172a 50%, #111827 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">

          {/* Foundation Overview */}
          <Grid size={{ xs: 12, md: 6 }}>

            {/* Animated Heading */}
            <Typography
              ref={headingRef}
              variant="h3"
              aria-label="Who we are?"
              sx={{
                color: "whitesmoke",
                fontWeight: 700,
                mb: 3,
                mt: 1,
                overflow: "hidden",
              }}
            >
              <Box
                component="span"
                className="heading-word"
                sx={{
                  display: "inline-block",
                }}
              >
                Who
              </Box>

              {" "}

              <Box
                component="span"
                className="heading-word"
                sx={{
                  display: "inline-block",
                }}
              >
                we are
              </Box>

              <Box
                component="span"
                ref={questionRef}
                sx={{
                  display: "inline-block",
                  color: "#c49b63",
                  ml: 0.5,
                  transformOrigin: "center bottom",
                }}
              >
                ?
              </Box>
            </Typography>

            <Typography
              variant="overline"
              sx={{
                color: "#c49b63",
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              OUR FOUNDATION
            </Typography>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                color: "whitesmoke",
                lineHeight: 1.9,
                mb: 2,
              }}
            >
              We are a church family and part of the Assemblies of God.
              We are passionate about worship, guided by the Holy Spirit,
              and committed to living out the truth of God's Word every
              day. Our desire is to create a place where people feel
              loved, grow in their faith, discover their God-given
              purpose, and make a positive impact in the world around
              them.
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
                    color: "#c49b63",
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
                  variant="body1"
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    color: "whitesmoke",
                    lineHeight: 1.8,
                  }}
                >
                  For more than 20 years, they have faithfully served
                  as missionaries, sharing the love of Christ and
                  helping people grow in their faith. Following God's
                  call, they founded this church alongside the
                  Assemblies of God with a desire to see lives
                  transformed by the Gospel and people connected to
                  a loving church family. Their passion for ministry,
                  discipleship, and serving others continues to shape
                  the heart and mission of our church today.
                </Typography>
              </Box>
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
