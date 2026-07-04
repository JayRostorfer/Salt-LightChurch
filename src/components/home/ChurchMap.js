"use client";

import {
  Box,
  Button,
  Typography
} from "@mui/material";

import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { renderToStaticMarkup } from "react-dom/server";
import PlaceIcon from "@mui/icons-material/Place";


const position = [-18.897866, 47.511559];


const placeIcon = L.divIcon({
  html: renderToStaticMarkup(
    <PlaceIcon
      style={{
        color: "darkblue", 
        fontSize: 30,
      }}
    />
  ),
  className: "",
  iconSize: [35, 35],
  iconAnchor: [22, 45],
});


export default function ChurchMap() {
  return (
   <Box
      component="section" 
      sx={{
        height: "800px",
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        px: 2,
        py: 2, 
      }}
    >

    <Typography
    variant="h4"
    fontWeight="bold"
    textAlign="center"
    >
    Find us easily
    </Typography>
 
    <MapContainer
      center={position}
      zoom={13}
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "15px",
        boxShadow: "0 15px 18px rgba(255,255,255,0.1)",
      }}
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        position={position}
        icon={placeIcon}
      >
        <Tooltip permanent direction="bottom">
          SALT & LIGHT CHURCH
        </Tooltip>
      </Marker>

    </MapContainer>

    <Button
    variant="contained"
    size="large"
    href="https://maps.app.goo.gl/JehfbHnFwhW4BWs98"
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      borderRadius: "999px",
      px: 4,
      py: 1.5,
      textTransform: "none",
    }}
  >
    Open in Google Maps
  </Button>
          
        </Box>
  );
}
