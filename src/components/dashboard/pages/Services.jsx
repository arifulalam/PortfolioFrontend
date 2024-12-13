import React, { useEffect, useState } from "react";
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

  //console.log(testimonial);

  const handleServices = (e) => {
    e.preventDefault();

    //https://stackoverflow.com/a/67233236
    const data = Object.fromEntries(new FormData(e.target).entries());

    axios
      .post(api_endpoint, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((result) => {
        setServices((services) => [...services, ...[result.data.data]]);
        e.target.reset();
      })
      .catch((error) => console.log(error));
  };

  let handleDelete = (id) => {
    let _delete = async (id) => {
      let result = await axios.delete(`${api_endpoint}/${id}`);
      setServices(() =>
        services.filter((o) => o._id !== result.data.response._id)
      );
    };
    _delete(id);
  };

  return (
    <>
      <h2>Services Settings</h2>
      <div className="flex flex-col pt-10">
        <form className="flex flex-col gap-5" onSubmit={handleServices}>
          <div className="flex flex-col">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              className="p-5 border-light-orange border-radius-5"
            />
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
            <label>Image</label>
            <input
              type="file"
              name="image"
              id="image"
              className="p-5 border-light-orange border-radius-5"
            />
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
              <th className="border-light-orange">Serial</th>
              <th className="border-light-orange">Image</th>
              <th className="border-light-orange">Title</th>
              <th className="border-light-orange">Excerpt</th>
              <th className="border-light-orange">Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((value, index) => (
              <tr key={index}>
                <td className="text-center border-light-orange p-5">{index + 1}</td>
                <td className="text-center border-light-orange p-5">
                  <img
                    src={import.meta.env.VITE_API_URL + value.image}
                    alt={value.title}
                    className="m-auto"
                  />
                </td>
                <td className="border-light-orange p-5">{value.title}</td>
                <td className="border-light-orange p-5" style={{ maxWidth: "150px" }}>{value.excerpt}</td>
                <td className="text-center border-light-orange p-5" style={{ maxWidth: "50px" }}>
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

export default Services;
