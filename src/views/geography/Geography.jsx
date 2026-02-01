import { useTranslation } from "react-i18next";
import HeadPage from "../../components/HeadPage";
import Geo from "../../components/geo/Geo";
 import i18next  from "../../utils/i18next";
import { geographyPageLocalization } from "./localization/geographyPageLocalization";

 i18next.addResourceBundle("en","geographyPageLocalization",geographyPageLocalization.en)
 i18next.addResourceBundle("ar","geographyPageLocalization",geographyPageLocalization.ar)
export default function Geography() {
  const { t } = useTranslation("geographyPageLocalization");
  return (
    <>
      <HeadPage title={t("headTitle")} text={t("headSubtitle")} />
      <Geo />
    </>
  );
}
