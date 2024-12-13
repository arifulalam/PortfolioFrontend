import React, { useEffect, useState } from "react";
import axios from "axios";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  const api_endpoint = import.meta.env.VITE_API_URL + "portfolio";

  useEffect(() => {
    const fetch = async () => {
      let result = await axios.get(`${api_endpoint}`);
      setPortfolio(result.data.data);
    };
    fetch();
  }, []);

  //console.log(portfolio);

  const handlePortfolio = (e) => {
    e.preventDefault();

    //https://stackoverflow.com/a/67233236
    const data = Object.fromEntries(new FormData(e.target).entries());

    axios
      .post(api_endpoint, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((result) => {
        console.log(result.data.data.image);
        setPortfolio((portfolio) => [...portfolio, ...[result.data.data]]);
      })
      .catch((error) => console.log(error));
  };

  let handleDelete = (id) => {
    let _delete = async (id) => {
      let result = await axios.delete(`${api_endpoint}/${id}`);
      setPortfolio(() => portfolio.filter((o) => o._id !== result.data.response._id));
    };
    _delete(id);
  };

  return (
    <>
      <h2>Portfolio Settings</h2>
      <div className="flex flex-col pt-10">
        <form className="flex flex-row gap-5" onSubmit={handlePortfolio}>
          <input
            type="file"
            name="portfolio_image"
            className="border-light-orange border-radius-5 p-5 w-75"
            id="portfolio_image"
            accept="image/*"
          />
          <button className="btn btn-sm btn-orange">Upload</button>
        </form>
      </div>
      <div className="flex flex-row flex-wrap gap-5 justify-content-start">
        {portfolio.map((value, index) => (
          <div key={index} className="relative">
            <img
              src={import.meta.env.VITE_API_URL + value.image}
              className="p-5 w-200px"
            />
            <button
              className="btn btn-sm btn-red absolute top-5 right-5 font-size-20 px-10 py-0"
              style={{
                borderRadius: "50%",
              }}
              onClick={() => handleDelete(value._id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
