import style from "./ContactForm.module.css";
import { useFormik } from "formik";
import { validationSchema } from "./ContactFormValidationSchema";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values, resetForm);
    },
    validationSchema: validationSchema,
    validationOnMount: true,
  });

  const handleSubmit = async (values, resetForm) => {
    console.log("stop clicking me");
  };

  return (
    <form onSubmit={formik.handleSubmit} id={style.root}>
      <label htmlFor="name">First & Last Name *</label>
      <input type="text" name="name" />

      <label htmlFor="company">Company Name *</label>
      <input type="text" name="company" />

      <label htmlFor="email">Email *</label>
      <input type="text" name="email" placeholder="eg. example@example.com" />

      <label htmlFor="phone">Phone</label>
      <input type="text" name="phone" placeholder="eg. 0731 123 456 789" />

      <label htmlFor="message">Message *</label>
      <input
        type="text"
        name="message"
        placeholder="Write your message here..."
      />
    </form>
  );
};

export default ContactForm;
