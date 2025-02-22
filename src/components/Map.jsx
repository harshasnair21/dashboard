import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { Add, Remove } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const locations = [
  { name: "United States", coords: [-100, 40] },
  { name: "Brazil", coords: [-51.9, -10] },
  { name: "Japan", coords: [138.2529, 36.2048] },
  { name: "Canada", coords: [-106, 56] },
  { name: "France", coords: [2.2137, 46.6034] },
];

const Map = () => {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  const [visibleMarkers, setVisibleMarkers] = useState({});
  const toggleMarker = (name) => {
    setVisibleMarkers((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleZoomChange = (delta) => {
    setPosition((prev) => ({
      ...prev,
      zoom: Math.max(1, Math.min(prev.zoom + delta, 5)), // Keep zoom between 1 and 5
    }));
  };

  const handleMove = (event) => {
    if (event.transform) {
      setPosition({ coordinates: event.transform.x, zoom: event.transform.k });
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <ComposableMap
        projectionConfig={{ scale: 120 }}
        width={800}
        height={400}
        style={{ width: "100%", height: "auto" }}
      >
        <ZoomableGroup
          center={position.coordinates}
          zoom={position.zoom}
          onMoveEnd={handleMove}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EAEAEC"
                  stroke="#D6D6DA"
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#B4B4B4", outline: "none" },
                    pressed: { fill: "#7B61FF", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
          {locations.map(({ name, coords }) => (
            <Marker
              key={name}
              coordinates={coords}
              onClick={() => toggleMarker(name)}
            >
              <circle
                r={6}
                fill="#7B61FF"
                stroke="white"
                strokeWidth={2}
                style={{ cursor: "pointer" }}
              />
              {visibleMarkers[name] && (
                <text
                  textAnchor="middle"
                  y={-10}
                  fontSize={10}
                  fill="#333"
                  style={{ fontWeight: "bold" }}
                >
                  {name}
                </text>
              )}
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* zoom controls */}
      <Box display="flex" flexDirection="column" gap={1}>
        <IconButton
          onClick={() => handleZoomChange(0.5)}
          sx={{
            bgcolor: "#fff",
            color: "#000",
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid #000",
            "&:hover": { bgcolor: "#115293" },
          }}
        >
          <Add />
        </IconButton>
        <IconButton
          onClick={() => handleZoomChange(-0.5)}
          sx={{
            bgcolor: "#fff",
            color: "#000",
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid #000",
            "&:hover": { bgcolor: "#115293" },
          }}
        >
          <Remove />
        </IconButton>

        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            left: 10,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: { xs: 1, sm: 2 },
            p: { xs: 0.5, sm: 1 },
            borderRadius: "20px",
            border: "1px solid #E0E0E0",
            backgroundColor: "#F9F9F9",
            width: { xs: "90%", sm: "fit-content" },
            justifyContent: { xs: "center", sm: "flex-start" },
          }}
        >
          {["Europe", "Asia", "Africa", "America"].map((region, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                flex: "1 1 auto",
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#5A4FCF",
                }}
              />
              <Typography
                sx={{ fontSize: 14, fontWeight: "bold", color: "#333" }}
              >
                {region}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Map;
