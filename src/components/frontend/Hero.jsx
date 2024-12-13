import React from 'react'

const Hero = () => {
  return (
    <>
    <section id="hero" className="bg-light-cream">
      <div className="flex justify-content-between align-center w-75 m-auto">
        <div className="w-50">
          <div className="subheader flex gap-5 align-center">
            <div className="flex round-outer justify-content-center align-center">
              <div className="round-inner"></div>
            </div>
            <h3>I am designer</h3>
          </div>
          <div className="header">
            <h1>Creative Design &amp; Web Solutions</h1>
          </div>
          <div className="content">
            <p style={{clear: 'both !important'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              est voluptatibus facere maiores enim rerum veritatis eius adipisci
              temporibus iure, sequi repudiandae amet officiis voluptatum
              dolorum accusamus ratione perferendis dolores.
            </p>
            <a className="btn btn-orange mt-20" href="#">Download My CV</a>
          </div>
        </div>
        <div>
          <img
            className="hero-image"
            src="./images/image-001.png"
            alt="hero image"
          />
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero