import React, { useEffect, useState } from 'react'
import Partner from "./Partner";
import axios from 'axios';

const Partners = () => {
  const [partner, setPartner] = useState([]);
  
    const api_endpoint = import.meta.env.VITE_API_URL + "partner";
  
    useEffect(() => {
      const fetch = async () => {
        let result = await axios.get(api_endpoint);
        setPartner(result.data.data);
      };
      fetch();
    }, []);
  
    //console.log(partner);

  return (
    <>
    <section id="partners" className="flex flex-col mt-30 pt-20 pb-20">
      <div className="w-75 m-auto mt-30">
        <div className="m-auto">
          <div className="subheader flex gap-5 align-center justify-content-center">
            <div className="flex round-outer justify-content-center align-center">
              <div className="round-inner"></div>
            </div>
            <h3>Partners</h3>
          </div>
          <div className="justify-items-center">
            <h2>REPUTED PARTNERS</h2>
          </div>
        </div>
        <div className="flex justify-content-between mt-20 gap-20">
          {partner.map((value, index) => (
            <Partner key={index} img={import.meta.env.VITE_API_URL + value.image} />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Partners