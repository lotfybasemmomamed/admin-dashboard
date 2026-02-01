import { useTranslation } from 'react-i18next';
import HeadPage from '../../components/HeadPage';
import Line from '../../components/Line';
import React from 'react'

export default function LineChart() {
  const {t} =useTranslation("lineCharPagetLocalization")
  return (
    <>
      <HeadPage
        title={t("headTitle")} 
        text={t("headSubtitle")}
      />
      <Line />
    </>
  );
}
