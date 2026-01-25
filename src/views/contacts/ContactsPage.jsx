import { Box } from "@mui/material";
import { columns } from "./mokeData";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Title from "../../components/Title";

export default function CantactsPage() {
  const fakeData = JSON.parse(localStorage.getItem("contactsPageFakeData"));

  return (
    <>
      <Title title="Contacts Information Table" />
      <Box sx={{ mx: "auto", width: "98%", overflowX: "auto" }}>
        <DataGrid
          rows={fakeData}
          columns={columns}
          showToolbar={true}
          density="comfortable"
        />
      </Box>
    </>
  );
}
