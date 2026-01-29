import { Typography, useTheme } from "@mui/material";
import { Button } from "@mui/material";
import FileDownloadSharpIcon from "@mui/icons-material/FileDownloadSharp";

export default function Btn() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const btnBg = isDark ? "#00008B" : "#1F51FF";
  const btnBgHover = isDark ? "#0000CD" : "#4169E1";
  return (
    <Button
      sx={{
        bgcolor: btnBg,
        color: "#f3f3f3",
        textTransform: "none",
        transition: "0.3s ease",
        "&:hover": {
          bgcolor: btnBgHover,
          color: "#fff",
        },
        boxShadow:
          theme.palette.mode === "dark"
            ? "0px 4px 20px rgba(31, 81, 255, 0.4)"
            : theme.shadows[10],
      }}
    >
      <Typography>Download Report</Typography>
      <FileDownloadSharpIcon />
    </Button>
  );
}
