import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/minty/bootstrap.min.css"
import './App.css';
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState('About Me');
  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <AboutMe />
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
  }
  return (
    <div className="page-container container-fluid">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
