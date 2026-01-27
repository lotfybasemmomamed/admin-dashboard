import HeadPage from "../../components/HeadPage";
import Geo from "../../components/geo/Geo";
import React from "react";

export default function Geography() {
  return (
    <>
      <HeadPage
        title="Regional Analysis"
        text="Distribution of active users across Egyptian Governorates"
      />
      <Geo />
    </>
  );
}
