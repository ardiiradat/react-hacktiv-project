import React from "react";
import PropTypes from "prop-types";

export class MainInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      companies: []
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid mx-3 my-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <img
                  src="https://via.placeholder.com/300"
                  alt="thumbnail"
                  className="img-thumbnail"
                />
              </div>
              <div className="col-md-9">
                <h3>Hacktiv8 Meetup</h3>
                <p>Location : Jakarta, Indonesia</p>
                <p>Members : 1.078</p>
                <p>Organizers : Adhy Wiranata</p>
                <button type="button" className="btn btn-secondary px-5 py-1">
                  Join Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

MainInfo.propTypes = {};

export default MainInfo;
