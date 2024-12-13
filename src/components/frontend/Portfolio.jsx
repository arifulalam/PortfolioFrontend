import React, { useEffect, useState } from "react";
import axios from "axios";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  const api_endpoint = import.meta.env.VITE_API_URL + "portfolio";

  useEffect(() => {
    const fetch = async () => {
      let result = await axios.get(api_endpoint);
      setPortfolio(result.data.data);
    };
    fetch();
  }, []);

  //console.log(portfolio);
  
  return (
    <>
      <section id="portfolio" className="flex flex-col mt-30 pt-20 pb-20">
        <div className="w-75 m-auto mt-30">
          <div className="m-auto">
            <div className="subheader flex gap-5 align-center justify-content-center">
              <div className="flex round-outer justify-content-center align-center">
                <div className="round-inner"></div>
              </div>
              <h3>My Portfolio</h3>
            </div>
            <div className="justify-items-center">
              <h2>VISIT MY PORTFOLIO</h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 mt-20">
            {portfolio.map((value, index) => {
              return (
                <img
                  key={index}
                  src={import.meta.env.VITE_API_URL + value.image}
                  alt=""
                  className="w-33 border-radius-5"
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
