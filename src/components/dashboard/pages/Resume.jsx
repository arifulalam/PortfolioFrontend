import React, { useEffect, useState } from "react";
import axios from "axios";

const Resume = () => {
  const [resume, setResume] = useState([]);
  const [resumeGroup, setResumeGroup] = useState("");
  const [hide, setHide] = useState(true);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [excerpt, setExcerpt] = useState("");

  const api_endpoint = import.meta.env.VITE_API_URL + 'resume';

  const handleResume = (e) => {
    e.preventDefault();
    
    let _resume = {
      resumeGroup: resumeGroup,
      title: title,
      subtitle: subtitle,
      yearStart: startYear,
      yearEnd: endYear,
      excerpt: excerpt,
    }

    axios.post(api_endpoint, _resume).then((result) => {
      setResume((resume) => [...resume, ...[_resume]]);
    }).catch((error) => {
      console.log(error);
    })
  };

  useEffect(() => {
    const fetch = async () => {
      let result = await axios.get(api_endpoint);
      /*.then((result) => {
          setResume(() => result.data.data);
        })
        .catch((error) => {
          console.log(error);
        });*/
      setResume(result.data.data);
    };
    fetch();
  }, []);

  //also working
  /* let group = [
    ...new Set(
      resume.flatMap((object) =>
        ["resumeGroup"].map((element) => object[element])
      )
    ),
  ]; */
  let group = [
    ...new Set(resume.map(function(value) {
      return value.resumeGroup;
    }))
  ];

  let handleGroup = (e) => {
    let value = e.target.value;
    if (value == "new") {
      setHide(false);
      setResumeGroup("");
    } else {
      setResumeGroup(value);
    }
  };

  let handleResumeDelete = (id) => {
    let _delete = async (id) => {
      let result = await axios.delete(`${api_endpoint}/${id}`);
      setResume(() => resume.filter(o => o._id !== result.data.response._id));
    }
    _delete(id);
  }

  return (
    <>
      <h2>Resume Settings</h2>
      <div className="flex flex-col pt-10">
        <form className="flex flex-col gap-5" onSubmit={handleResume}>
          <div className="flex flex-col">
            <label>Group:</label>
            <select
              name="group"
              id="group"
              className="p-5 border-light-orange border-radius-5"
              onChange={handleGroup}
              style={hide ? { display: "block" } : { display: "none" }}
              value={resumeGroup}
            >
              <option value={0}>--select--</option>
              <option value="new">(+) Add New</option>
              {group.map((value, index) => (
                <option key={index}>{value}</option>
              ))}
            </select>
            <div
              className="flex flex-row gap-5"
              style={hide ? { display: "none" } : { display: "flex" }}
            >
              <div className="flex w-75">
                <input
                  type="text"
                  name="newGroup"
                  id="newGroup"
                  className="p-5 border-light-orange border-radius-5 w-100"
                  onChange={handleGroup}
                  value={resumeGroup}
                />
              </div>
              <div className="flex w-25">
                <button
                  className="btn btn-sm btn-red w-100"
                  onClick={(e) => {e.preventDefault(); setHide(true); setResumeGroup("")}}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col w-50">
              <label>Title:</label>
              <input
                type="text"
                name="title"
                id="title"
                className="p-5 border-light-orange border-radius-5"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-50">
              <label>Subtitle:</label>
              <input
                type="text"
                name="subtitle"
                id="subtitle"
                className="p-5 border-light-orange border-radius-5"
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col w-50">
              <label>Year (Start):</label>
              <input
                type="number"
                name="startYear"
                id="startYear"
                max={new Date().getFullYear()}
                min={1910}
                className="p-5 border-light-orange border-radius-5"
                onChange={(e) => setStartYear(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-50">
              <label>Year (End):</label>
              <input
                type="number"
                name="endYear"
                id="endYear"
                max={new Date().getFullYear()}
                min={1910}
                className="p-5 border-light-orange border-radius-5"
                onChange={(e) => setEndYear(e.target.value)}
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
              onChange={(e) => setExcerpt(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-col">
            <button type="submit" className="btn btn-sm btn-orange w-33">Save</button>
          </div>
        </form>
      </div>
      <div className="w-100 border-light-orange border-radius-5 p-5 mt-15">
        <table className="w-100">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Group</th>
              <th>Title</th>
              <th>Subtitle</th>
              <th>Start Year</th>
              <th>End Year</th>
              <th style={{ display: "none" }}>Excerpt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {resume.map((value, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.resumeGroup}</td>
                <td>{value.title}</td>
                <td>{value.subtitle}</td>
                <td className="text-center">{value.yearStart}</td>
                <td className="text-center">{value.yearEnd}</td>
                <td style={{ display: "none" }}>{value.excerpt}</td>
                <td className="text-center">
                  <button className="btn btn-orange btn-sm ml-5">EDIT</button>
                  <button className="btn btn-red btn-sm ml-5" onClick={() => handleResumeDelete(value._id)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Resume;
