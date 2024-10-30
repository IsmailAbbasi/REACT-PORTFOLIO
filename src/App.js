// src/App.js
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Terms from './components/About/terms';
import Privacy from './components/About/privacy';  // Use lowercase 'p'
import Refund from './components/About/refund';  // Ensure this matches

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} /> 
          <Route path="refund" element={<Refund />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
