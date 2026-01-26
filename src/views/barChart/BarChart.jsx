import Bar from "../../components/Bar";
import HeadPage from "../../components/HeadPage";
import React from "react";

export default function BarChart() {
  return (
    <>
      <HeadPage
        title="Global Wage Analytics"
        text="Comparative study of monthly minimum wage benchmarks across leading European economies"
      />
      <Bar />
    </>
  );
}
