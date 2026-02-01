import { useTranslation } from "react-i18next";
import Bar from "../../components/Bar";
import HeadPage from "../../components/HeadPage";
import React from "react";

export default function BarChart() {
    const { t } = useTranslation("barPageLocalization");
  
  return (
    <>
      <HeadPage
        title={t("headTitle")}
        text={t("headSubtitle")}
      />
      <Bar />
    </>
  );
}
