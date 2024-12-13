import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact" className="flex flex-col mt-30 pt-20 pb-20">
        <div className="w-75 m-auto mt-30">
          <div className="m-auto">
            <div className="subheader flex gap-5 align-center justify-content-center">
              <div className="flex round-outer justify-content-center align-center">
                <div className="round-inner"></div>
              </div>
              <h3>My Contact</h3>
            </div>
            <div className="justify-items-center">
              <h2>I WANT TO HEAR FROM YOU</h2>
            </div>
          </div>
          <div className="flex justify-content-between mt-20 gap-20">
            <div className="w-75 flex flex-col gap-20">
              <div className="flex gap-15">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-50 h-40 border-radius-5 border-light-orange p-10"
                />
                <input
                  type="text"
                  placeholder="Your email"
                  className="w-50 h-40 border-radius-5 border-light-orange p-10"
                />
              </div>
              <div className="flex gap-15">
                <input
                  type="text"
                  placeholder="Your phone"
                  className="w-50 h-40 border-radius-5 border-light-orange p-10"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-50 h-40 border-radius-5 border-light-orange p-10"
                />
              </div>
              <div className="flex gap-15">
                <textarea
                  placeholder="Your message"
                  className="resize-none h-120 border-light-orange border-radius-5 w-100 p-10"
                  row="30"
                ></textarea>
              </div>
              <div className="flex gap-15">
                <button className="btn btn-orange border-light-orange">
                  Send Me Message
                </button>
              </div>
            </div>
            <div className="w-25 flex flex-col ml-25">
              <div className="flex gap-15 mb-25">
                <div className="">
                  <img src="./images/Icon-location.png" />
                </div>
                <div>
                  <h3 className="line-height-30">Address</h3>
                  <p className="line-height-28 font-size-12">
                    202 Dog Hill Lane Beloit, KS 67420
                  </p>
                </div>
              </div>

              <div className="flex gap-15 mb-25">
                <div className="">
                  <img src="./images/Icon-phone.png" />
                </div>
                <div>
                  <h3 className="line-height-30">Phone</h3>
                  <p className="line-height-28 font-size-12">
                    +88 (018) 19 53 2885
                  </p>
                </div>
              </div>

              <div className="flex gap-15">
                <div className="">
                  <img src="./images/Icon-envelop.png" />
                </div>
                <div>
                  <h3 className="line-height-30">Email</h3>
                  <p className="line-height-28 font-size-12">
                    ariful-alam@hotmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
