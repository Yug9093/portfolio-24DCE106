import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="page contact">
      <h1>Contact Me</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name</label>
        <input
          id="name-input"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (submitted) setSubmitted(false);
          }}
          placeholder="Enter your name"
        />

        <p>
          You entered: <strong>{name}</strong>
        </p>

        <label htmlFor="email-input">Email</label>
        <input
          id="email-input"
          type="email"
          placeholder="Enter your email"
        />

        <label htmlFor="message-input">Message</label>
        <textarea
          id="message-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message here..."
          rows={4}
        />

        <button type="submit" className="submit-btn">
          Submit
        </button>

        {submitted && (
          <div className="submission-success">
            ✅ Message submitted successfully! Thank you, <strong>{name}</strong>.
          </div>
        )}
      </form>
    </div>
  );
}

export default Contact;