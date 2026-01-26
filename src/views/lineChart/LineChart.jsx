import HeadPage from '../../components/HeadPage';
import Line from '../../components/Line';
import React from 'react'

export default function LineChart() {
  return (
    <>
      <HeadPage
        title="Performance Analytics"
        text="A visual representation of platform expansion and activity levels"
      />
      <Line />
    </>
  );
}
