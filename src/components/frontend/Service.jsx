import React from "react";

const Service = ({ img, title, note }) => {
  return (
    <>
      <div className="box flex flex-col text-center">
        <img className="icon m-auto" src={img} />
        <h4 className="mt-15">{title}</h4>
        <p className="mt-5">{note}</p>
      </div>
    </>
  );
};

export default Service;
