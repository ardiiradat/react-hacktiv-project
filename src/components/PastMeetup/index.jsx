import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

export class PastMeetup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="mt-5">
          <div className="row">
            <div className="col-md-10">
              <h2>Past Meetup</h2>
            </div>
            <div className="col-md-2">
              <p className="text-right mr-3">See All</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="jumbotron jumbotron-fluid mx-3 my-3">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <p>27 November 2019</p>
                      <hr />
                      <p>
                        #39 JakartaJS Meetup Lorem Ipsum is simply dummy text
                      </p>
                      <p>
                        139 <span className="color-grey">Went</span>
                      </p>
                      <button
                        type="button"
                        className="btn btn-secondary px-5 py-1"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="jumbotron jumbotron-fluid mx-3 my-3">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <p>27 November 2019</p>
                      <hr />
                      <p>
                        #39 JakartaJS Meetup Lorem Ipsum is simply dummy text
                      </p>
                      <p>
                        139 <span className="color-grey">Went</span>
                      </p>
                      <button
                        type="button"
                        className="btn btn-secondary px-5 py-1"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="jumbotron jumbotron-fluid mx-3 my-3">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <p>27 November 2019</p>
                      <hr />
                      <p>
                        #39 JakartaJS Meetup Lorem Ipsum is simply dummy text
                      </p>
                      <p>
                        139 <span className="color-grey">Went</span>
                      </p>
                      <button
                        type="button"
                        className="btn btn-secondary px-5 py-1"
                      >
                        View
                      </button>
                    </div>
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

PastMeetup.propTypes = {};

export default PastMeetup;
