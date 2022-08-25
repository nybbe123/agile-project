import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup
    .string()
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Latin letters only"
    )
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  message: yup
    .string()
    .min(20, "Message must be at least 20 characters")
    .required("Required"),
});
