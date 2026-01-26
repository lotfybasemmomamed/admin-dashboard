import { Box, Typography, useTheme } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { columns } from "./mockData";
import { DataGrid } from "@mui/x-data-grid";
import Title from "../../components/HeadPage";
export default function TeamPage() {
  const theme = useTheme();
  const fakeData = JSON.parse(localStorage.getItem("teamPageFakeData"));

  const columnsWithTheme = columns.map((col) => {
    if (col.field === "access") {
      return {
        ...col,
        renderCell: (params) => {
          const isDark = theme.palette.mode === "dark";
          const access = params.row.access.toLowerCase();
          const accessStyles = {
            admin: {
              bg: isDark
                ? theme.palette.primary.dark
                : theme.palette.primary.light,
              icon: <AdminPanelSettingsOutlinedIcon fontSize="small" />,
            },
            manager: {
              bg: isDark
                ? theme.palette.secondary.dark
                : theme.palette.secondary.light,
              icon: <SecurityOutlinedIcon fontSize="small" />,
            },
            user: {
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
                  {access}
                </Typography>
              </Box>
            </Box>
          );
        },
      };
    }
    return col;
  });

  return (
    <>
      <Title title="manage team Table" />
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
