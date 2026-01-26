import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./mockData";
import Title from "../../components/HeadPage";

export default function InvoicePage() {
  const fakeData = JSON.parse(localStorage.getItem("invoicesPageFakeData"));
  

  return (
    <>
    <Title title="Invoices Table"/>
      <Box sx={{ mx: "auto", width: "98%", overflowX: "auto" }}>
        <DataGrid
          checkboxSelection
          rows={fakeData}
          columns={columns}
          density="comfortable"
        />
      </Box>
    </>
  );
}
