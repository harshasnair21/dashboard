import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import React from "react";
import { TrendingUp, TrendingDown, MoreVert } from "@mui/icons-material";

const StatsCard = ({
  title,
  value,
  change,
  isPositive,
  comparisonText,
  icon,
}) => {
  return (
    <Card
      sx={{
        minWidth: 250,
        p: 0.5,
        borderRadius: 4,
        border: "0.5px solid #aaa",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography
            variant="subtitle1"
            color="textSecondary"
            fontWeight="bold"
          >
            {title}
          </Typography>

          <IconButton>
            <MoreVert />
          </IconButton>
        </Box>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 1 }}>
          {value}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 1,
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 1,
            }}
          >
            {isPositive ? (
              <TrendingUp color="success" sx={{ mr: 1 }} />
            ) : (
              <TrendingDown color="error" sx={{ mr: 1 }} />
            )}
            <Typography
              variant="body2"
              color={isPositive ? "success.main" : "error.main"}
            >
              {change}
              {comparisonText}
            </Typography>
          </Box>

          <Box sx={{ fontSize: "large", color: "primary.main" }}>{icon}</Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
