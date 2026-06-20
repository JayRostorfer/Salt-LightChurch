"use client";

import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import {
  Box,
  Stack,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";

import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function ContactForm5() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post("/api/contact", form);

      await Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Your message has been sent successfully.",
        confirmButtonText: "OK",
        background: "#0f172a",
        color: "#fff",
        confirmButtonColor: "#2563eb",
        scrollbarPadding: false,
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          err?.response?.data?.message ||
          err.message ||
          "Something went wrong.",
        confirmButtonText: "Close",
        background: "#0f172a",
        color: "#fff",
        confirmButtonColor: "#dc2626",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputSx = {
    "& .MuiInputBase-root": {
      borderRadius: "14px",
      color: "white",
      backgroundColor: "rgba(255,255,255,0.03)",
      transition: "0.3s",
    },

    "& label": {
      color: "rgba(255,255,255,0.55)",
    },

    "& label.Mui-focused": {
      color: "#93c5fd",
    },

    "& label.Mui-error": {
      color: "#fca5a5",
    },

    "& .MuiFormHelperText-root": {
      fontSize: "12px",
      color: "rgba(255,255,255,0.5)",
    },

    "& .MuiOutlinedInput-root.Mui-error fieldset": {
      borderColor: "#fca5a5",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(255,255,255,0.15)",
      },

      "&:hover fieldset": {
        borderColor: "rgba(255,255,255,0.35)",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#93c5fd",
        borderWidth: "2px",
      },
    },

    "& input::placeholder": {
      color: "rgba(255,255,255,0.45)",
      opacity: 1,
    },

    "& textarea::placeholder": {
      color: "rgba(255,255,255,0.45)",
      opacity: 1,
    },
  };

  const textFieldProps = {
    fullWidth: true,
    required: true,
    variant: "outlined",
    sx: inputSx,
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        py: 6,
        background:
          "linear-gradient(180deg, #020617 0%, #0f172a 50%, #111827 100%)",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 620,
          p: { xs: 3, md: 5 },
          borderRadius: "28px",
          background: "rgba(15,23,42,0.75)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          mb={2}
          sx={{
            color: "white",
          }}
        >
          Contact Us
        </Typography>

        <Typography
          variant="body1"
          mb={4}
          sx={{
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.8,
          }}
        >
          Send us a message and we will get back to you soon.
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Name"
              name="name"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              {...textFieldProps}
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              placeholder="Your email address"
              value={form.email}
              onChange={handleChange}
              {...textFieldProps}
            />

            <TextField
              label="Message"
              name="message"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              multiline
              rows={5}
              {...textFieldProps}
            />

            <LoadingButton
              type="submit"
              variant="contained"
              loading={loading}
              loadingPosition="center"
              loadingIndicator={
                <MoreHorizIcon
                  sx={{
                    fontSize: 32,
                    animation: "pulse 1s infinite ease-in-out",
                    "@keyframes pulse": {
                      "0%": {
                        opacity: 0.3,
                      },
                      "50%": {
                        opacity: 1,
                      },
                      "100%": {
                        opacity: 0.3,
                      },
                    },
                  }}
                />
              }
              endIcon={<SendIcon />}
              sx={{
                mt: 1,
                py: 1.6,
                borderRadius: "14px",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 700,

                background: "#c49b63",

                boxShadow: "0 10px 30px rgba(196,155,99,0.35)",

                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-2px)",
                },
              }}
            >
              Send Message
            </LoadingButton>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
