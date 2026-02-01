import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./mockData";
import Title from "../../components/HeadPage";
import i18next from "../../utils/i18next";
import { invoicesLocalization } from "./localization/invoicesLocalization";
import { useTranslation } from "react-i18next";

i18next.addResourceBundle("en", "invoicesPage", invoicesLocalization.en);
i18next.addResourceBundle("ar", "invoicesPage", invoicesLocalization.ar);

export default function InvoicePage() {
  const fakeData = JSON.parse(localStorage.getItem("invoicesPageFakeData"));
  const { t } = useTranslation("invoicesPage");

  const translatedColumns = columns.map((col) => ({
    ...col,
    headerName: t(`col_${col.field}`),
  }));

  return (
    <>
      <Title title={t("pageTitle")} />
      <Box sx={{ mx: "auto", width: "98%", overflowX: "auto" }}>
        <DataGrid
          checkboxSelection
          rows={fakeData}
          columns={translatedColumns}
          density="comfortable"
        />
      </Box>
    </>
  );
}
