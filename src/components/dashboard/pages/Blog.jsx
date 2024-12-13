import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

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

  //console.log(blog);

  const handleBlog = (e) => {
    e.preventDefault();

    //https://stackoverflow.com/a/67233236
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data);

    axios
      .post(api_endpoint, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((result) => {
        setBlog((blog) => [...blog, ...[result.data.data]]);
        e.target.reset();
      })
      .catch((error) => console.log(error));
  };

  let handleDelete = (id) => {
    let _delete = async (id) => {
      let result = await axios.delete(`${api_endpoint}/${id}`);
      setBlog(() =>
        blog.filter((o) => o._id !== result.data.response._id)
      );
    };
    _delete(id);
  };

  return (
    <>
      <h2>Blog</h2>
      <form className="flex flex-col pt-10" onSubmit={handleBlog}>
        <div className="flex flex-col">
          <label>Cover</label>
          <input
            type="file"
            name="image"
            id="image"
            className="border-light-orange border-radius-5 p-5"
          />
        </div>
        <div className="flex flex-col">
          <label>Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="border-light-orange border-radius-5 p-5"
          />
        </div>
        <div className="flex flex-col">
          <label>Content</label>
          <textarea
            name="content"
            id="content"
            rows={7}
            className="border-light-orange border-radius-5 p-5"
          ></textarea>
        </div>
        <div className="flex flex-col w-25 mt-10">
          <button
            type="submit"
            name="save"
            id="save"
            className="btn btn-sm btn-orange border-radius-5 w-100"
          >
            Save
          </button>
        </div>
      </form>
      <div className="mt-10">
        <h4>Posts</h4>
        <table className="w-100 border-light-orange border-radius-5">
          <thead>
            <tr>
              <th className="border-light-orange">SL</th>
              <th className="border-light-orange">Cover</th>
              <th className="border-light-orange">Title</th>
              <th className="border-light-orange">Created On</th>
              <th className="border-light-orange">Action</th>
            </tr>
          </thead>
          <tbody>
            {blog.map((value, index) => (
              <tr key={index}>
                <td className="border-light-orange text-center p-5">{index + 1}</td>
                <td className="border-light-orange m-auto w-120px p-5">
                  <img className="m-auto w-100px" src={import.meta.env.VITE_API_URL + value.image} alt={value.title}/>
                </td>
                <td className="border-light-orange p-5">{value.title}</td>
                <td className="border-light-orange w-120px p-5">{moment(value.createdOn).format('dd MMM, yyyy')}</td>
                <td className="border-light-orange w-75px p-5">
                  <button className="btn btn-sm btn-red" onClick={() => handleDelete(value._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Blog;
