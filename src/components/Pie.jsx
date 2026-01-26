import { Stack, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
const data = [
  {
    id: "Admins",
    label: "Admins",
    value: 15,
    color: "hsl(210, 70%, 50%)",
  },
  {
    id: "Managers",
    label: "Managers",
    value: 35,
    color: "hsl(150, 70%, 50%)",
  },
  {
    id: "Users",
    label: "Users",
    value: 120,
    color: "hsl(280, 70%, 50%)",
  },
  {
    id: "Subscribers",
    label: "Subscribers",
    value: 80,
    color: "hsl(10, 70%, 50%)",
  },
];

export default function Pie() {
  const theme = useTheme();

  const isDark = theme.palette.mode === "dark";
  const textColor = isDark ? "#fff" : "#333333";
  return (
    <Stack sx={{ height: "70vh" }}>
      <ResponsivePie
        data={data}
        margin={{ top: 25, right: 25, bottom: 25, left: 25 }}
        valueFormat=" >-"
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "dark2" }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={textColor}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: isDark ? [["brighter", 30]] : [["darker", 2]],
        }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
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
