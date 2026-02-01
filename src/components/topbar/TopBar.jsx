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
import {setLanguage } from "../../utils/LanguageService";
import { getThemeMode, setThemeMode } from "../../utils/ThemeService";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTranslation } from "react-i18next";
import i18next from "../../utils/i18next";
import { topBarLocalization } from "./localization/topBarLocalization";
i18next.addResourceBundle("en", "topBarLocalization", topBarLocalization.en);
i18next.addResourceBundle("ar", "topBarLocalization", topBarLocalization.ar);

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
))(() => ({
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

export default function TopBar({
  lang,
  setLang,
  mode,
  setMode,
  open,
  handleDrawerOpen,
}) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { t, i18n } = useTranslation("topBarLocalization");
  function handleLang() {
    const newLang = lang === "EN" ? "AR" : "EN";
    setLanguage(newLang);
    setLang(newLang);
    i18n.changeLanguage(newLang.toLowerCase());
    localStorage.setItem("lang", newLang.toLowerCase());
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

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={t("search")}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
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
                  {mode === "light" ? t("dark_mode") : t("light_mode")}{" "}
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    handleLang();
                    handleDropDownClose();
                  }}
                >
                  <LanguageOutlinedIcon sx={{ mr: 1 }} />
                  {t("lang_name")}
                </MenuItem>

                <MenuItem onClick={handleDropDownClose}>
                  <SettingsOutlinedIcon sx={{ mr: 1 }} />
                  {t("settings")}
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Box sx={{ marginLeft: "auto", display: "flex" }}>
                <CustomTooltip
                  title={t("mode_tooltip", {
                    mode: mode === "light" ? t("light_mode") : t("dark_mode"),
                  })}
                >
                  {" "}
                  <IconButton color="inherit" onClick={handleMode}>
                    {getThemeMode() == "light" ? (
                      <LightModeOutlinedIcon />
                    ) : (
                      <DarkModeOutlinedIcon />
                    )}
                  </IconButton>
                </CustomTooltip>
                <CustomTooltip
                  title={t("lang_tooltip", {
                    lang: lang === "EN" ? "English" : "العربية",
                  })}
                >
                  {" "}
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
