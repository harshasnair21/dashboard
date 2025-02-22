import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Sidebar from "../../components/Sidebar";
import StatsCard from "../../components/StatsCard";
import Map from "../../components/Map";
import GlobalCustomers from "../../components/GlobalCustomer";
import {
  People,
  Visibility,
  ShoppingCart,
  MonetizationOn,
  CalendarMonth,
  Settings,
  Add,
} from "@mui/icons-material";

import axios from "axios";
const Dashboard = () => {
  const [stats, setStats] = useState({
    audience: 0,
    visitors: 0,
    conversion: 0,
    totalRate: 0,
  });
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);
  useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // fake last month data for comparison
  const lastMonthStats = {
    audience: 25,
    visitors: 1900,
    conversion: 200,
    totalRate: 18,
  };

  const calculateChange = (current, last) => {
    const change = ((current - last) / last) * 100;
    return change.toFixed(1);
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        const audienceCount = response.data.users.length;
        const visitors = response.data.users.reduce(
          (acc, user) => acc + user.age,
          0
        );
        const conversion = Math.floor(visitors * 0.25);
        const totalRate = (conversion / visitors) * 100;

        setStats({
          audience: audienceCount,
          visitors,
          conversion,
          totalRate: totalRate.toFixed(2),
        });
      })
      .catch((error) => console.error("Error fetching stats:", error));
  }, []);

  return (
    <Box
      sx={{ display: "flex", height: "100vh", justifyContent: "space-evenly" }}
    >
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Box
        sx={{
          flexGrow: 1,
          padding: 3,
          paddingTop: 3,
          backgroundColor: "#fff",
          height: "100vh",
          transition: "margin 0.3s",
          marginLeft: isSidebarOpen && !isMobile ? "20px" : "0px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
            gap: 3,
            width: "100%",
          }}
        >
          <StatsCard
            title="Audience"
            value={stats.audience}
            isPositive={stats.audience > lastMonthStats.audience}
            comparisonText={`${calculateChange(
              stats.audience,
              lastMonthStats.audience
            )}% vs last month`}
            icon={<People />}
          />
          <StatsCard
            title="Visitors"
            value={stats.visitors}
            isPositive={stats.visitors > lastMonthStats.visitors}
            comparisonText={`${calculateChange(
              stats.visitors,
              lastMonthStats.visitors
            )}% vs last month`}
            icon={<Visibility />}
          />
          <StatsCard
            title="Conversion"
            value={stats.conversion}
            isPositive={stats.conversion > lastMonthStats.conversion}
            comparisonText={`${calculateChange(
              stats.conversion,
              lastMonthStats.conversion
            )}% vs last month`}
            icon={<ShoppingCart />}
          />
          <StatsCard
            title="Total Rate"
            value={`${stats.totalRate}%`}
            isPositive={stats.totalRate > lastMonthStats.totalRate}
            comparisonText={`${calculateChange(
              stats.totalRate,
              lastMonthStats.totalRate
            )}% vs last month`}
            icon={<MonetizationOn />}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: 4,
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            border: "1px solid #ddd",
            p: { xs: 2, md: 3 },
            mt: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
              Target Demographics
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                alignItems: "center",
                justifyContent: { xs: "space-between", sm: "flex-end" },
              }}
            >
              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
                <IconButton sx={{ border: "1px solid #ddd" }}>
                  <CalendarMonth fontSize="small" />
                </IconButton>

                <IconButton sx={{ border: "1px solid #ddd" }}>
                  <Settings fontSize="small" />
                </IconButton>
              </Stack>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#5A4FCF",
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: "20px",
                  px: 1,
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": { backgroundColor: "#4a3db8" },
                }}
                startIcon={<Add />}
              >
                Add User
              </Button>
            </Box>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
            }}
          >
            {/* map component */}
            <Box
              sx={{
                flex: 2,
                pr: { md: 3 },
                borderRight: "1px solid #ddd",
                borderBottom: { xs: "1px solid #ddd", md: "none" },
                pb: { xs: 2, md: 0 },
              }}
            >
              <Map />
            </Box>

            <Divider orientation="vertical" flexItem sx={{ height: "100%" }} />

            {/* global*/}
            <Box sx={{ flex: 1, pr: { md: 3 } }}>
              <GlobalCustomers />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
