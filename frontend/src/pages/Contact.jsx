import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");

  return (
    <div className="page contact">
      <h1>Contact Me</h1>

      <div className="contact-form">
        <label>Name</label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <p>
          You entered: <strong>{name}</strong>
        </p>

        <label>Email</label>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button className="submit-btn">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;