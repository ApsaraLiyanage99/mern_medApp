import React from "react";
import { NavLink } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Feels the healthier breathe
              </h1>
              <p className="lead text-center fs-5 mb-5 text-white">
                Welcome to HealthHub Medicare Center, where your health and
                well-being take center stage. Our commitment to providing
                exceptional healthcare services is at the heart of everything we
                do. At HealthHub Medicare Center, our mission is clear: to
                prioritize your health, ensuring you receive the highest
                standard of care tailored to your unique needs. We believe that
                every individual deserves access to compassionate,
                patient-centric healthcare that fosters well-being and recovery.
              </p>
              <div className="buttons d-flex justify-content-center">
                <NavLink
                  to="/contact"
                  className="btn btn-light me-4 rounded-pill px-4 py-2"
                >
                  Get Channel
                </NavLink>
                <NavLink
                  to="/services"
                  className="btn btn-outline-light rounded-pill px-4 py-2"
                >
                  Our Services
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default Home;
