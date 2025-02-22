import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  TextField,
  InputAdornment,
  useMediaQuery,
} from "@mui/material";
import { Settings, Add, Search, Close } from "@mui/icons-material";
const Navbar = ({ isSidebarOpen }) => {
  const [showSearch, setShowSearch] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  // const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <AppBar
      position="static"
      sx={{
        background: "#fff",
        boxShadow: 1,
        borderBottom: "2px solid #ddd",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          textAlign: isSidebarOpen ? "center" : "left",
          alignItems: "center",
          gap: 1,
        }}
      >
        {/* left side */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h2"
            sx={{
              color: "#333",
              fontWeight: "bold",
              fontSize: { xs: "1rem", sm: "1.25rem" },
              whiteSpace: "nowrap",
              mt: isMobile ? "22px" : "0px",
              pl: isMobile ? "55px" : "60px",
            }}
          >
            Demographics Report
          </Typography>
        </Box>
        {/* right side */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 2 },
            mb: isMobile ? "10px" : "0px",
            ml: isMobile ? "40px" : "0px",
          }}
        >
          {/* search icon */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {showSearch ? (
              <TextField
                autoFocus
                variant="outlined"
                placeholder="Search..."
                size="small"
                sx={{
                  width: { xs: "180px", sm: "250px" },
                  borderRadius: 4,
                  mr: 2,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: "#555" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <IconButton onClick={() => setShowSearch(false)}>
                      <Close sx={{ color: "#555" }} />
                    </IconButton>
                  ),
                }}
              />
            ) : (
              <IconButton onClick={() => setShowSearch(true)}>
                <Search sx={{ color: "#555" }} />
              </IconButton>
            )}
          </Box>

          <Button
            startIcon={<Settings />}
            variant="outlined"
            sx={{
              color: "#555",
              borderColor: "#ddd",
              borderRadius: "25px",
              textTransform: "none",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              minWidth: { xs: "100px", sm: "auto" },
              padding: { xs: "4px 8px", sm: "6px 16px" },
              "&:hover": { borderColor: "#bbb" },
            }}
          >
            Customize
          </Button>
          <Button
            startIcon={<Add />}
            variant="outlined"
            sx={{
              borderColor: "#ddd",
              borderRadius: "25px",
              color: "#555",
              mr: 2,
              textTransform: "none",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              minWidth: { xs: "100px", sm: "auto" },
              padding: { xs: "4px 8px", sm: "6px 16px" },
              "&:hover": { borderColor: "#bbb" },
            }}
          >
            Add New
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
