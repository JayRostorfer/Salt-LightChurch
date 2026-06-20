"use client";

import { useState } from "react";
import axios from "axios";


import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

import Swal from "sweetalert2";
import SendIcon from "@mui/icons-material/Send";

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
      title: "Message sent!",
      text: "Your message has been sent successfully.",
      confirmButtonColor: "#2563eb",
      background: "#0f172a",
      color: "#fff",
      backdrop: `
    rgba(0,0,0,0.5)
    blur(12px)
  `,
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
      text: err.message,
      confirmButtonColor: "#dc2626",
      background: "#0f172a",
      color: "#fff",
    });

  } finally {
    setLoading(false);
  }
};

  /* =========================
     DRY MUI SX
  ========================== */

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
      id="get-in-touch" 
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

            <Button
  type="submit"
  variant="contained"
  disabled={loading}
  endIcon={
    loading ? (
      <CircularProgress
        size={18}
        color="inherit"
      />
    ) : (
      <SendIcon />
    )
  }
  sx={{
    mt: 1,
    py: 1.6,
    borderRadius: "14px",
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: 700,

    background:
      "linear-gradient(135deg, #2563eb, #3b82f6)",

    boxShadow:
      "0 10px 30px rgba(37,99,235,0.35)",

    transition: "0.3s",

    "&:hover": {
      transform: "translateY(-2px)",
      background:
        "linear-gradient(135deg, #1d4ed8, #2563eb)",
    },
  }}
>
  Send Message
</Button>
          </Stack>
        </Box>
      </Paper>
    </Box>

  );
}
