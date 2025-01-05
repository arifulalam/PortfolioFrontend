import React, { useEffect, useState } from "react";
import axios from "axios";

const Hero = () => {
  const [hero, setHero] = useState(null);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [showSubtitleMark, setShowSubtitleMark] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  const api_endpoint = import.meta.env.VITE_API_URL + "hero";

  useEffect(() => {
    const fetch = async () => {
      let result = await axios.get(api_endpoint);
      setHero(result.data.data[0]);
    };
    fetch();
  }, []);

  const handleHero = (e) => {
    e.preventDefault();

    //https://stackoverflow.com/a/67233236
    const data = Object.fromEntries(new FormData(e.target).entries());

    axios
      .post(api_endpoint, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((result) => {
        setHero((hero) => result.data.data[0]);
        e.target.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h2>Hero Settings</h2>
      <form className="flex flex-col" onSubmit={handleHero}>
        <div className="flex flex-row pt-10 gap-5 flex-wrap w-100">
          <div className="flex flex-col w-33">
            <label className="mb-5">Title</label>
            <input
              className="p-10 border-light-orange border-radius-5"
              type="text"
              name="title"
              id="title"
              placeholder="Hero Title"
              defaultValue={hero != null ? hero.title : title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-33">
            <label className="mb-5">Sub Title</label>
            <input
              className="p-10 border-light-orange border-radius-5"
              type="text"
              name="subtitle"
              id="subtitle"
              placeholder="Hero Subtitle"
              defaultValue={hero != null ? hero.subtitle : subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-33">
            <label className="mb-5">Hero Image</label>
            <input
              className="p-10 border-light-orange border-radius-5"
              type="file"
              name="image"
              id="image"
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
              placeholder="Hero Title"
              defaultValue={hero != null ? hero.content : content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
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
                defaultChecked={showSubtitleMark}
                onChange={() => setShowSubtitleMark(!showSubtitleMark)}
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
                defaultChecked={showDownloadButton}
                onChange={() => setShowDownloadButton(!showDownloadButton)}
              />{" "}
              &nbsp; Show Download Button?
            </label>
          </div>
        </div>
        <div className="flex flex-row pt-10 gap-5 flex-wrap">
          <div className="flex flex-col w-33">
            <input
              type="hidden"
              defaultValue={hero != null ? hero._id : ""}
              name="id"
              id="id"
            />
            <button type="submit" className="btn btn-sm btn-orange">
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Hero;
