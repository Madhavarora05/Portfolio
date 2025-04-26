import React from 'react';
import '../styles/components/Contact.css';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xzzrzdyo");

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get in<span> Touch</span></h2>
        <p className="contact-subtitle">Have a question or want to work together? Drop me a message!</p>

        <div className="contact-email">
          <span>📧</span> <a href="mailto:madhavarora365@gmail.com">madhavarora365@gmail.com</a>
        </div>

        <div className="contact-content">
          {state.succeeded ? (
            <p className="success-message">✅ Thanks for messaging! I’ll get back to you soon.</p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button type="submit" className="submit-btn" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
