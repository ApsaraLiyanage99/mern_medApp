import React from "react";

function About() {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="/assets/med1.jpg" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0 ">About Us</h3>
              <h1 className="display-6 mb-2">
                Who <b>We</b> Are
              </h1>
              <hr className="w-50" />
              <div className="lead mb-4">
                We take pride in introducing our highly skilled and
                compassionate healthcare professionals who are here to guide you
                on your path to better health. Our team consists of doctors,
                nurses, specialists, and support staff who share a common goal:
                to ensure your well-being
              </div>
              <button className="btn btn-success rounded-pill px-4 py-2">
                Join Today
              </button>
              <button className="btn btn-outline-success rounded-pill px-4 py-2 ms-2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
