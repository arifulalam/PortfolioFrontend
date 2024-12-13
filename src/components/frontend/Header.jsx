import React, { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  const [navbar, setNavbar] = useState([]);
  const api_url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetch = async () => {
      let result = await axios.get(`${api_url}header`);
      setNavbar(result.data.data);
    };
    fetch();
  }, []);

  return (
    <>
      <header>
        <nav>
          <div className="flex justify-content-between align-center w-75 h-100 m-auto">
            <div>
              <img className="logo" src="./images/Logo.png" alt="logo" />
            </div>
            <div>
              <ul className="flex gap-15 jost-300">
                {navbar.map((value, index) => (
                  <li key={index}>
                    <a href={value.menuLink}>{value.menuLabel}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <a href="#" className="btn btn-orange jost-500">
                Contact us
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
