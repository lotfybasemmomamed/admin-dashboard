import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import Title from "../../components/HeadPage";
import useAddUser from "../../hooks/useAddUser";
import { useTranslation } from "react-i18next";
import i18next from "../../utils/i18next";
import { addUserLocalization } from "./localization/addUserLocalization";

i18next.addResourceBundle("en", "addUser", addUserLocalization.en);
i18next.addResourceBundle("ar", "addUser", addUserLocalization.ar);

export default function AddUser() {
  const {
    onsubmit,
    handleClose,
    errors,
    watch,
    handleSubmit,
    register,
    open,
    textColor,
    bgBtn,
  } = useAddUser();

  const { t } = useTranslation("addUser");

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{
            width: "100%",
            color: "#fff",
          }}
          variant="filled"
          elevation={6}
        >
         { t("successMsg")}
        </Alert>
      </Snackbar>

      <Title title={t("pageTitle")}/>
      <Box
        onSubmit={handleSubmit(onsubmit)}
        component="form"
        sx={{
          mx: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        autoComplete="off"
      >
        <Stack direction={{ xs: "column", sm: "row" }} gap="10px">
          <TextField
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            {...register("firstName")}
            sx={{ flex: "1" }}
            label={t("firstName")}
            variant="filled"
          />
          <TextField
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            {...register("lastName")}
            sx={{ flex: "1" }}
            label={t("lastName")}
            variant="filled"
          />
        </Stack>
        <TextField
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email")}
          label={t("email")}
          variant="filled"
        />
        <TextField
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
          {...register("phoneNumber")}
          label={t("phone")}
          variant="filled"
        />
        <TextField
          error={!!errors.addressOne}
          helperText={errors.addressOne?.message}
          {...register("addressOne")}
          label={t("address1")}
          variant="filled"
        />
        <TextField
          error={!!errors.addressTwo}
          helperText={errors.addressTwo?.message}
          {...register("addressTwo")}
          label={t("address2")}
          variant="filled"
        />

        <FormControl variant="filled" error={!!errors.role}>
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            {...register("role")}
            value={watch("role")}
            label={t("role")}
          >
            <MenuItem value="user">{t("user")}</MenuItem>
            <MenuItem value="admin">{t("admin")}</MenuItem>
            <MenuItem value="manager">{t("manager")}</MenuItem>
          </Select>
          <FormHelperText>{errors.role?.message}</FormHelperText>
        </FormControl>
        <Box textAlign="end">
          <Button
            type="submit"
            sx={{
              px: "20px",
              textTransform: "capitalize",
              bgcolor: bgBtn,
              color: textColor,
              fontSize: "18px",
              "&:hover": {
                bgcolor: bgBtn,
                filter: "brightness(0.9)",
              },
            }}
          >
            {t("btnSubmit")}
          </Button>
        </Box>
      </Box>
    </>
  );
}
