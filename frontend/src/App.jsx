import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

function App() {
  const studentName = "Yug Patel";
  const role = "Computer Engineering Student";

  const about =
    "I am a Computer Engineering student passionate about AI, Machine Learning, Data Science, and Web Development.";

  const skills = ["Python", "Data Science", "JavaScript", "MySQL"];

  return (
    <div className="container">
      <Header name={studentName} role={role} themeColor="#2563eb" />

      <About aboutText={about} />

      <Skills skillList={skills} />

      <Footer email="yugpatel9093@gmail.com" contact={studentName} />
    </div>
  );
}

export default App;