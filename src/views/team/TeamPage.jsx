import { Box, Typography, useTheme } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { columns } from "./mockData";
import { DataGrid } from "@mui/x-data-grid";
import Title from "../../components/HeadPage";
import { useTranslation } from "react-i18next";
import i18next from "../../utils/i18next";
import { teamLocalization } from "./localization/teamPageLocalization";

i18next.addResourceBundle("en", "teamPage", teamLocalization.en);
i18next.addResourceBundle("ar", "teamPage", teamLocalization.ar);

export default function TeamPage() {
  const theme = useTheme();
  const fakeData = JSON.parse(localStorage.getItem("teamPageFakeData"));
  const { t } = useTranslation("teamPage");

  const columnsWithTheme = columns.map((col) => {
    const translatedHeader = t(`col_${col.field}`);
    if (col.field === "access") {
      return {
        ...col,
        headerName: translatedHeader,
        renderCell: (params) => {
          const isDark = theme.palette.mode === "dark";
          const access = params.row.access.toLowerCase();
          const accessStyles = {
            admin: {
              label: t("admin"),
              bg: isDark
                ? theme.palette.primary.dark
                : theme.palette.primary.light,
              icon: <AdminPanelSettingsOutlinedIcon fontSize="small" />,
            },
            manager: {
              label: t("manager"),

              bg: isDark
                ? theme.palette.secondary.dark
                : theme.palette.secondary.light,
              icon: <SecurityOutlinedIcon fontSize="small" />,
            },
            user: {
              label: t("user"),

              bg: isDark ? "#3da58a" : "#3fa086ff",
              icon: <LockOpenOutlinedIcon fontSize="small" />,
            },
          };

          const style = accessStyles[access] || accessStyles.user;

          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  borderRadius: "6px",
                  px: 1,
                  py: 0.25,
                  backgroundColor: style.bg,
                  fontWeight: "bold",
                }}
              >
                {style.icon}
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                  }}
                >
                  {style.label}
                </Typography>
              </Box>
            </Box>
          );
        },
      };
    }
     return { ...col, headerName: translatedHeader };;
  });

  return (
    <>
      <Title title={t("pageTitle")} />
      <Box sx={{ mx: "auto", width: "98%", overflowX: "auto" }}>
        <DataGrid
          rows={fakeData}
          columns={columnsWithTheme}
          density="comfortable"
        />
      </Box>
    </>
  );
}
