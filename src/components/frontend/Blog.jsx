import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import axios from "axios";
import moment from 'moment';

const Blog = () => {
  const [blog, setBlog] = useState([]);

  const api_endpoint = import.meta.env.VITE_API_URL + "blog";

  useEffect(() => {
    const fetch = async () => {
      let result = await axios.get(api_endpoint);
      setBlog(result.data.data);
    };
    fetch();
  }, []);

  return (
    <>
      <section id="blog" className="flex flex-col mt-30 pt-20 pb-20">
        <div className="w-75 m-auto mt-30">
          <div className="m-auto">
            <div className="subheader flex gap-5 align-center justify-content-center">
              <div className="flex round-outer justify-content-center align-center">
                <div className="round-inner"></div>
              </div>
              <h3>My Blog</h3>
            </div>
            <div className="justify-items-center">
              <h2>LATEST BLOG</h2>
            </div>
          </div>
          <div className="flex justify-content-between mt-20 gap-20">
            {blog.map((value, index) => (
              <BlogPost key={index}
                img={import.meta.env.VITE_API_URL + value.image}
                title={value.title}
                date={moment(value.createdOn).format('ddd d MMM, yyyy')}
                link=""
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
