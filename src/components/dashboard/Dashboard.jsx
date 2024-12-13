import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Partners from "./pages/Partners";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const Dashboard = () => {
  const [section, setSection] = useState('Navbar');
  
  const sections = {
    Navbar: <Navbar />,
    Hero: <Hero />,
    About: <About />,
    Services: <Services />,
    Resume: <Resume />,
    Portfolio: <Portfolio />,
    Testimonials: <Testimonials />,
    Partners: <Partners />,
    Blog: <Blog />,
    Contact: <Contact />,
    Footer: <Footer />,
  };

  const handleContent = (section) => {
    setSection(section);
  }

  return (
    <>
      <div className="dashboard">
        <aside>
          <ul>
            {Object.keys(sections).map((value, key) => {
              return (<li key={key} onClick={() => handleContent(value)}>{value}</li>)
            })}
          </ul>
        </aside>
        <div className="content">
            {sections[section]}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
