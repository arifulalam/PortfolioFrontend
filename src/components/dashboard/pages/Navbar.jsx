import React, { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [navbar, setNavbar] = useState([]);
  const [menuLabel, setMenuLabel] = useState("");
  const [menuLink, setMenuLink] = useState("");

  const api_url = import.meta.env.VITE_API_URL;

  const handleLogoUpload = () => {};

  const handleMenuItemAdd = (e) => {
    e.preventDefault();

    if (menuLabel != "" && menuLink != "") {
      let menu = {
        menuLabel: menuLabel,
        menuLink: menuLink,
      };

      if(navbar.length > 0 && navbar.find(f => f.menuLabel == menu.menuLabel) != null){
        alert('Menu item already added. Please, try another.');
        return;
      }

      axios
        .post(`${api_url}header`, menu)
        .then((result) => {
          let status = result.data.status;

          if (status.code == 200) {
            setNavbar((navbar) => [...navbar, ...[result.data.data]]);
            setMenuLabel("");
            setMenuLink("");
          } else {
            alert(status.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Menu label and link should not be empty. Try again.");
    }
  };

  useEffect(() => {
    const fetch = async () => {
      let result = await axios.get(`${api_url}header`);
      setNavbar(result.data.data);
    };
    fetch();
  }, []);

  const handleMenuItemDelete = (id) => {
    let _delete = async (id) => {
      console.log(id);
      let result = await axios.delete(`${api_url}header/${id}`);
      setNavbar(() => navbar.filter((o) => o._id !== result.data.response._id));
    };
    _delete(id);
  };

  const handleContactButton = () => {};

  return (
    <>
      <h2>Navbar Settings</h2>
      <div className="flex flex-col pt-10">
        <h4>Site Logo</h4>
        <form className="mt-10">
          <label className="border-light-orange p-5 mr-5 border-radius-5">
            <input type="file" name="sitelogo" accept=".jpg, .jpeg, .png" />
          </label>
          <button className="btn btn-sm btn-orange" onClick={handleLogoUpload}>
            Upload
          </button>
        </form>
      </div>

      <div className="flex flex-col pt-10">
        <h4>Header Menu</h4>

        <form className="flex flex-row gap-5" onSubmit={handleMenuItemAdd}>
          <div className="flex flex-col w-33">
            <label>Menu Label:</label>
            <input
              className="p-10 border-radius-5 border-light-orange"
              type="text"
              name="menuLabel"
              id="menuLabel"
              placeholder="Menu Label"
              onChange={(e) => setMenuLabel(e.target.value)}
              value={menuLabel}
            />
          </div>

          <div className="flex flex-col w-33">
            <label>Menu Link:</label>
            <input
              className="p-10 border-radius-5 border-light-orange"
              type="text"
              name="menuLink"
              id="menuLink"
              placeholder="Menu Link"
              onChange={(e) => setMenuLink(e.target.value)}
              value={menuLink}
            />
          </div>

          <div className="flex flex-col pt-25 w-33">
            <button
              className="btn btn-sm btn-orange p-20"
            >
              Add
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col pt-10">
        <h4>Contact Button</h4>
        <div>
          <label>
            <input type="checkbox" onClick={handleContactButton} /> Show?
          </label>
        </div>
      </div>

      <div className="w-100 mt-15">
        <table className="w-100 border-light-orange border-radius-5 p-5">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Menu Label</th>
              <th>Menu Link</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {navbar.map((value, index) => (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td>{value.menuLabel}</td>
                <td>{value.menuLink}</td>
                <td>
                  <div className="flex flex-row gap-5">
                    <button type="button" className="btn btn-sm btn-orange p-5 w-50">
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-red p-5 w-50"
                      onClick={() => handleMenuItemDelete(value._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Navbar;
