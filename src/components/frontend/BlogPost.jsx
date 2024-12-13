import React from "react";

const BlogPost = ({img, date, title, link}) => {
  return (
    <>
      <div className="flex flex-col w-33 border-light-orange border-radius-5">
        <img src={img} />
        <div className="p-25">
          <span className="font-size-12 grey">{date}</span>
          <h4 className="pt-10">{title}</h4>
          <div className="flex flex-row justify-items-center pt-15">
            <span className="orange font-size-10">Read More</span>
            <img className="w-15px" src="./images/Icon-arrow.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
