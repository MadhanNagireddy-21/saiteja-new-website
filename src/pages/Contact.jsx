
import { useState } from "react";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import Button from "../components/Button";
import { CONTACT_DETAILS } from "../data/contact";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameInput = (event) => {
    // Allow English letters and spaces only
    event.target.value = event.target.value.replace(/[^A-Za-z ]/g, "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    setSuccessMessage("");
    setErrorMessage("");

    const formData = new FormData(form);

    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const subject = formData.get("subject")?.trim();
    const message = formData.get("message")?.trim();

    // Check all required fields
    if (!name || !email || !subject || !message) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    // Name validation
    const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

    if (!namePattern.test(name)) {
      setErrorMessage(
        "Name can contain letters and spaces only."
      );
      return;
    }

    const contactData = {
      name,
      email,
      subject,
      message,
    };

    try {
      setIsSubmitting(true);

      const response = await fetch(
        "http://localhost:8080/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit contact message");
      }

      setSuccessMessage(
        "Your message has been sent successfully. We'll get back to you soon."
      );

      setErrorMessage("");

      form.reset();
    } catch (error) {
      console.error(
        "Contact form submission error:",
        error
      );

      setSuccessMessage("");

      setErrorMessage(
        "Unable to send your message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="section-label">
          CONTACT US
        </div>

        <h1>
          Let's start
          <span> a conversation.</span>
        </h1>

        <p>
          Have a question, project, hiring requirement or
          partnership idea? We'd love to hear from you.
        </p>
      </section>


      {/* CONTACT CONTENT */}
      <section className="contact-main">

        {/* CONTACT INFORMATION */}
        <div className="contact-information">

          <div className="section-label">
            GET IN TOUCH
          </div>

          <h2>
            Tell us what
            <span> you're building.</span>
          </h2>

          <p>
            Share a little about what you need and our team
            can help you identify the right next step.
          </p>


          <div className="contact-details">

            {/* EMAIL */}
            <a
              href={`mailto:${CONTACT_DETAILS.email}`}
              className="contact-detail-item"
            >
              <Mail size={20} />

              <div>
                <small>Email</small>
                <span>
                  {CONTACT_DETAILS.email}
                </span>
              </div>
            </a>


            {/* PHONE */}
            <a
              href={`tel:${CONTACT_DETAILS.phone}`}
              className="contact-detail-item"
            >
              <Phone size={20} />

              <div>
                <small>Phone</small>
                <span>
                  {CONTACT_DETAILS.phoneDisplay}
                </span>
              </div>
            </a>


            {/* WHATSAPP */}
            <a
              href={CONTACT_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail-item"
            >
              <MessageCircle size={20} />

              <div>
                <small>WhatsApp</small>
                <span>
                  Chat with our team
                </span>
              </div>
            </a>


            {/* ADDRESS */}
            <a
              href={CONTACT_DETAILS.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail-item"
            >
              <MapPin size={20} />

              <div>
                <small>Office</small>
                <span>
                  {CONTACT_DETAILS.address}
                </span>
              </div>
            </a>

          </div>
        </div>


        {/* CONTACT FORM */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          {/* NAME + EMAIL */}
          <div className="form-row">

            {/* NAME */}
            <label>
              Name *
              <span className="required"></span>

              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                autoComplete="name"
                onInput={handleNameInput}
              />
            </label>


            {/* EMAIL */}
            <label>
              Email *
              <span className="required"> </span>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </label>

          </div>


          {/* SUBJECT */}
          <label>
            Subject *
            <span className="required"></span>

            <input
              type="text"
              name="subject"
              placeholder="How can we help?"
              required
            />
          </label>


          {/* MESSAGE */}
          <label>
            Message *
            <span className="required"></span>

            <textarea
              name="message"
              rows="6"
              placeholder="Tell us a little about your requirement..."
              required
            />
          </label>


          {/* SUCCESS MESSAGE */}
          {successMessage && (
            <p
              className="contact-success"
              role="status"
            >
              {successMessage}
            </p>
          )}


          {/* ERROR MESSAGE */}
          {errorMessage && (
            <p
              className="contact-error"
              role="alert"
            >
              {errorMessage}
            </p>
          )}


          {/* SUBMIT */}
          <Button
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Sending..."
              : "Send Message"}
          </Button>

        </form>

      </section>


      {/* MAP */}
      <section className="map-section">

        <div className="contact-map">

          <iframe
            title="Saiteja Infotech Office Location"
            src={CONTACT_DETAILS.mapEmbedUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

      </section>

    </main>
  );
}

export default Contact;

