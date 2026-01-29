import { Box } from "@mui/material";
import SummaryCards from "./copmonent/SummaryCards";
import { cardItems } from "./utils/cardItems";
import RevenueOverview from "./copmonent/RevenueOverview";
import Btn from "./copmonent/Btn";

import PerformanceChartsRow from "./copmonent/PerformanceChartsRow";

export default function Home() {
  return (
    <>
      <Box px={2}>
        <Box display="flex" justifyContent={"end"}>
          <Btn />
        </Box>
        <SummaryCards cardItems={cardItems} />
        <RevenueOverview />
        <PerformanceChartsRow />
      </Box>
    </>
  );
}
