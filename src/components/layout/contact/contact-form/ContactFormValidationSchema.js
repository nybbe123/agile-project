import * as yup from "yup";

const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Latin letters only"
    )
    .min(2, "Name must be at least 2 characters")
    .required("Required"),
  company: yup.string().min(2, "Company name must be at least 2 characters"),
  email: yup.string().email("Invalid email format").required("Required"),
  phone: yup
    .string()
    .required("Required")
    .matches(phoneRegExp, "Invalid phone number"),
  teammbr: yup
    .string()
    .test(
      "empty-check",
      "Required",
      (val) => val && val !== "default" && val !== ""
    ),
  message: yup
    .string()
    .min(20, "Message must be at least 20 characters")
    .required("Required"),
});
