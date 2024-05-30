import "./Contact.css";
import Header from "../../common/Header/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact-content">
        <form
          action="https://getform.io/f/panrvnka"
          method="POST"
          className="contact-form"
        >
          <div className="contact-header">
            <p className="contact-header-title">Reach Out!</p>
            <p className="contact-header-description">
              Submit the form below or shoot me an email at
              imaschination@gmail.com
            </p>
          </div>
          <input required type="text" placeholder="name" name="name" />
          <input required type="email" placeholder="email" name="email" />
          <textarea
            required
            cols="30"
            rows="10"
            name="message"
            placeholder="whatcha thinking?"
          />

          <button type="submit" className="formbtn">
            send
          </button>
        </form>
      </div>
    </>
  );
}
