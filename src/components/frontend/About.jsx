import React from 'react'

const About = () => {
  return (
    <>
    <section id="about-me" className="mt-30">
      <div
        className="flex flex-row-reverse justify-content-between align-center w-75 m-auto mt-30"
      >
        <div className="w-50">
          <div className="subheader flex gap-5 align-center">
            <div className="flex round-outer justify-content-center align-center">
              <div className="round-inner"></div>
            </div>
            <h3>About Me</h3>
          </div>
          <div className="header">
            <h2>I Can Design <br />Anything You Want</h2>
          </div>
          <div className="content">
            <p style={{clear: "both !important"}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              est voluptatibus facere maiores enim rerum veritatis eius adipisci
              temporibus iure, amet consectetur adipisicing elit. Ut culpa quasi
              soluta, nisi, eius, vitae possimus labore temporibus unde
              provident asperiores eaque eveniet saepe totam laborum itaque qui
              ea at?
            </p>
          </div>
          <div className="flex mt-20 gap-15">
            <div className="flex flex-row">
              <div className="mr-10">
                <img src="./images/Icon-tickmark.png" />
              </div>
              <div className="flex flex-col">
                <h3>350+</h3>
                <h3>Completed Project</h3>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="mr-10">
                <img src="./images/Icon-clock.png" />
              </div>
              <div className="flex flex-col">
                <h3>16+</h3>
                <h3>Years of Experience</h3>
              </div>
            </div>
          </div>

          <ul className="mt-20">
            <li className="mb-15">
              <img src="./images/Icon-tickmark-box.png" /> Work Simple and
              Clean Design
            </li>
            <li>
              <img src="./images/Icon-tickmark-box.png" /> New Idea and
              User Friendly Design
            </li>
          </ul>

          <div>
            <a className="btn btn-orange mt-20 clear" href="#">Download My CV</a>
          </div>
        </div>

        <div>
          <img
            className="hero-image"
            src="./images/image-002.png"
            alt="hero image"
          />
        </div>
      </div>
    </section>
    </>
  )
}

export default About