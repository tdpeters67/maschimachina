import "./Contact.css";
import Header from "./Header";

export default function Contact() {
  return (
    <>
      <Header></Header>
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
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <textarea cols="30" rows="10" name="message" />
          <button>Reach Out!</button>
        </form>
      </div>
    </>
  );
}
