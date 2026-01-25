import * as z from "zod";

export const userSchema = z.object({
  firstName: z
    .string()
    .min(3, "First name must be at least 3 characters")
    .regex(/^[a-zA-Z\s]+$/, "please, enter valid name"),
  lastName: z
    .string()
    .min(3, "Last name must be at least 3 characters")
    .regex(/^[a-zA-Z]+$/, "please, enter valid name"),
  addressOne: z.string().min(5, "Address is too short"),
  addressTwo: z.string().optional(),
  email: z.string().email("Invalid email format"),
  phoneNumber: z
    .string()
    .regex(/^01[0125][0-9]{8}$/, "Invalid Egyptian phone number"),
  role: z.enum(["manager", "admin", "user"], {
    errorMap: () => ({ message: "Please select a valid role" }),
  }),
});
