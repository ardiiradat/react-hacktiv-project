import React from "react";
import PropTypes from "prop-types";

export class NextMeetUp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row mt-5">
          <div className="col-md-12">
            <h2>Next Meetup</h2>
          </div>
          <div className="col-md-12">
            <div className="jumbotron jumbotron-fluid mx-3 my-3">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <p>Awesome Meetup and Event</p>
                    <p className="color-grey">25 Januari 2019</p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                      <br />
                      <br />
                      Why do we use it? It is a long established fact that a
                      reader will be distracted by the readable content of a
                      page when looking at its layout. The point of using Lorem
                      Ipsum is that it has a more-or-less normal distribution of
                      letters, as opposed to using 'Content here, content here',
                      making it look like readable English. Many desktop
                      publishing packages and web page editors now use Lorem
                      Ipsum as their default model text, and a search for 'lorem
                      ipsum' will uncover many web sites still in their infancy.
                      Various versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

NextMeetUp.propTypes = {};

export default NextMeetUp;
