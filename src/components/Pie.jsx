import { Stack, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { useTranslation } from "react-i18next";


export default function Pie({data}) {
  const theme = useTheme();
  const { t } = useTranslation("barPageLocalization");
  const isRtl = theme.direction == "rtl";

  const isDark = theme.palette.mode === "dark";
  const textColor = isDark ? "#fff" : "#333333";
  return (
    <Stack sx={{ height: "70vh" }}>
      <ResponsivePie
        data={data}
        arcLinkLabel={(d) => t(d.id)}
        margin={{ top: 25, right: 25, bottom: 25, left: 25 }}
        valueFormat=" >-"
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}


    
        arcLinkLabelsTextOffset={isRtl? 45:12}


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
