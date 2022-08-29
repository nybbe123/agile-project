import ContactForm from "../contact-form/ContactForm";
import style from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div id={style.root}>
      <div id={style.left}>
        <h6 className={style.label}>Contact Us</h6>
        <h4 className={style.heading}>Get in touch with us today</h4>
      </div>

      <div id={style.right}>
        <div id={style["form-container"]}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
