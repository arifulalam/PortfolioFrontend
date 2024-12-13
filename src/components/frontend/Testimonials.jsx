import React, { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import axios from "axios";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([]);

  const api_endpoint = import.meta.env.VITE_API_URL + "testimonials";

  useEffect(() => {
    const fetch = async () => {
      let result = await axios.get(api_endpoint);
      setTestimonial(result.data.data);
    };
    fetch();
  }, []);

  console.log(testimonial);

  return (
    <>
      <section id="client-feedback" className="flex flex-col mt-30 pt-20 pb-20">
        <div className="w-75 m-auto mt-30">
          <div className="m-auto">
            <div className="subheader flex gap-5 align-center justify-content-center">
              <div className="flex round-outer justify-content-center align-center">
                <div className="round-inner"></div>
              </div>
              <h3>Testimonials</h3>
            </div>
            <div className="justify-items-center">
              <h2>CLIENT FEEDBACK</h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 mt-20">
            {testimonial.map((value, index) => (
              <Testimonial
                key={index}
                img={import.meta.env.VITE_API_URL + value.avatar}
                name={value.name}
                comp_desig={value.comp_desig}
                testimonial={value.excerpt}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
