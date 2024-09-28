import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar"; // Add this import
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import LinkedListIntro from "./pages/LinkedListIntro";
import MusicPlaylist from "./pages/MusicPlaylist";
import OtherExamples from "./pages/OtherExamples";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const drawerWidth = 240;

function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: "flex" }}>
          <Header open={open} toggleDrawer={toggleDrawer} />
          <Sidebar open={open} toggleDrawer={toggleDrawer} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
              transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
              marginLeft: `-${drawerWidth}px`,
              ...(open && {
                transition: theme.transitions.create("margin", {
                  easing: theme.transitions.easing.easeOut,
                  duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
              }),
            }}
          >
            <Toolbar /> {/* This line is now properly defined */}
            <Box sx={{ p: 3 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/intro" element={<LinkedListIntro />} />
                <Route path="/music-playlist" element={<MusicPlaylist />} />
                <Route path="/other-examples" element={<OtherExamples />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
