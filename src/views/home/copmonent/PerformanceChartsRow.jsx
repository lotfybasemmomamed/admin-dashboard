import { Box, Paper, Typography, useTheme } from "@mui/material";
import HomePieChart from "./HomePieChart";
import Bar from "../../../components/Bar";
import Geo from "../../../components/geo/Geo";

const pieData = [
  {
    id: "Sales",
    label: "Sales",
    value: 35000,
  },
  {
    id: "Marketing",
    label: "Marketing",
    value: 8000,
  },
  {
    id: "Expenditures",
    label: "Expenditures",
    value: 3500,
  },
  {
    id: "Maintenance",
    label: "Maintenance",
    value: 1852,
  },
];

const barData = [
  {
    month: "Jan",
    Smartphones: 120,
    Laptops: 80,
    Accessories: 200,
  },
  {
    month: "Feb",
    Smartphones: 150,
    Laptops: 95,
    Accessories: 170,
  },
  {
    month: "Mar",
    Smartphones: 180,
    Laptops: 110,
    Accessories: 220,
  },
  {
    month: "Apr",
    Smartphones: 140,
    Laptops: 130,
    Accessories: 190,
  },
  {
    month: "May",
    Smartphones: 210,
    Laptops: 150,
    Accessories: 250,
  },
];
export default function PerformanceChartsRow() {
    const theme =useTheme()
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
          Campaign
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
            $48,352 revenue generated
          </Typography>
          <Typography variant="body2" px={0.7} pb={3} align="center">
            Includes extra misc expenditures and costs
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
          Sales Quantity
        </Typography>
        <Bar
          data={barData}
          keys={["Accessories", "Laptops", "Smartphones"]}
          indexBy="month"
          axisBottomLegend="Month"
          axisLeftLegend="Devices"
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
          Geography Based Traffic
        </Typography>
        <Geo legends={false} />
      </Paper>
    </Box>
  );
}
