import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "../../components/topbar/TopBar";
import SideBar from "../../components/sidebar/SideBar";
import { Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Dashboard({ mode, setMode, lang, setLang }) {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar
        mode={mode}
        lang={lang}
        setLang={setLang}
        setMode={setMode}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />
      <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      {/* content */}
      <Box sx={{ flex: 1, py: 3, px: "2px" }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
