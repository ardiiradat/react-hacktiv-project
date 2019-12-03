import React from "react";
import PropTypes from "prop-types";

const pStyle = {
  padding: "20rem 0"
};

function Home() {
  return (
    <React.Fragment>
      <div class="banner-area relative" id="home">
        <div class="overlay overlay-bg"></div>
        <div class="container">
          <div
            class="row fullscreen d-flex align-items-center justify-content-center"
            style={pStyle}
          >
            <div class="banner-content col-lg-12 col-md-12">
              <h6 class="text-uppercase">
                Don’t look further, here is the key
              </h6>
              <h1>We’re Hotel & Resort Consultant</h1>
              <p class="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et <br /> dolore magna
                aliqua. Ut enim ad minim. sed do eiusmod tempor incididunt.
              </p>
              <a href="#" class="primary-btn header-btn text-uppercase">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="cat-area section-gap" id="feature">
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
      </div>
      <div class="home-about-area section-gap" id="about">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-12 col-md-12 text-center">
              <h1>We’ve made a life that will change you</h1>
              <p class="sub">
                We are here to listen from you deliver exellence
              </p>
              <p class="pb-20">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod temp or incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
              </p>
              <a class="primary-btn" href="#">
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="service-area section-gap" id="service">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 pb-30 header-text text-center">
              <h1 class="mb-10">Our Capturing Market Sectors</h1>
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
      </div>
    </React.Fragment>
  );
}

export default Home;
