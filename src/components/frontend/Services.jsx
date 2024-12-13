import React, { useEffect, useState } from "react";
import Service from "./Service";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);

  const api_endpoint = import.meta.env.VITE_API_URL + "services";

  useEffect(() => {
    const fetch = async () => {
      let result = await axios.get(api_endpoint);
      setServices(result.data.data);
    };
    fetch();
  }, []);

  /* let services = [
    {
      img: "Icon-pen.png",
      title: "UX/UI Design",
      note: "Consectetur adipisicing elit. Delectus minima repudiandae. Lorem ipsum dolor sit amet debitis fuga voluptas",
    },
    {
      img: "Icon-mobile.png",
      title: "Mobile App",
      note: "Lorem ipsum minima dolor elit. Delectus sit amet consectetur adipisicing repudiandae debitis fuga voluptas",
    },
    {
      img: "Icon-graphics.png",
      title: "Graphics Design",
      note: "Lorem ipsum dolor sit amet repudiandae debitis fuga consectetur. Delectus minima voluptas adipisicing elit.",
    },
    {
      img: "Icon-web.png",
      title: "Web Developer",
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minima repudiandae debitis fuga voluptas",
    },
    {
      img: "Icon-cog.png",
      title: "SEO Optimization",
      note: "Lorem ipsum dolor Delectus minima repudiandae sit amet consectetur adipisicing elit. Debitis fuga voluptas",
    },
    {
      img: "Icon-WordPress.png",
      title: "WordPress Developer",
      note: "Lorem ipsum dolor sit. Delectus minima repudiandae amet consectetur adipisicing elit debitis fuga voluptas",
    },
    {
      img: "Icon-desk-mob.png",
      title: "App Development",
      note: "Consectetur adipisicing elit. Lorem ipsum dolor sit amet. Delectus minima repudiandae debitis fuga voluptas",
    },
    {
      img: "Icon-biz.png",
      title: "Business Stragety",
      note: "Delectus minima repudiandae debitis fuga voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ]; */
  return (
    <>
      <section id="services" className="flex flex-col mt-30 mb-20 gap-20">
        <div className="w-75 m-auto">
          <div className="m-auto">
            <div className="subheader flex gap-5 align-center justify-content-center">
              <div className="flex round-outer justify-content-center align-center">
                <div className="round-inner"></div>
              </div>
              <h3>My Services</h3>
            </div>
            <div className="justify-items-center">
              <h2>SERVICES I OFFER</h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-15 mt-20">
            {services.map((value, index) => (
              <Service key={index} img={import.meta.env.VITE_API_URL + value.image} title={value.title} note={value.excerpt} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
