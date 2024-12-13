import React from "react";

const About = () => {
  const handleAbout = () => {};

  const yearNow = new Date().getFullYear();

  return (
    <>
      <h2>About Settings</h2>
      <div className="flex flex-row pt-10 gap-5 flex-wrap">
        <div className="flex flex-col w-33">
          <label className="mb-5">Title</label>
          <input
            className="p-10 border-light-orange border-radius-5"
            type="text"
            name="title"
            id="title"
            placeholder="About Title"
          />
        </div>
        <div className="flex flex-col w-33">
          <label className="mb-5">Sub Title</label>
          <input
            className="p-10 border-light-orange border-radius-5"
            type="text"
            name="subtitle"
            id="subtitle"
            placeholder="About Sub Title"
          />
        </div>
        <div className="flex flex-col w-33">
          <label className="mb-5">About Image</label>
          <input
            className="p-10 border-light-orange border-radius-5"
            type="file"
            name="aboutimage"
            id="aboutimage"
          />
        </div>
      </div>
      <div className="flex flex-row pt-10 gap-5 flex-wrap">
        <div className="flex flex-col w-100">
          <label className="mb-5">Content</label>
          <textarea
            className="p-10 border-light-orange border-radius-5"
            rows={5}
            name="content"
            id="content"
            placeholder="About Content"
          ></textarea>
        </div>
      </div>
      <div className="flex flex-row pt-10 gap-5 flex-wrap">
        <div className="flex flex-col w-33">
          <label className="mb-5">Completed Projects</label>
          <input
            className="p-10 border-light-orange border-radius-5"
            type="number"
            name="projects"
            id="projects"
            placeholder="Number of projects done & working on"
          />
        </div>
        <div className="flex flex-col w-33">
          <label className="mb-5">Started Working</label>
          <input
            className="p-10 border-light-orange border-radius-5"
            type="number"
            max={yearNow}
            min={1990}
            name="WorkingStartedOn"
            id="subWorkingStartedOn"
            placeholder="Working started on"
          />
        </div>
      </div>
      <div className="flex flex-row pt-10 gap-5 flex-wrap">
        <div className="flex flex-col w-33">
          <label className="mb-5">
            <input
              className="p-10 border-light-orange border-radius-5"
              type="checkbox"
              name="showSubtitleMark"
              id="showSubtitleMark"
            />{" "}
            &nbsp; Show Subtitle Marker?
          </label>
        </div>
        <div className="flex flex-col w-33">
          <label className="mb-5">
            <input
              className="p-10 border-light-orange border-radius-5"
              type="checkbox"
              name="showDownloadButton"
              id="showDownloadButton"
            />{" "}
            &nbsp; Show Download Button?
          </label>
        </div>
      </div>
      <div className="flex flex-row pt-10 gap-5 flex-wrap">
        <div className="flex flex-col w-33">
          <button
            type="button"
            className="btn btn-sm btn-orange"
            onClick={handleAbout}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
