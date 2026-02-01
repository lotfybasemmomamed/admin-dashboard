import { Box } from "@mui/material";
import { columns } from "./mokeData";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Title from "../../components/HeadPage";
import i18next from "../../utils/i18next";
import { contactsLocalization } from "./localization/contactsLocalization";
import { useTranslation } from "react-i18next";
import { arSD, enUS } from "@mui/x-data-grid/locales";

i18next.addResourceBundle("en", "contactsPage", contactsLocalization.en);
i18next.addResourceBundle("ar", "contactsPage", contactsLocalization.ar);

export default function CantactsPage() {
  const { t, i18n } = useTranslation("contactsPage");
  const dataGridLocale = i18n.language === "ar" ? arSD : enUS;
  const fakeData = JSON.parse(localStorage.getItem("contactsPageFakeData"));

  const translatedColumns = columns.map((col) => ({
    ...col,
    headerName: t(`col_${col.field}`),
  }));
  return (
    <>
      <Title title={t("pageTitle")} />
      <Box sx={{ mx: "auto", width: "98%", overflowX: "auto" }}>
        <DataGrid
          rows={fakeData}
          // @ts-ignore
          columns={translatedColumns}
          showToolbar={true}
          localeText={
            dataGridLocale.components.MuiDataGrid.defaultProps.localeText
          }
          density="comfortable"
        />
      </Box>
    </>
  );
}
