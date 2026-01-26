import React from "react";
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

const faqData = [
  {
    id: "panel1",
    question: "How do I create a new user?",
    answer:
      "You can create a new user by navigating to the 'Add User' page from the sidebar, filling out the required details in the form, and clicking the 'Add User' button.",
  },
  {
    id: "panel2",
    question: "How can I manage my calendar events?",
    answer:
      "Go to the Calendar page, You can click on any date to add a new event, or click on an existing event to delete it, You can also drag and drop events to reschedule them.",
  },
  {
    id: "panel3",
    question: "Is my data secure in the dashboard?",
    answer:
      "Yes, we use industry-standard encryption and security protocols to ensure that all your user data and configurations are stored securely.",
  },
  {
    id: "panel4",
    question: "How do I switch between Light and Dark mode?",
    answer:
      "You can toggle the theme mode using the icon located in the Topbar, Your preference will be saved for your next visit.",
  },
  {
    id: "panel5",
    question: "Can I export the user list to Excel?",
    answer:
      "Currently, you can view the users in the Data Grid, Export functionality is being developed and will be available in the next update.",
  },
  {
    id: "panel6",
    question: "What should I do if I forget my password?",
    answer:
      "Click on the 'Forgot Password' link on the login page, and follow the instructions sent to your registered email to reset it.",
  },
];

export default function FAQ() {
  return (
    <Box sx={{ mx: "15px" }}>
      <Title title="Frequently Asked Questions" />

      <Stack spacing={2} sx={{ mt: 3 }}>
        {faqData.map((faq, index) => (
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
