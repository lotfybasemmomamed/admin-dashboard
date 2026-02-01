import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import HomePieChart from "./HomePieChart";
import { useTranslation } from "react-i18next";

export default function SummaryCards({ cardItems }) {
  const theme = useTheme();
  const { t } = useTranslation("homePageLocalization");

  let IconComponent;
  return (
    <Stack
      py={2}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        alignContent: "center",
        gap: 2,
      }}
    >
      {cardItems.map((item) => {
        IconComponent = item.icon;

        return (
          <Paper
            key={item.text}
            sx={{
              p: 2,

              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              minWidth: "290px",
            }}
          >
            <Stack justifyContent="center" alignContent="center" gap="2px">
              <Box sx={{ color: theme.palette.secondary.main }}>
                <IconComponent />
              </Box>

              <Typography fontWeight="bold">{item.number}</Typography>
              <Typography fontWeight="bold">
                {t(`summary_cards.${item.translationKey}`)}
              </Typography>
            </Stack>
            <Stack gap="4px" sx={{ alignItems: "center" }}>
              <Box display={"flex"} width={"70px"} height="50px">
                <HomePieChart data={item.chart.data} color={item.chart.color} />
              </Box>
              <Typography fontWeight="bold">{item.percentage}</Typography>
            </Stack>
          </Paper>
        );
      })}
    </Stack>
  );
}
