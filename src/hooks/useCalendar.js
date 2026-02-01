import { useTheme } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

export default function useCalendar() {
  const theme = useTheme();
  const {t,i18n}= useTranslation("calendar")
  const isRtl = i18n.language === "ar";
  const [newEventTitle, setNewEventTitle] = useState("");
  const [selectedDateInfo, setSelectedDateInfo] = useState(null);
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [open, setOpen] = useState(false);

  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible);
  }

  function handleEventClick(clickInfo) {
    Swal.fire({
      title: `${t("deleteTitle")}`,
      text: `${t("deleteConfirmText")} '${clickInfo.event.title}' ?`,
      icon: "warning",
      reverseButtons: isRtl,
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: `${t("deleteConfirmBtn")}`,
      cancelButtonText: `${t("cancel")}`,
      background: theme.palette.mode === "dark" ? "#1e1e1e" : "#fff",
      color: theme.palette.mode === "dark" ? "#fff" : "#000",
    }).then((result) => {
      if (result.isConfirmed) {
        clickInfo.event.remove();
        Swal.fire({
          title: `${t("deletedTitle")}`,
          text: `${t("deletedSubTitle")}`,
          icon: "success",
          background: theme.palette.mode === "dark" ? "#1e1e1e" : "#fff",
          color: theme.palette.mode === "dark" ? "#fff" : "#000",
        });
      }
    });
  }

  function handleDateSelect(selectInfo) {
    setSelectedDateInfo(selectInfo);
    setOpen(true);
  }

  const handleCloseAndAddEvent = () => {
    if (newEventTitle) {
      let calendarApi = selectedDateInfo.view.calendar;
      calendarApi.addEvent({
        id: String(Date.now()),
        title: newEventTitle,
        start: selectedDateInfo.startStr,
        end: selectedDateInfo.endStr,
        allDay: selectedDateInfo.allDay,
      });
    }
    setOpen(false);
    setNewEventTitle("");
  };
  return {
    theme,
    setCurrentEvents,
    setOpen,
    open,
    currentEvents,
    handleWeekendsToggle,
    handleEventClick,
    handleDateSelect,
    handleCloseAndAddEvent,newEventTitle, setNewEventTitle,weekendsVisible
  };
}
