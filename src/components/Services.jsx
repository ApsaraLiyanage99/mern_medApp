import React from "react";

function Services() {
  return (
    <div>
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Our Services</h3>
              <h1 className="display-6 text-center mb-4">
                Our <b>Awesome</b> Services
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 my-4">
              <div class="card p-3 ">
                {/* <img src="..." class="card-img-top" alt="..." /> */}
                <div class="card-body text-center">
                  <i className="fa fa-cog fa-4x mb-4 text-success"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">
                    Highly Customizable
                  </h5>
                  <p class="card-text lead">
                    we understand that each patient is unique. That's why our
                    healthcare services are highly customizable to meet your
                    individual needs and preferences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-4">
              <div class="card p-3 ">
                {/* <img src="..." class="card-img-top" alt="..." /> */}
                <div class="card-body text-center">
                  <i className="fa fa-money fa-4x mb-4 text-success"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">Fair Payments</h5>
                  <p class="card-text lead">
                    A quality healthcare should be accessible to
                    everyone. Our transparent and fair payment options ensure
                    that you receive top-notch medical care.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-4">
              <div class="card p-3 ">
                {/* <img src="..." class="card-img-top" alt="..." /> */}
                <div class="card-body text-center">
                  <i className="fa fa-laptop fa-4x mb-4 text-success"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">
                    Best Quality equipments
                  </h5>
                  <p class="card-text lead">
                    We invest in state-of-the-art medical equipment to provide
                    accurate diagnostics and treatments, ensuring your health is
                    in good hands.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-4">
              <div class="card p-3 ">
                {/* <img src="..." class="card-img-top" alt="..." /> */}
                <div class="card-body text-center">
                  <i className="fa fa-mobile fa-4x mb-4 text-success"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">Flexible</h5>
                  <p class="card-text lead">
                    Our flexible scheduling and service options are designed to
                    accommodate your busy life, so you can get the care you need
                    when it's convenient for you
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-4">
              <div class="card p-3 ">
                {/* <img src="..." class="card-img-top" alt="..." /> */}
                <div class="card-body text-center">
                  <i className="fa fa-users fa-4x mb-4 text-success"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">Friendliness</h5>
                  <p class="card-text lead">
                    A friendly smile can change the patient mind.Our staff is
                    dedicated to creating a welcoming and supportive environment
                    where you feel like family
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-4">
              <div class="card p-3 ">
                {/* <img src="..." class="card-img-top" alt="..." /> */}
                <div class="card-body text-center">
                  <i className="fa fa-star-o fa-4x mb-4 text-success"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">Caring</h5>
                  <p class="card-text lead">
                    Caring isn't just a service; it's our core value. We
                    genuinely care about your health and well-being. Your health
                    and comfort are our top priorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
