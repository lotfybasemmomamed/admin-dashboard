import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Title from "../../components/HeadPage";
import i18next from "../../utils/i18next";
import { faqLocalization } from "./localization/faqLocalization";
import { useTranslation } from "react-i18next";
i18next.addResourceBundle("en", "faqPage", faqLocalization.en);
i18next.addResourceBundle("ar", "faqPage", faqLocalization.ar);

export default function FAQ() {
  const { t } = useTranslation("faqPage");
  const questions = t("questions", { returnObjects: true });

  return (
    <Box sx={{ mx: "15px" }}>
      <Title title={t("pageTitle")} />
      <Stack spacing={2} sx={{ mt: 3 }}>
        {Array.isArray(questions) &&
          questions.map((faq, index) => (
            <Accordion key={faq.id} defaultExpanded={index === 0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${faq.id}-content`}
                id={`${faq.id}-header`}
              >
                <Typography sx={{ fontWeight: "bold", color: "primary.main" }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </Stack>
    </Box>
  );
}
