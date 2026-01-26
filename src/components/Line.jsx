import { Stack, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "New Users",
    data: [
      { x: "Jan", y: 45 },
      { x: "Feb", y: 52 },
      { x: "Mar", y: 38 },
      { x: "Apr", y: 65 },
      { x: "May", y: 48 },
      { x: "Jun", y: 70 },
      { x: "Jul", y: 85 },
      { x: "Aug", y: 92 },
      { x: "Sep", y: 68 },
      { x: "Oct", y: 81 },
      { x: "Nov", y: 95 },
      { x: "Dec", y: 110 },
    ],
  },
  {
    id: "Created Events",
    data: [
      { x: "Jan", y: 20 },
      { x: "Feb", y: 25 },
      { x: "Mar", y: 15 },
      { x: "Apr", y: 30 },
      { x: "May", y: 22 },
      { x: "Jun", y: 40 },
      { x: "Jul", y: 55 },
      { x: "Aug", y: 50 },
      { x: "Sep", y: 35 },
      { x: "Oct", y: 45 },
      { x: "Nov", y: 60 },
      { x: "Dec", y: 75 },
    ],
  },
  {
    id: "User Engagement",
    data: [
      { x: "Jan", y: 120 },
      { x: "Feb", y: 110 },
      { x: "Mar", y: 130 },
      { x: "Apr", y: 145 },
      { x: "May", y: 140 },
      { x: "Jun", y: 160 },
      { x: "Jul", y: 180 },
      { x: "Aug", y: 175 },
      { x: "Sep", y: 150 },
      { x: "Oct", y: 165 },
      { x: "Nov", y: 190 },
      { x: "Dec", y: 210 },
    ],
  },
];
export default function Line() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const textColor = isDark ? "#fff" : "#333333";

  return (
    <Stack sx={{ height: "70vh" }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 140, bottom: 50, left: 60 }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        axisBottom={{ legend: "transportation", legendOffset: 36 }}
        axisLeft={{ legend: "count", legendOffset: -40 }}
        enableGridX={false}
        enableGridY={false}
        colors={{ scheme: "dark2" }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "seriesColor" }}
        pointLabelYOffset={-12}
        enableArea={true}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 22,
            symbolShape: "circle",
          },
        ]}
        theme={{
          text: {
            fontSize: 11,
            fill: textColor,
            outlineWidth: 0,
            outlineColor: "#ffffff",
          },
          axis: {
            domain: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: textColor,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
            ticks: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: textColor,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
          },
          grid: {
            line: {
              stroke: "#dddddd",
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
            text: {
              fontSize: 11,
              fill: textColor,
              outlineWidth: 0,
              outlineColor: "#ffffff",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: "#333333",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: isDark ? "#333333" : "#fff",
              color: textColor,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
      />
    </Stack>
  );
}
