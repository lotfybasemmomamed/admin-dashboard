import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { userSchema } from "../views/adduser/userSchema";
import { useState } from "react";
export default function useAddUser() {
  const bgBtn = (theme) =>
    theme.palette.mode === "dark"
      ? theme.palette.primary.light
      : theme.palette.primary.dark;
  const textColor = (theme) =>
    theme.palette.mode === "dark" ? "#000" : "#fff";
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { role: "user" },
    resolver: zodResolver(userSchema),
  });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };
  function onsubmit() {
    setOpen(true);
    reset();
  }
  return {
    onsubmit,
    handleClose,
    errors,
    watch,
    handleSubmit,
    register,
    open,
    textColor,
    bgBtn,
  };
}
