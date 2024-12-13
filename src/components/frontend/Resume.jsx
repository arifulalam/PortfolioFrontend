import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Resume = () => {
  const [resume, setResume] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      let result = await axios.get("http://localhost:8000/resume");
      setResume(result.data.data);
    };
    fetch();
  }, []);

  let group = [
    ...new Set(
      resume.flatMap((object) =>
        ["resumeGroup"].map((element) => object[element])
      )
    ),
  ]

  console.log(group);
  console.log(resume);

  return (
    <>
    <section
      id="experience"
      className="flex flex-col mt-30 pt-20 pb-20 bg-light-cream"
    >
      <div className="w-75 m-auto mt-30 mb-30">
        <div className="m-auto">
          <div className="subheader flex gap-5 align-center justify-content-center">
            <div className="flex round-outer justify-content-center align-center">
              <div className="round-inner"></div>
            </div>
            <h3>My Resume</h3>
          </div>
          <div className="justify-items-center">
            <h2>10+ YEARS OF EXPERIENCES</h2>
          </div>
        </div>
        <div className="flex flex-col gap-15 mt-20">
          {group.map((value, index) => (
            <div key={index} className='flex flex-col gap-15 mt-20'>
              <h4>{value}</h4>
              <div className="flex justify-content-start gap-15 flex-wrap">
              {resume.map((v, k) => {
                if(v.resumeGroup == value){
                  return (
                    <div key={k} className="w-33 bg-white p-10 border-radius-5 flex-1_3">
                      <h4>{v.title}</h4>
                      <p>{v.subtitle} ({v.yearStart} - {v.yearEnd})</p>
                      <p className="mt-10">
                        {v.excerpt}
                      </p>
                    </div>
                  )
                }
              })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Resume