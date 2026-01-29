 import EmailSharpIcon from "@mui/icons-material/EmailSharp";
 import PointOfSaleSharpIcon from "@mui/icons-material/PointOfSaleSharp";
 import PersonAddSharpIcon from "@mui/icons-material/PersonAddSharp";
 import TrafficSharpIcon from "@mui/icons-material/TrafficSharp";

 export const cardItems = [
    {
      icon: EmailSharpIcon ,
      number: "12,875",
      text: "Emails Sent",
      percentage: "+14%",
      chart: {
        color: "nivo",
        data: [
          { id: "sent", label: "Sent", value: 80, color: "hsl(210, 70%, 50%)" },
          {
            id: "failed",
            label: "Failed",
            value: 20,
            color: "hsl(10, 70%, 50%)",
          },
        ],
      },
    },
    {
      icon: PointOfSaleSharpIcon ,
      number: "329,841",
      text: "Sales Obtained",
      percentage: "+21%",
      chart: {
        color: "category10",
        data: [
          { id: "cash", label: "Cash", value: 60, color: "hsl(120, 70%, 50%)" },
          {
            id: "online",
            label: "Online",
            value: 40,
            color: "hsl(200, 70%, 50%)",
          },
        ],
      },
    },
    {
      icon: PersonAddSharpIcon ,
      number: "32,441",
      text: "New Clients",
      percentage: "+5%",
      chart: {
        color: "accent",
        data: [
          {
            id: "active",
            label: "Active",
            value: 75,
            color: "hsl(45, 70%, 50%)",
          },
          { id: "new", label: "New", value: 25, color: "hsl(180, 70%, 50%)" },
        ],
      },
    },
    {
      icon: TrafficSharpIcon ,
      number: "1,325,134",
      text: "Traffic Received",
      percentage: "+43%",
      chart: {
        color: "dark2",
        data: [
          {
            id: "direct",
            label: "Direct",
            value: 50,
            color: "hsl(280, 70%, 50%)",
          },
          {
            id: "social",
            label: "Social",
            value: 50,
            color: "hsl(330, 70%, 50%)",
          },
        ],
      },
    },
  ];