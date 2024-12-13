import React from "react";

const Testimonial = ({ img, name, comp_desig, testimonial }) => {
  return (
    <>
      <div className="flex flex-col w-33 pt-5 pb-5 bg-light-cream border-radius-5">
        <div className="flex p-15 justify-content-center">
          <div className="w-25">
            <img src={img} alt={name} />
          </div>
          <div className="w-75">
            <h4>{name}</h4>
            <p>
              {comp_desig}
            </p>
          </div>
        </div>
        <div className="mt-10 p-15">
          <p>
            <q>{testimonial}</q>
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
