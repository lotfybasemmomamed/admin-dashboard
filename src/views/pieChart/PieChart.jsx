import HeadPage from "../../components/HeadPage";
import Pie from "../../components/Pie";

import i18next from "../../utils/i18next";
import { useTranslation } from "react-i18next";
import { piePageLocalization } from "./localization/piePageLocalization";
i18next.addResourceBundle("en", "barPageLocalization", piePageLocalization.en);
i18next.addResourceBundle("ar", "barPageLocalization", piePageLocalization.ar);
const data = [
  {
    id: "Admins",
    label: "Admins",
    value: 15,
    color: "hsl(210, 70%, 50%)",
  },
  {
    id: "Managers",
    label: "Managers",
    value: 35,
    color: "hsl(150, 70%, 50%)",
  },
  {
    id: "Users",
    label: "Users",
    value: 120,
    color: "hsl(280, 70%, 50%)",
  },
  {
    id: "Subscribers",
    label: "Subscribers",
    value: 80,
    color: "hsl(10, 70%, 50%)",
  },
];
export default function PieChart() {
  const { t } = useTranslation("barPageLocalization");

  return (
    <>
      <HeadPage title={t("headTitle")} text={t("headSubtitle")} />
      <Pie data={data} />
    </>
  );
}
