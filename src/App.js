import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
// import AboutMe from './components/AboutMe';
// import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route exact path="about-me" element={<AboutMe />} /> */}
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/projects" element={<Projects />} />
        {/* <Route exact path="contact" element={<Contact />} /> */}
        <Route path="*" element={<Navigate replace to="/portfolio" />} />
      </Routes>
    </div>
  );
};

export default App;
