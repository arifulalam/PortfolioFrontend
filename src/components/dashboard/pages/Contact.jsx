import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Contact = () => {
  const [contact, setContact] = useState([]);

  const api_endpoint = import.meta.env.VITE_API_URL + "contact";

  useEffect(() => {
    const fetch = async () => {
      let result = await axios.get(api_endpoint);
      setContact(result.data.data);
    };
    fetch();
  }, []);

  //console.log(contact);

  let handleDelete = (id) => {
    let _delete = async (id) => {
      let result = await axios.delete(`${api_endpoint}/${id}`);
      setContact(() =>
        contact.filter((o) => o._id !== result.data.response._id)
      );
    };
    _delete(id);
  };
  return (
    <>
      <h2>Mails</h2>
      <div className="flex flex-col pt-10">
        <table className="w-100 border-light-orange border-radius-5 p-5">
          <thead>
            <tr>
              <th className="border-light-orange">Name</th>
              <th className="border-light-orange">Contact No</th>
              <th className="border-light-orange">Subject</th>
              <th className="border-light-orange">Received On</th>
              <th className="border-light-orange">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {contact.map((value, index) => (
              <>
                <tr>
                  <td className="border-light-orange p-5"><a href={`mailto:${value.email}`} title={value.email}>{value.name}</a></td>
                  <td className="border-light-orange p-5">{value.contactNo}</td>
                  <td className="border-light-orange p-5">{value.subject}</td>
                  <td className="border-light-orange p-5">
                    {moment(value.receivedOn).format("d MMM, yyyy hh:mm a")}
                  </td>
                  <td className="border-light-orange p-5">
                    <button className="btn btn-sm btn-red" onClick={() => handleDelete(value._id)}>Delete</button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contact;
