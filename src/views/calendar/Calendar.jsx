import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import {
  Box,
  Stack,
  Paper,
  Typography,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import useCalendar from "../../hooks/useCalendar";

export default function Calendar() {
  const {
    theme,
    setCurrentEvents,
    setOpen,
    open,
    currentEvents,
    handleWeekendsToggle,
    handleEventClick,
    handleDateSelect,
    handleCloseAndAddEvent,
    newEventTitle,
    setNewEventTitle,
    weekendsVisible,
  } = useCalendar();

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle sx={{ bgcolor: "background.paper" }}>
          Add New Event
        </DialogTitle>
        <DialogContent sx={{ bgcolor: "background.paper", minWidth: "300px" }}>
          <TextField
            autoFocus
            margin="dense"
            label="Event Title"
            fullWidth
            variant="standard"
            value={newEventTitle}
            onChange={(e) => setNewEventTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{ bgcolor: "background.paper" }}>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleCloseAndAddEvent} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ minHeight: "100vh", bgcolor: "background.default" }}
      >
        <Paper
          elevation={0}
          sx={{
            width: { md: 300 },
            p: 2,
            borderRight: "1px solid",
            borderColor: "divider",
            bgcolor:
              theme.palette.mode === "dark" ? "background.paper" : "#f8f9fa",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={weekendsVisible}
                onChange={handleWeekendsToggle}
              />
            }
            label="Show Weekends"
          />

          <Typography
            variant="h6"
            sx={{
              mt: 1,
              mb: 1,
              bgcolor: (theme) =>
                theme.palette.mode === "dark"
                  ? theme.palette.grey[800]
                  : theme.palette.grey[300],
              textAlign: "center",
              borderRadius: "5px",
            }}
          >
            All Events ({currentEvents.length})
          </Typography>

          <List sx={{ maxHeight: "400px", overflow: "auto" }}>
            {currentEvents.map((event) => (
              <ListItem key={event.id} divider>
                <ListItemText
                  primary={event.title}
                  secondary={formatDate(event.start, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                />
              </ListItem>
            ))}
          </List>
        </Paper>

        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Paper elevation={4} sx={{ p: 2, borderRadius: "8px" }}>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={weekendsVisible}
              select={handleDateSelect}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              height="80vh"
            />
          </Paper>
        </Box>
      </Stack>
    </>
  );
}
