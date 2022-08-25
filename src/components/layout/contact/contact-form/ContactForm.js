import { useFormik } from "formik";
import style from "./ContactForm.module.css";
import { validationSchema } from "./ContactFormValidationSchema";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values, resetForm);
    },
    validationSchema: validationSchema,
    validationOnMount: true,
  });

  // not sure if we wanna reset the form when the user clicks submit so I leave it for now
  const handleSubmit = async (values, resetForm) => {
    console.log("stop clicking me");
  };

  return (
    <form onSubmit={formik.handleSubmit} id={style.root}>
      <label htmlFor="name">
        First & Last Name *
        <input
          id="name"
          type="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name ? (
          <div className={style["form-error"]}>{formik.errors.name}</div>
        ) : null}
      </label>

      <label htmlFor="company">
        Company Name
        <input
          id="company"
          type="company"
          name="company"
          value={formik.values.company}
          onChange={formik.handleChange}
        />
        {formik.errors.company ? (
          <div className={style["form-error"]}>{formik.errors.company}</div>
        ) : null}
      </label>

      <label htmlFor="email">
        Email *
        <input
          id="email"
          type="email"
          name="email"
          placeholder="eg. example@example.com"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email ? (
          <div className={style["form-error"]}>{formik.errors.email}</div>
        ) : null}
      </label>

      <label htmlFor="phone">
        Phone *
        <input
          id="phone"
          type="phone"
          name="phone"
          placeholder="eg. 073 112 3456"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.errors.phone ? (
          <div className={style["form-error"]}>{formik.errors.phone}</div>
        ) : null}
      </label>

      <label htmlFor="message">
        Message *
        <input
          id="message"
          type="message"
          name="message"
          placeholder="Write your message here..."
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        {formik.errors.message ? (
          <div className={style["form-error"]}>{formik.errors.message}</div>
        ) : null}
      </label>

      <button
        className={!formik.isValid ? style.opac : null}
        disabled={!formik.isValid}
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
