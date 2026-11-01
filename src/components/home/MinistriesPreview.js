"use client";

import { useLayoutEffect, useRef } from "react";

import { Box, Container, Grid, Typography } from "@mui/material";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ministries from "@/data/ministries";
import MinistryCard from "./MinistryCard";

export default function MinistriesPreview2() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const underlineRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Apparition du titre
      tl.fromTo(
        titleRef.current,
        {
          y: 45,
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
        }
      );

      // Dessin du soulignement
      tl.fromTo(
        underlineRef.current,
        {
          strokeDashoffset: 300,
        },
        {
          strokeDashoffset: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: 4,
        textAlign: "center",
        background: "linear-gradient(135deg, #173447, #9A7850)",
      }}
    >
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          pl: {
            xs: 2,
            md: 3,
          },
          pr: {
            xs: 0,
            md: 3,
          },
        }}
      >
        {/* Titre */}
        <Box
          sx={{
            position: "relative",
            width: "fit-content",
            mx: "auto",
            mb: 3,
            mt: 1,
          }}
        >
          <Typography
            ref={titleRef}
            variant="h3"
            sx={{
              marginBottom: "15px",
              color: "whitesmoke",
              fontWeight: 700,
              opacity: 0,
            }}
          >
            Our Groups
          </Typography>

          {/* Soulignement ondulé */}
          <Box
            component="svg"
            viewBox="0 0 300 20"
            preserveAspectRatio="none"
            sx={{
              position: "absolute",
              bottom: -25,
              left: "50%",
              transform: "translateX(-50%)",
              width: "85%",
              height: 30,
              overflow: "visible",
              pointerEvents: "none",
            }}
          >
            <path
              ref={underlineRef}
              d="M 3 10 C 45 2, 65 17, 105 9 S 165 3, 205 10 S 265 15, 297 6"
              fill="none"
              stroke="#c49b63"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="300"
              strokeDashoffset="300"
            />
          </Box>
        </Box>

        {/* Description */}
        <Typography
          textAlign="center"
          sx={{
            maxWidth: 700,
            mx: "auto",
            mt: 4,
            mb: 4,
            color: "whitesmoke",
          }}
        >
          Different generations, one family, growing together in Christ.
        </Typography>

        {/* MOBILE : CARTES HORIZONTALES SCROLLABLES */}
        <Box
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
            gap: 2,
            overflowX: "auto",
            overflowY: "hidden",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            px: 1,
            pb: 2,
          }}
        >
          {ministries.map((ministry) => (
            <Box
              key={ministry.slug}
              sx={{
                flex: "0 0 85%",
                minWidth: 0,
                scrollSnapAlign: "start",
              }}
            >
              <MinistryCard ministry={ministry} />
            </Box>
          ))}
        </Box>

        {/* DESKTOP LAYOUT */}
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Grid container spacing={4}>
            {ministries.slice(0, 3).map((ministry) => (
              <Grid
                key={ministry.slug}
                size={{ xs: 12, md: 4 }}
              >
                <MinistryCard ministry={ministry} />
              </Grid>
            ))}

            <Grid size={{ xs: 0, md: 2 }} />

            {ministries.slice(3).map((ministry) => (
              <Grid
                key={ministry.slug}
                size={{ xs: 12, md: 4 }}
              >
                <MinistryCard ministry={ministry} />
              </Grid>
            ))}

            <Grid size={{ xs: 0, md: 2 }} />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
