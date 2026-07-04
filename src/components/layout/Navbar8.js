"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import {
  Button,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"




export default function Navbar4() {
  const [open, setOpen] = useState(false)

  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenuOpen = (event) => {
  setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
  setAnchorEl(null)
  }

  const menuopen = Boolean(anchorEl)

  // STAGGER CONTAINER
  const containerVariants = {
    hidden: {
      opacity: 0
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        staggerDirection: 1
      }
    }
  }

  // ITEMS ANIMATION
  const itemVariants = {
    hidden: {
      opacity: 0
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }
  
  
const navItemSx = {
    borderRadius: "18px",

    mb: 1,

    pl: 2,

    color: "white",

    textDecoration: "none",

    WebkitTapHighlightColor: "transparent",

    outline: "none",

    userSelect: "none",

    "&:focus": {
      backgroundColor: "transparent"
    },

    "&.Mui-focusVisible": {
      backgroundColor: "transparent"
    },

    "&:active": {
      backgroundColor: "#1f1f1f"
    },

    "&:hover": {
      backgroundColor: "#1f1f1f",
      pl: 4
    },

    transition: "all 0.4s ease"
  }

  const accordionLinkSx = {
    display: "block",

    color: "white",

    textDecoration: "none",

    py: 1.2,

    pl: 2,

    borderRadius: "14px",

    transition: "all 0.3s ease",

    "&:hover": {
      backgroundColor: "#1f1f1f",
      pl: 3
    }
  }

  return (
    <>
          {/* Desktop Menu */}
          <Box
            sx={{
              position: "fixed",
              top: 20,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1500,
              display: {
                xs:'none',
                md:'flex',
              },
              alignItems: "center",
            gap: 1,
            px: 2,
            py: 1,
            borderRadius: "50px",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
      }}>
     
              <Link
                href="/"
                style={{
                  textDecoration: "none"
                }}
              >
                <Button
                  sx={{
                    color: "white",
                    position: "relative",
                    fontWeight: 500,
                    "&:hover": {
                      transform: "scale(1.08)",
                      transition: "all 0.4s ease"
                    },
                    "&:hover::after": {
                      width: "100%"
                    }
                  }}
                >
                  Home
                </Button>
              </Link>
              
               <Link
                href="/about"
                style={{
                  textDecoration: "none"
                }}
              >
                <Button
                  sx={{
                    color: "white",
                    position: "relative",
                    fontWeight: 500,
                    "&:hover": {
                      transform: "scale(1.08)",
                      transition: "all 0.4s ease"
                    },
                    "&:hover::after": {
                      width: "100%"
                    }
                  }}
                >
                  About
                </Button>
              </Link> 
              
               <Button
  onClick={handleMenuOpen}
  sx={{
    color: "white",
    position: "relative",
    fontWeight: 500,
    "&:hover": {
      transform: "scale(1.08)",
      transition: "all 0.4s ease",
    },
  }}
>
  Ministries
</Button>

  <Menu
  anchorEl={anchorEl}
  open={menuopen}
  onClose={handleMenuClose}
  keepMounted
  disableScrollLock
  sx={{
    "& .MuiPopover-root": {
      zIndex: 2000,
    },
  }}
  slotProps={{
    root: {
      sx: {
        zIndex: 2000,
      },
    },
  paper: {
    elevation: 0,
    sx: {

      background:
        "linear-gradient(180deg, #0f172a 0%, #111827 100%)",

      color: "#fff",

      border: "1px solid rgba(255,255,255,0.08)",

      borderRadius: "18px",

      overflow: "hidden",

      boxShadow:
        "0 20px 50px rgba(0,0,0,0.6)",

      backdropFilter: "blur(20px)",

      "& .MuiMenuItem-root": {
        py: 1.5,
        px: 2.5,

        transition: "all 0.3s ease",

        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.08)",
          color: "#c49b63",
        },
      },
    },
  },

  }}
>
  <MenuItem
    component={Link}
    href="/ministries/aroma-women"
    onClick={handleMenuClose}
  >
    Aroma Women
  </MenuItem>

  <MenuItem
    component={Link}
    href="/ministries/young-adults"
    onClick={handleMenuClose}
  >
    Young Adults
  </MenuItem>

  <MenuItem
    component={Link}
    href="/ministries/kids"
    onClick={handleMenuClose}
  >
    Blast Kids
  </MenuItem>
</Menu>
              
                  <Link
                href="/resources" 
                style={{
                  textDecoration: "none"
                }}
              >
                <Button
                  sx={{
                    color: "white",
                    position: "relative",
                    fontWeight: 500,
                    "&:hover": {
                      transform: "scale(1.08)",
                      transition: "all 0.4s ease"
                    },
                    "&:hover::after": {
                      width: "100%"
                    }
                  }}
                >
                  Resources
                </Button>
              </Link>  

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
          position: "fixed",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          zIndex: 9999,
          display: {
              xs:'flex',
              md:'none',
          },
          color:'white',
          borderRadius: "50%",
          width:50,
          height:50,
          background: "rgba(255,255,255,0.1)",

          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",

          border: "1px solid rgba(255,255,255,0.15)",

          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        }}>
            
              {/* Menu Icon */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition:"all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
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
                  transition:"all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                  transform: open
                    ? "rotate(0deg) scale(1)"
                    : "rotate(-180deg) scale(0)",
                  opacity: open ? 1 : 0
                }}
              >
                <CloseIcon />
              </Box>
          </IconButton>
        
      {/* Drawer */}
     <Drawer
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        transitionDuration={{
          enter: 500,
          exit: 600
        }}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          zIndex: 2500,

          "& .MuiBackdrop-root": {
            backdropFilter: "blur(5px)"
          },

          "& .MuiDrawer-paper": {
            background: "linear-gradient(180deg, #020617 0%, #0f172a 50%, #111827 100%)",
            color: "white",
            boxSizing: "border-box",
            overflowX: "hidden",
            paddingTop: "90px",
            marginLeft: "50px",
            marginRight: "50px",
            paddingBottom: "50px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px"
          }
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={open ? "visible" : "hidden"}
        >
          <Box
            sx={{
              px: 2
            }}
          >
            <List>
              {/* HOME */}
              <motion.div variants={itemVariants}>
                <ListItem disablePadding>
                  <ListItemButton
                    component={Link}
                    href="/"
                    disableRipple
                    onClick={() => setOpen(false)}
                    sx={navItemSx}
                  >
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>
              </motion.div>

              {/* ABOUT */}
              <motion.div variants={itemVariants}>
                <ListItem disablePadding>
                  <ListItemButton
                    component={Link}
                    href="/about"
                    disableRipple
                    onClick={() => setOpen(false)}
                    sx={navItemSx}
                  >
                    <ListItemText primary="About" />
                  </ListItemButton>
                </ListItem>
              </motion.div>

              {/* MINISTRIES ACCORDION */}
              <motion.div variants={itemVariants}>
                <Accordion
                  disableGutters
                  elevation={0}
                  sx={{
                    backgroundColor: "transparent",
                    color: "white",

                    "&:before": {
                      display: "none"
                    }
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "white"
                        }}
                      />
                    }
                    sx={{
                      borderRadius: "18px",

                      px: 2,

                      "&:hover": {
                        backgroundColor: "#1f1f1f"
                      },

                      transition: "all 0.4s ease"
                    }}
                  >
                    <Typography>
                      Ministries
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      pt: 0.5
                    }}
                  >
                    {/* AROMA WOMEN */}
                    <Box
                      component={Link}
                      href="/ministries/aroma-women"
                      onClick={() => setOpen(false)}
                      sx={accordionLinkSx}
                    >
                      Aroma Women
                    </Box>

                    <Box
                      component={Link}
                      href="/ministries/influence-men"
                      onClick={() => setOpen(false)}
                      sx={accordionLinkSx}
                    >
                     Influence Men
                    </Box>

                    {/* YOUNG ADULTS */}
                    <Box
                      component={Link}
                      href="/ministries/young-adults"
                      onClick={() => setOpen(false)}
                      sx={accordionLinkSx}
                    >
                      Young Adults
                    </Box>

                    <Box
                      component={Link}
                      href="/ministries/rocksalt"
                      onClick={() => setOpen(false)}
                      sx={accordionLinkSx}
                    >
                      Rocksalt Youth
                    </Box>

                    {/* KIDS */}
                    <Box
                      component={Link}
                      href="/ministries/kids"
                      onClick={() => setOpen(false)}
                      sx={accordionLinkSx}
                    >
                      Kids
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </motion.div>

              {/* RESOURCES */}
              <motion.div variants={itemVariants}>
                <ListItem disablePadding>
                  <ListItemButton
                    component={Link}
                    href="/resources"
                    disableRipple
                    onClick={() => setOpen(false)}
                    sx={navItemSx}
                  >
                    <ListItemText primary="Resources" />
                  </ListItemButton>
                </ListItem>
              </motion.div>

              {/* CONTACT */}
              <motion.div variants={itemVariants}>
                <ListItem disablePadding>
                  <ListItemButton
                    component={Link}
                    href="/contact"
                    disableRipple
                    onClick={() => setOpen(false)}
                    sx={navItemSx}
                  >
                    <ListItemText primary="Contact" />
                  </ListItemButton>
                </ListItem>
              </motion.div>
            </List>

            {/* CTA BUTTON */}
            <motion.div variants={itemVariants}>
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
            </motion.div>
          </Box>
        </motion.div>
      </Drawer>
    </>
  )
}
