import { Stack, Typography, useTheme } from "@mui/material";
import { Button } from "@mui/material";
import FileDownloadSharpIcon from "@mui/icons-material/FileDownloadSharp";
import i18next from "../../../utils/i18next";
import { homePageLocalization } from "../localization/homePageLocalization";
import { useTranslation } from "react-i18next";
i18next.addResourceBundle(
  "en",
  "homePageLocalization",
  homePageLocalization.en,
);
i18next.addResourceBundle(
  "ar",
  "homePageLocalization",
  homePageLocalization.ar,
);

export default function Btn() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const btnBg = isDark ? "#00008B" : "#1F51FF";
  const btnBgHover = isDark ? "#0000CD" : "#4169E1";
  const { t } = useTranslation("homePageLocalization");
  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        bgcolor: btnBg,
        transition: "0.3s ease",
        "&:hover": {
          bgcolor: btnBgHover,
        },
        boxShadow:
          theme.palette.mode === "dark"
            ? "0px 4px 20px rgba(31, 81, 255, 0.4)"
            : theme.shadows[10],
      }}
    >
      <Button
        sx={{
          color: "#f3f3f3",
          textTransform: "none",
          transition: "0.3s ease",
          "&:hover": {
            color: "#fff",
          }
        
        }}
      >
        <Typography>{t("download_btn")}</Typography>
      </Button>
      <FileDownloadSharpIcon />
    </Stack>
  );
}
