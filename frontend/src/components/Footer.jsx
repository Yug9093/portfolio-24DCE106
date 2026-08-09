function Footer({ email, contact }) {
  return (
    <footer className="footer" id="footer">
      <h3>Contact: {contact}</h3>
      <p>Email: {email}</p>
    </footer>
  );
}
export default Footer;