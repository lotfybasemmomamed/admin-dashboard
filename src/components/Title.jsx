import { Typography } from "@mui/material";
import React from "react";

export default function Title({ title }) {
  const color = (theme) =>
    theme.palette.mode === "dark" ? "info.dark" : "info.main";
  return (
    <Typography
      m="15px"
      borderBottom="2px solid"
      width="fit-content"
      sx={{
        fontSize: "30px",
        fontWeight: "bold",
        color: color,
        borderColor: color,
        textTransform: "uppercase",
      }}
    >
      {title}
    </Typography>
  );
}
