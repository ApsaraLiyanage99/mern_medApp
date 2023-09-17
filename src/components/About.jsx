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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis quibusdam, porro ut molestiae ratione voluptatum, iusto
                repellendus veniam sequi nostrum eum suscipit quaerat non magnam
                mollitia quod perspiciatis minus architecto. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Officiis quibusdam, porro
                ut molestiae ratione voluptatum, iusto repellendus veniam sequi
                nostrum eum suscipit quaerat non magnam mollitia quod
                perspiciatis minus architecto.
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
