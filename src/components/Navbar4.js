"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

export default function Navbar4() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    {
      label: "Home",
      path: "/"
    },
    {
      label: "About",
      path: "/about"
    },
    {
      label: "Ministries",
      path: "/ministries"
    },
    {
      label: "Resources",
      path: "/resources"
    },
    {
      label: "Contact",
      path: "/contact"
    }
  ]

  return (
    <>
      {/* Navbar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? "#111111" : "transparent",
          transition: "all 0.5s ease",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          zIndex: 2000
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1
          }}
        >
          {/* Logo */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              letterSpacing: 2
            }}
          >
            CHURCH
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex"
              },
              alignItems: "center",
              gap: 2
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                style={{
                  textDecoration: "none"
                }}
              >
                <Button
                  sx={{
                    color: "white",
                    position: "relative",
                    fontWeight: 500,

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: 5,
                      width: 0,
                      height: "2px",
                      backgroundColor: "#c49b63",
                      transition: "0.4s"
                    },

                    "&:hover::after": {
                      width: "100%"
                    }
                  }}
                >
                  {link.label}
                </Button>
              </Link>
            ))}

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#c49b63",
                borderRadius: "30px",
                px: 3,
                py: 1,
                textTransform: "none",
                fontWeight: "bold",

                "&:hover": {
                  backgroundColor: "#d6ad72",
                  transform: "translateY(-2px)"
                },

                transition: "all 0.4s ease"
              }}
            >
              Join Us
            </Button>
          </Box>

          {/* Mobile Toggle Button */}
          <IconButton
            onClick={() => setOpen(!open)}
            sx={{
              display: {
                xs: "flex",
                md: "none"
              },
              color: "white",
              width: 46,
              height: 46,
              position: "relative",
              zIndex: 3000
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: 28,
                height: 28
              }}
            >
              {/* Menu Icon */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition:
                    "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                  transform: open
                    ? "rotate(180deg) scale(0)"
                    : "rotate(0deg) scale(1)",
                  opacity: open ? 0 : 1
                }}
              >
                <MenuIcon />
              </Box>

              {/* Close Icon */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition:
                    "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                  transform: open
                    ? "rotate(0deg) scale(1)"
                    : "rotate(-180deg) scale(0)",
                  opacity: open ? 1 : 0
                }}
              >
                <CloseIcon />
              </Box>
            </Box>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        transitionDuration={{
          enter: 1000,
          exit: 700
        }}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          zIndex: 2500,

          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(4px)"
          },

          "& .MuiDrawer-paper": {
            width: 280,
            backgroundColor: "#111111",
            color: "white",
            boxSizing: "border-box",
            overflowX: "hidden",
            paddingTop: "90px"
          }
        }}
      >
        <Box
          sx={{
            px: 2
          }}
        >
          <List>
            {navLinks.map((link, index) => (
              <ListItem
                key={link.path}
                disablePadding
                sx={{
                  opacity: open ? 1 : 0,
                  transform: open
                    ? "translateY(0)"
                    : "translateY(30px)",

                  transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${
                    index * 0.12
                  }s`
                }}
              >
                <Link
                  href={link.path}
                  style={{
                    width: "100%",
                    textDecoration: "none",
                    color: "white"
                  }}
                  onClick={() => setOpen(false)}
                >
                  <ListItemButton
                    sx={{
                      borderRadius: "14px",
                      mb: 1,

                      "&:hover": {
                        backgroundColor: "#1f1f1f",
                        pl: 3
                      },

                      transition: "all 0.4s ease"
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontWeight: 500
                      }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>

          {/* CTA Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 4,
              backgroundColor: "#c49b63",
              borderRadius: "30px",
              py: 1.5,
              textTransform: "none",
              fontWeight: "bold",

              "&:hover": {
                backgroundColor: "#d6ad72",
                transform: "translateY(-2px)"
              },

              transition: "all 0.4s ease"
            }}
          >
            Join Us
          </Button>
        </Box>
      </Drawer>
    </>
  )
}
