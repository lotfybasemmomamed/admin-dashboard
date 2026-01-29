import { useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

export default function HomePieChart({ data, color }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const textColor = isDark ? "#fff" : "#333333";
  return (
    <ResponsivePie
      data={data}
      sortByValue={true}
      innerRadius={0.6}
      padAngle={0.6}
      cornerRadius={2}
      activeOuterRadiusOffset={8}
      colors={{ scheme: color }}
      enableArcLinkLabels={false}
      enableArcLabels={false}
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
  );
}
