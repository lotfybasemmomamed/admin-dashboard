import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { styled, alpha } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { Box, InputBase, Menu, MenuItem, useMediaQuery } from "@mui/material";
import MuiTooltip, { tooltipClasses } from "@mui/material/Tooltip";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useState } from "react";
import { getLanguage, setLanguage } from "../utils/LanguageService";
import { getThemeMode, setThemeMode } from "../utils/ThemeService";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));
const CustomTooltip = styled(({ className, ...props }) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#1976d2",
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 8,
    padding: "6px 10px",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#1976d2",
  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function TopBar({lang,setLang, mode, setMode, open, handleDrawerOpen }) {
//   const [lang, setLang] = useState(getLanguage());
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  function handleLang() {
    const newLang = lang === "EN" ? "AR" : "EN";
    setLanguage(newLang);
    setLang(newLang);
  }
  function handleMode() {
    const newMode = mode == "dark" ? "light" : "dark";
    setThemeMode(newMode);
    setMode(newMode);
  }
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  function handleDropDown(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleDropDownClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>

          {/* search input */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {/* icons */}
          {isMobile ? (
            <>
              <IconButton color="inherit">
                <NotificationsNoneOutlinedIcon />
              </IconButton>

              <IconButton color="inherit">
                <Person2OutlinedIcon />
              </IconButton>

              <IconButton color="inherit" onClick={handleDropDown}>
                <ArrowDropDownIcon color="inherit" />
              </IconButton>

              {/* drop down menu */}
              <Menu
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleDropDownClose}
                sx={{ mt: 1 }}
              >
                <MenuItem
                  onClick={() => {
                    handleMode();
                    handleDropDownClose();
                  }}
                >
                  {getThemeMode() === "light" ? (
                    <LightModeOutlinedIcon sx={{ mr: 1 }} />
                  ) : (
                    <DarkModeOutlinedIcon sx={{ mr: 1 }} />
                  )}
                  {mode==="light" ? "Light Mode" : "Dark Mode"}
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    handleLang();
                    handleDropDownClose();
                  }}
                >
                  <LanguageOutlinedIcon sx={{ mr: 1 }} />
                  {lang === "EN" ? "العربية" : "English"}
                </MenuItem>

                <MenuItem onClick={handleDropDownClose}>
                  <SettingsOutlinedIcon sx={{ mr: 1 }} />
                  Settings
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Box sx={{ marginLeft: "auto", display: "flex" }}>
                <IconButton color="inherit" onClick={handleMode}>
                  {getThemeMode() == "light" ? (
                    <LightModeOutlinedIcon />
                  ) : (
                    <DarkModeOutlinedIcon />
                  )}
                </IconButton>

                <CustomTooltip title={`Language: ${lang}`}>
                  <IconButton color="inherit" onClick={handleLang}>
                    <LanguageOutlinedIcon />
                  </IconButton>
                </CustomTooltip>

                <IconButton color="inherit">
                  <NotificationsNoneOutlinedIcon />
                </IconButton>

                <IconButton color="inherit">
                  <SettingsOutlinedIcon />
                </IconButton>

                <IconButton color="inherit">
                  <Person2OutlinedIcon />
                </IconButton>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
