import React, { useEffect, useState } from "react";
import axios from "axios";

const Partners = () => {
  const [partner, setPartner] = useState([]);

  const api_endpoint = import.meta.env.VITE_API_URL + "partner";

  useEffect(() => {
    const fetch = async () => {
      let result = await axios.get(api_endpoint);
      setPartner(result.data.data);
    };
    fetch();
  }, []);

  const handlePartner = (e) => {
    e.preventDefault();

    //https://stackoverflow.com/a/67233236
    const data = Object.fromEntries(new FormData(e.target).entries());

    console.log(data);
    //return;


    axios
      .post(api_endpoint, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((result) => {
        console.log(result.data.data.image);
        setPartner((partner) => [...partner, ...[result.data.data]]);
        e.target.reset();
      })
      .catch((error) => console.log(error));
  };

  let handleDelete = (id) => {
    let _delete = async (id) => {
      let result = await axios.delete(`${api_endpoint}/${id}`);
      setPartner(() =>
        partner.filter((o) => o._id !== result.data.response._id)
      );
    };
    _delete(id);
  };

  return (
    <>
      <h2>Partners Settings</h2>
      <div className="flex flex-col pt-10">
        <form className="flex flex-col gap-5" onSubmit={handlePartner}>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col w-33">
              <label>Partner Logo:</label>
              <input
                type="file"
                name="image"
                id="image"
                className="p-5 border-light-orange border-radius-5"
              />
            </div>
            <div className="flex flex-col w-33">
              <label>Partner Name:</label>
              <input
                type="text"
                name="partnerName"
                id="partnerName"
                className="p-5 border-light-orange border-radius-5"
              />
            </div>
            <div className="flex flex-col w-33 pt-20">
              <button className="btn btn-sm btn-orange">Save</button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-100 border-light-orange mt-15 p-5 flex flex-wrap gap-5 justify-content-start">
        {partner.map((value, index) => (
          <div key={index} className="w-20 h-20" style={{ position: "relative" }}>
            <img src={import.meta.env.VITE_API_URL + value.image} alt="" />
            <button
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                backgroundColor: "gray",
                color: "white",
                margin: "auto",
                padding: "5px 10px",
                cursor: "pointer",
              }}
              onClick={() => handleDelete(value._id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Partners;
