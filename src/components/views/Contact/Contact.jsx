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
          <input type="text" placeholder="name" name="name" />
          <input type="email" placeholder="email" name="email" />
          <textarea
            cols="30"
            rows="10"
            name="message"
            placeholder="whatcha thinking?"
          />
          <button className="formbtn">send</button>
        </form>
      </div>
    </>
  );
}
