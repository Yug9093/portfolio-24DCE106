function Footer({ email, contact }) {
  return (
    <footer className="footer" id="footer">
      <h3>{contact ? `Contact: ${contact}` : "Contact"}</h3>
      <p>{email ? `Email: ${email}` : "Email available on request"}</p>
    </footer>
  );
}
export default Footer;