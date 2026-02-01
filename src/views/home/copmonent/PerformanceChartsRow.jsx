import { Box, Paper, Typography, useTheme } from "@mui/material";
import HomePieChart from "./HomePieChart";
import Bar from "../../../components/Bar";
import Geo from "../../../components/geo/Geo";
import { useTranslation } from "react-i18next";

export default function PerformanceChartsRow() {
  const theme = useTheme();

  const { t, i18n } = useTranslation("homePageLocalization");
  const barData = [
    {
      month: t("performance_charts_row.Jan"),
      Smartphones: 120,
      Laptops: 80,
      Accessories: 200,
    },
    {
      month: t("performance_charts_row.Feb"),
      Smartphones: 150,
      Laptops: 95,
      Accessories: 170,
    },
    {
      month: t("performance_charts_row.Mar"),
      Smartphones: 180,
      Laptops: 110,
      Accessories: 220,
    },
    {
      month: t("performance_charts_row.Apr"),
      Smartphones: 140,
      Laptops: 130,
      Accessories: 190,
    },
    {
      month: t("performance_charts_row.May"),
      Smartphones: 210,
      Laptops: 150,
      Accessories: 250,
    },
  ];
  const pieData = [
    { id: "Sales", label: t("Sales"), value: 35000 },
    { id: "Marketing", label: t("Marketing"), value: 8000 },
    { id: "Expenditures", label: t("Expenditures"), value: 3500 },
    { id: "Maintenance", label: t("Maintenance"), value: 1852 },
  ];
  return (
    <Box
      display={"flex"}
      gap={2}
      flexDirection={{ xs: "column", lg: "row" }}
      flexWrap={"wrap"}
      mt={2}
    >
      {/* 1 */}
      <Paper sx={{ minWidth: "32%" }}>
        <Typography
          width="fit-content"
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: theme.palette.secondary.main,
            textTransform: "capitalize",
            pl: "20px",
            pt: "20px",
            mb: "20px",
          }}
        >
          {t("performance_charts_row.campaign")}
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={7}
        >
          <Box display={"flex"} width={"300px"} height="300px">
            <HomePieChart data={pieData} color="category10" />
          </Box>
          <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
            {t("performance_charts_row.revenue_msg")}
          </Typography>
          <Typography variant="body2" px={0.7} pb={3} align="center">
            {t("performance_charts_row.misc_msg")}
          </Typography>
        </Box>
      </Paper>

      {/* 2 */}
      <Paper sx={{ minWidth: "32%" }}>
        <Typography
          width="fit-content"
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: theme.palette.secondary.main,
            textTransform: "capitalize",
            pl: "20px",
            pt: "20px",
            mb: "20px",
          }}
        >
          {t("performance_charts_row.sales_quantity")}
        </Typography>
        <Bar
          data={barData}
          keys={["Accessories", "Laptops", "Smartphones"]}
          indexBy="month"
          axisBottomLegend={t("performance_charts_row.month")}
          axisLeftLegend={t("performance_charts_row.devices")}
        />
      </Paper>
      {/* 3 */}
      <Paper sx={{ minWidth: "32%" }}>
        <Typography
          width="fit-content"
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: theme.palette.secondary.main,
            textTransform: "capitalize",
            pl: "20px",
            pt: "20px",
            mb: "30px",
          }}
        >
          {t("performance_charts_row.geo_traffic")}
        </Typography>
        <Geo legends={false} />
      </Paper>
    </Box>
  );
}
