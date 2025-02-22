import React from "react";
import { Box, Typography, LinearProgress, Stack } from "@mui/material";
import { ArrowForward, Info } from "@mui/icons-material";

const countries = [
  { country: "United States", percentage: 90, flag: "🇺🇸" },
  { country: "Brazil", percentage: 75, flag: "🇧🇷" },
  { country: "Japan", percentage: 40, flag: "🇯🇵" },
  { country: "Canada", percentage: 30, flag: "🇨🇦" },
  { country: "France", percentage: 15, flag: "🇫🇷" },
];

const GlobalCustomers = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: 4,
        width: "100%",
        maxWidth: 400,
      }}
    >
      {/*title */}
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4" fontWeight="bold">
          98,2K
        </Typography>
        <Info sx={{ color: "#aaa" }} />
      </Stack>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Global customers worldwide
      </Typography>

      {/*progress bars */}
      {countries.map((country, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontSize={14}>{country.country}</Typography>
            <Typography fontSize={14} fontWeight="bold">
              {country.percentage}%
            </Typography>
          </Stack>
          <LinearProgress
            variant="determinate"
            value={country.percentage}
            sx={{
              height: 6,
              borderRadius: 3,
              backgroundColor: "#e0e0e0",
              "& .MuiLinearProgress-bar": { backgroundColor: "#5A4FCF" },
            }}
          />
        </Box>
      ))}
      {/* link*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
        }}
      >
        <Typography
          sx={{
            color: "#5A4FCF",
            fontSize: 14,
            fontWeight: "bold",
            cursor: "pointer",
            "&:hover": { textDecoration: "none" },
          }}
        >
          See All Demographics
        </Typography>
        <ArrowForward fontSize="small" sx={{ color: "#5A4FCF" }} />
      </Box>
    </Box>
  );
};

export default GlobalCustomers;
