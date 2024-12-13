import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="flex flex-col bg-black pt-40 pb-40">
      <div className="flex gap-20 w-75 white pt-20 pb-20 m-auto mt-30 mb-30">
        <div className="w-25 mr-10 jost-300">
          <img src="./images/Logo-inverse.png" alt="logo"/>
          <p className="mt-10">Odit dolore ea omnis cum repellendus! Sunt cupiditate sed numquam voluptatum quasi quae voluptatibus.</p>

          <h4 className="mt-25">hello@credesign.com</h4>
        </div>
        <div className="w-25">
          <h3 className="mb-20">Explore Links</h3>
          <ul className="flex flex-col gap-15 mt-20">
            <li>About</li>
            <li>Resume</li>
            <li>Portfolio</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="w-25">
          <h3 className="mb-20">My Services</h3>
          <ul className="flex flex-col gap-15 mt-20">
            <li>UI/UX Design</li>
            <li>Mobile App</li>
            <li>Graphics Design</li>
            <li>Web Developer</li>
          </ul>
        </div>
        <div className="w-25">
          <h3 className="mb-20">Follow Me</h3>
          <ul className="flex gap-10 mt-20 justify-content-between">
            <li><img src="./images/Icon-Facebook.png" alt="facebook"/></li>
            <li><img src="./images/Icon-Twitter.png" alt="facebook"/></li>
            <li><img src="./images/Icon-Dribbble.png" alt="facebook"/></li>
            <li><img src="./images/Icon-Behance.png" alt="facebook"/></li>
          </ul>
          <div className="flex gap-5 mt-15">
            <img src="./images/Icon-location-pin.png" className="w-15px"/>
            <p className="font-size-12 jost-300">202 Dog Hill Lane Beloit, KS 67420</p>
          </div>
          <div className="flex gap-5 mt-15">
            <img src="./images/Icon-hello.png" className="w-15px"/>
            <p className="font-size-12 jost-300">+88 (018) 19 53 2885</p>
          </div>
        </div>
      </div>
      <div className="flex w-75 m-auto mt-20 mb-20 white">
        <div className="w-75">
          All rights reserved &copy; 2024 credesign
        </div>
        <div className="flex flex-row w-25 justify-content-between">
          <div>Terms &amp; Conditions</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer