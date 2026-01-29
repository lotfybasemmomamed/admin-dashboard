import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { revenueData, transactionData } from "../utils/revenueData";
import Line from "../../../components/Line";

export default function RevenueOverview() {
  const theme = useTheme();
  return (
    <Stack
      display={"flex"}
      sx={{
        flexDirection: {
          xs: "column",
          md: "row",
        },
        width: "100%",
      }}
    >
      <Stack minWidth={"65%"}>
        <Stack mx="15px" mb="20px" display="row" gap="4px">
          <Typography
            width="fit-content"
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              color: theme.palette.secondary.main,
              textTransform: "capitalize",
            }}
          >
            Revenue Generated
          </Typography>

          <Typography
            width="fit-content"
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            $59,342.32
          </Typography>
        </Stack>

        <Line
          data={revenueData}
          axiosBottomWord="Year"
          axiosleftWord="revenue"
        />
      </Stack>
      <Stack minWidth={"35%"} sx={{ display: "flex", gap: "8px" }}>
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>
        <Box display="flex" flexDirection={"column"} gap={"8px"}>
          {transactionData.map((trans) => (
            <Paper sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Stack>
                <Typography sx={{ fontWeight: "bold" }}>
                  {trans.user}
                </Typography>
                <Typography sx={{ fontWeight: "200" }}>{trans.txId}</Typography>
              </Stack>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                {trans.date}
              </Typography>
              <Typography
                sx={{
                  bgcolor:
                    theme.palette.mode === "dark" ? "#f0a1a1" : "#d8a9a9",
                  p: "5px 10px",
                  borderRadius: "4px",
                  m: "7px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "80px",
                  color: "#000",
                  fontWeight: "600",
                }}
              >
                {trans.cost} EGP
              </Typography>
            </Paper>
          ))}
        </Box>
      </Stack>
    </Stack>
  );
}
