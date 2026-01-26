import { Stack, Typography } from "@mui/material";
import React from "react";

export default function HeadPage({ title, text = "" }) {
  const color = (theme) =>
    theme.palette.mode === "dark" ? "info.dark" : "info.main";
  return (
    <Stack  mx="15px" mt="15px" mb="20px"  display="row" gap="4px">
      <Typography
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
      {!!text && (
        <>
          <Typography
            width="fit-content"
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              mt:"5px"
            }}
          >
            {text}
          </Typography>
        </>
      )}
    </Stack>
  );
}
