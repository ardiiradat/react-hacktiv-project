import React from "react";
import PropTypes from "prop-types";

const heightStyle = {
  height: "50vh"
};

export class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section class="banner-area relative" id="home" style={heightStyle}>
          <div class="overlay overlay-bg"></div>
          <div class="container">
            <div class="row d-flex align-items-center justify-content-center">
              <div class="about-content col-lg-12">
                <h1 class="text-white">Services</h1>
              </div>
            </div>
          </div>
        </section>
        <section class="service-area section-gap" id="service">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-12 pb-30 header-text text-center">
                <h1 class="mb-10">Our Offered Services to you</h1>
                <p>Who are in extremely love with eco friendly system..</p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="single-service">
                  <div class="thumb">
                    <img src="img/s1.jpg" alt="" />
                  </div>
                  <h4>Hotel & Resort</h4>
                  <p>
                    inappropriate behavior is often laughed off as “boys will be
                    boys,” women face higher conduct women face higher conduct.
                  </p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-service">
                  <div class="thumb">
                    <img src="img/s2.jpg" alt="" />
                  </div>
                  <h4>Tour & Travel</h4>
                  <p>
                    inappropriate behavior is often laughed off as “boys will be
                    boys,” women face higher conduct women face higher conduct.
                  </p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-service">
                  <div class="thumb">
                    <img src="img/s3.jpg" alt="" />
                  </div>
                  <h4>Restaurant</h4>
                  <p>
                    inappropriate behavior is often laughed off as “boys will be
                    boys,” women face higher conduct women face higher conduct.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="cat-area section-gap aboutus-cat" id="feature">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="single-cat d-flex flex-column">
                  <a href="#" class="hb-sm-margin mx-auto d-block">
                    <span class="hb hb-sm inv hb-facebook-inv">
                      <span class="lnr lnr-magic-wand"></span>
                    </span>
                  </a>
                  <h4 class="mb-20">Maintenance</h4>
                  <p>
                    inappropriate behavior is often laughed off as “boys will be
                    boys,” women face higher conduct standards especially in the
                    workplace. That’s why.
                  </p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-cat">
                  <a href="#" class="hb-sm-margin mx-auto d-block">
                    <span class="hb hb-sm inv hb-facebook-inv">
                      <span class="lnr lnr-rocket"></span>
                    </span>
                  </a>
                  <h4 class="mt-40 mb-20">Residental Service</h4>
                  <p>
                    inappropriate behavior is often laughed off as “boys will be
                    boys,” women face higher conduct standards especially in the
                    workplace. That’s why.
                  </p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-cat">
                  <a href="#" class="hb-sm-margin mx-auto d-block">
                    <span class="hb hb-sm inv hb-facebook-inv">
                      <span class="lnr lnr-bug"></span>
                    </span>
                  </a>
                  <h4 class="mt-40 mb-20">Commercial Service</h4>
                  <p>
                    inappropriate behavior is often laughed off as “boys will be
                    boys,” women face higher conduct standards especially in the
                    workplace. That’s why.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

Login.propTypes = {};

export default Login;
