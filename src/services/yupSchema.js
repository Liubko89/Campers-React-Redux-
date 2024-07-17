import * as Yup from "yup";

export const bookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Register name must be at least 3 characters!")
    .max(50, "Register name must be less than 50 characters!")
    .required("Register name is required!"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});
