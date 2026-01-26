import HeadPage from "../../components/HeadPage";
import Pie from "../../components/Pie";
import React from "react";

export default function PieChart() {
  return (
    <>
      <HeadPage
        title="User Demographics"
        text="Detailed breakdown of system access levels and user role distribution"
      />
      <Pie />
    </>
  );
}
