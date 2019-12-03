import React from "react";
import PropTypes from "prop-types";

const heightStyle = {
  height: "50vh"
};

export class Join extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section class="banner-area relative" id="home" style={heightStyle}>
          <div class="overlay overlay-bg"></div>
          <div class="container">
            <div class="row d-flex align-items-center justify-content-center">
              <div class="about-content col-lg-12">
                <h1 class="text-white">Contact Us</h1>
              </div>
            </div>
          </div>
        </section>
        <section class="contact-page-area section-gap">
          <div class="container">
            <div class="row">
              <div class="map-wrap" id="map"></div>
              <div class="col-lg-4 d-flex flex-column address-wrap">
                <div class="single-contact-address d-flex flex-row">
                  <div class="icon">
                    <span class="lnr lnr-home"></span>
                  </div>
                  <div class="contact-details">
                    <h5>Jakarta, Indonesia</h5>
                    <p>56/8, Lorem ipsum</p>
                  </div>
                </div>
                <div class="single-contact-address d-flex flex-row">
                  <div class="icon">
                    <span class="lnr lnr-phone-handset"></span>
                  </div>
                  <div class="contact-details">
                    <h5>00 (880) 9865 562</h5>
                    <p>Mon to Fri 9am to 6 pm</p>
                  </div>
                </div>
                <div class="single-contact-address d-flex flex-row">
                  <div class="icon">
                    <span class="lnr lnr-envelope"></span>
                  </div>
                  <div class="contact-details">
                    <h5>support@codethemes.com</h5>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-8">
                <form
                  class="form-area "
                  id="myForm"
                  action="mail.php"
                  method="post"
                  class="contact-form text-right"
                >
                  <div class="row">
                    <div class="col-lg-6 form-group">
                      <input
                        name="name"
                        placeholder="Enter your name"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your name'"
                        class="common-input mb-20 form-control"
                        required=""
                        type="text"
                      />

                      <input
                        name="email"
                        placeholder="Enter email address"
                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email address'"
                        class="common-input mb-20 form-control"
                        required=""
                        type="email"
                      />

                      <input
                        name="subject"
                        placeholder="Enter your subject"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your subject'"
                        class="common-input mb-20 form-control"
                        required=""
                        type="text"
                      />
                      <div class="mt-20 alert-msg"></div>
                    </div>
                    <div class="col-lg-6 form-group">
                      <textarea
                        class="common-textarea form-control"
                        name="message"
                        placeholder="Messege"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Messege'"
                        required=""
                      ></textarea>
                      <button class="genric-btn primary circle mt-30">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

Join.propTypes = {};

export default Join;
