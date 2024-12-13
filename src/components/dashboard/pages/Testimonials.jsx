import React, { useEffect, useState } from "react";
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

  //console.log(testimonial);

  const handleTestimonial = (e) => {
    e.preventDefault();

    //https://stackoverflow.com/a/67233236
    const data = Object.fromEntries(new FormData(e.target).entries());

    axios
      .post(api_endpoint, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((result) => {
        //console.log(result.data.data.image);
        setTestimonial((portfolio) => [...portfolio, ...[result.data.data]]);
        e.target.reset();
      })
      .catch((error) => console.log(error));
  };

  let handleDelete = (id) => {
    let _delete = async (id) => {
      let result = await axios.delete(`${api_endpoint}/${id}`);
      setTestimonial(() =>
        testimonial.filter((o) => o._id !== result.data.response._id)
      );
    };
    _delete(id);
  };

  return (
    <>
      <h2>Testimonials Settings</h2>
      <div className="flex flex-col pt-10">
        <form className="flex flex-col gap-5" onSubmit={handleTestimonial}>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col w-33">
              <label>Avatar:</label>
              <input
                type="file"
                name="image"
                id="image"
                className="p-5 border-light-orange border-radius-5"
              />
            </div>
            <div className="flex flex-col w-33">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                className="p-5 border-light-orange border-radius-5"
              />
            </div>
            <div className="flex flex-col w-33">
              <label>Designation, Company:</label>
              <input
                type="text"
                name="comp_desig"
                id="comp_desig"
                className="p-5 border-light-orange border-radius-5"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label>Excerpt:</label>
            <textarea
              name="excerpt"
              id="excerpt"
              rows={5}
              className="p-5 border-light-orange border-radius-5"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <button className="btn btn-sm btn-orange w-33">Save</button>
          </div>
        </form>
      </div>
      <div className="w-100 border-light-orange border-radius-5 p-5 mt-15">
        <table className="w-100">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Designation, Company</th>
              <th>Excerpt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {testimonial.map((value, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={import.meta.env.VITE_API_URL + value.avatar}
                    alt={value.name}
                  />
                </td>
                <td>{value.name}</td>
                <td>{value.comp_desig}</td>
                <td style={{maxWidth: "100px"}}>{value.excerpt}</td>
                <td>
                  <button
                    className="btn btn-sm btn-red"
                    onClick={() => handleDelete(value._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Testimonials;
