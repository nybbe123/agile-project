import emailjs from "@emailjs/browser";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { memberData } from "../../../member/memberData";
import style from "./ContactForm.module.css";
import { validationSchema } from "./ContactFormValidationSchema";

const ContactForm = () => {
  const [fontColor, setFontColor] = useState("grey");
  const [sending, setSending] = useState("Send Message");
  const [sent, setSent] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      teammbr: "",
      message: "",
      to_email: "",
    },
    onSubmit: (values, { resetForm }) => handleSubmit(values, resetForm),
    validationSchema: validationSchema,
    validationOnMount: true,
  });

  useEffect(() => {
    formik.values.teammbr !== "default"
      ? setFontColor("dark")
      : setFontColor("grey");
  }, [formik.values.teammbr]);

  useEffect(() => {
    if (formik.values.teammbr) {
      const findMember = memberData.find(
        (member) => member.name === formik.values.teammbr
      );
      if (!findMember) return;
      formik.values.to_email = findMember.email;
    }
  }, [formik.values]);

  const handleSubmit = async (values, resetForm) => {
    setSending("Sending...");
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        values,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSent(true);
          resetForm();
          setTimeout(() => setSent(false), 2000);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return sent ? (
    <div className={style["message-sent"]}>
      <MarkEmailReadIcon className={style["sent-icon"]} fontSize="large" />
      <h2>
        Thank you <br /> for contacting us!
      </h2>
      <h4>We will reply you as soon as we can.</h4>
    </div>
  ) : (
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

      <div style={{ position: "relative" }}>
        <select
          id="teammbr"
          type="teammbr"
          name="teammbr"
          value={formik.values.teammbr}
          onChange={formik.handleChange}
          className={style[fontColor]}
        >
          <option default value="default">
            Select person to contact
          </option>
          {memberData.map((mbr) => (
            <option value={mbr.name} key={mbr.id}>
              {mbr.name}
            </option>
          ))}
        </select>
        {formik.errors.teammbr ? (
          <div className={style["form-error"]}>{formik.errors.teammbr}</div>
        ) : null}
      </div>

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
        className={
          !formik.isValid || formik.values === formik.initialValues
            ? style.opac
            : null
        }
        disabled={!formik.isValid || formik.values === formik.initialValues}
        type="submit"
      >
        {sending}
      </button>
    </form>
  );
};

export default ContactForm;
