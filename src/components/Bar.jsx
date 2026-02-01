import { Box, Stack, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { useTranslation } from "react-i18next";
import i18next from "../utils/i18next";
import { barPageLocalization } from "../views/barChart/localization/barPageLocalization";

i18next.addResourceBundle("en", "barPageLocalization", barPageLocalization.en);
i18next.addResourceBundle("ar", "barPageLocalization", barPageLocalization.ar);

const barData = [
  {
    year: 2020,
    Spain: 1108,
    France: 1539,
    Germany: 1584,
  },
  {
    year: 2021,
    Spain: 1108,
    France: 1554,
    Germany: 1610,
  },
  {
    year: 2022,
    Spain: 1166,
    France: 1645,
    Germany: 1744,
  },
  {
    year: 2023,
    Spain: 1260,
    France: 1709,
    Germany: 1987,
  },
  {
    year: 2024,
    Spain: 1323,
    France: 1766,
    Germany: 2054,
  },
  {
    year: 2025,
    Spain: 1380,
    France: 1800,
    Germany: 2120,
  },
];
export default function Bar({
  keys = ["Spain", "France", "Germany"],
  data = barData,
  indexBy = "year",
  axisBottomLegend = "",
  axisLeftLegend = "",
}) {
  const theme = useTheme();
  const { t } = useTranslation("barPageLocalization");
  const isRtl = theme.direction == "rtl";
  const isDark = theme.palette.mode === "dark";
  const textColor = isDark ? "#fff" : "#333333";
  return (
    <Stack sx={{ height: "70vh" }}>
      <ResponsiveBar
        keys={keys}
        data={data}
        indexBy={indexBy}
        labelSkipWidth={12}
        labelSkipHeight={12}
        colors={{ scheme: "dark2" }}
        borderColor={{ from: "color", modifiers: [] }}
        legendLabel={(datum) => t(datum.id)}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            translateX: 120,
            itemsSpacing: 3,
            itemWidth: 100,
            itemHeight: 16,
            itemDirection: isRtl ? "right-to-left" : "left-to-right",
            symbolSpacing:isRtl?axisLeftLegend?60:30:10
          },
        ]}
        axisBottom={{
          legend: axisBottomLegend || t("year"),
          legendOffset: 35,
        }}
        axisLeft={{
          legend: axisLeftLegend || t("country"),
          legendOffset: -50,
        }}
        animate={false}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        valueFormat=" >-$"
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
