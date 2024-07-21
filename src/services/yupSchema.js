import * as Yup from "yup";

export const bookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters!")
    .max(50, "Name must be less than 50 characters!")
    .required("Name is required!"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  bookingDate: Yup.string().required("Date is required"),
});

export const filterSchema = Yup.object().shape({
  location: Yup.string()
    .min(2, "The field must be at least 2 characters!")
    .max(50, "The field must be less than 50 characters!")
    .required("Location field is required!"),
});
