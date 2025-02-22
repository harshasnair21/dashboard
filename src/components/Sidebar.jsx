import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Avatar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  Dashboard,
  BarChart,
  People,
  Settings,
  ChevronLeft,
  Menu,
} from "@mui/icons-material";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {/* hamburger*/}
      {isMobile && !isSidebarOpen && (
        <IconButton
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            zIndex: 1500,
          }}
          onClick={toggleSidebar}
        >
          <Menu />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isSidebarOpen}
        onClose={toggleSidebar}
        sx={{
          width: isSidebarOpen ? 240 : 60,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isSidebarOpen ? 240 : 60,
            transition: "width 0.3s",
            overflowX: "hidden",
          },
        }}
      >
        {/* sidebar*/}
        <Box
          sx={{
            display: "flex",
            justifyContent: isSidebarOpen ? "space-between" : "center",
            p: 1,
            alignItems: "center",
          }}
        >
          {isSidebarOpen && <Typography variant="h6">Dashboard</Typography>}
          <IconButton onClick={toggleSidebar}>
            {isSidebarOpen ? <ChevronLeft /> : <Menu />}
          </IconButton>
        </Box>

        <List>
          {[
            { text: "Dashboard", icon: <Dashboard /> },
            { text: "Analytics", icon: <BarChart /> },
            { text: "Users", icon: <People /> },
            { text: "Settings", icon: <Settings /> },
          ].map((item, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              {isSidebarOpen && <ListItemText primary={item.text} />}
            </ListItemButton>
          ))}
        </List>

        {/* profile */}
        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Avatar
            sx={{ mx: "auto", width: 40, height: 40 }}
            src="https://i.pravatar.cc/300"
          />
          {isSidebarOpen && <Typography variant="body2">Harsha</Typography>}
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
